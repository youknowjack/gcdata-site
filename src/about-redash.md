---
layout: base.njk
title: "GCD Comics Data Analytics: About"
permalink: /about-redash/
---

# Data Analytics for GCD

The [gcd-etl project](https://github.com/youknowjack/gcd-etl) runs a Python/pyarrow pipeline against each
GCD data dump to produce a denormalized Parquet snapshot. A self-hosted
[Redash](https://github.com/getredash/redash) instance backed by [DuckDB](https://duckdb.org/) provides
dashboards and query authoring. You can also query the latest snapshot directly in your browser via the
[Explore](/explore/) page, which uses DuckDB WASM.

[Sample Queries](/redash-samples/)

## Schema

The `gcdissuesnapshot` table is denormalized from the [GCD schema](https://docs.comics.org/wiki/Current_Schema)
and partitioned by the `snapshot` date (YYYYMMDD) based on the date of the data dump. Each row corresponds
to a row in `gcd_story` (or `gcd_issue` if an issue has no linked stories), and includes data pulled from
`gcd_issue`, `gcd_publisher`, `gcd_indica_publisher`, `gcd_brand`, and `gcd_story_credit`.

The schema (DuckDB column types):

```sql
unix_time BIGINT,
issue_id BIGINT,
issue_number_raw VARCHAR,
issue_number INTEGER,
publication_date INTEGER,
price_raw VARCHAR,
price VARCHAR[],
page_count INTEGER,
indicia_frequency VARCHAR,
isbn VARCHAR,
variant_name VARCHAR,
variant_of_issue_id BIGINT,
barcode VARCHAR,
title VARCHAR,
on_sale_date INTEGER,
rating VARCHAR,
volume_not_printed BOOLEAN,
editing VARCHAR[],
notes VARCHAR,
created INTEGER,
modified INTEGER,
series_id BIGINT,
series_name VARCHAR,
series_year_began INTEGER,
series_year_ended INTEGER,
series_is_current BOOLEAN,
series_country_code VARCHAR,
series_language_code VARCHAR,
series_has_gallery BOOLEAN,
series_is_comics_publication BOOLEAN,
series_color VARCHAR,
series_dimensions VARCHAR,
series_paper_stock VARCHAR,
series_binding VARCHAR[],
series_publishing_format VARCHAR,
series_publishing_type VARCHAR,
series_is_singleton BOOLEAN,
series_created INTEGER,
series_modified INTEGER,
publisher_id BIGINT,
publisher_name VARCHAR,
publisher_country_code VARCHAR,
publisher_created INTEGER,
publisher_modified INTEGER,
publisher_url VARCHAR,
indicia_publisher_id BIGINT,
indicia_publisher_name VARCHAR,
indicia_publisher_country_code VARCHAR,
indicia_publisher_parent_id BIGINT,
indicia_publisher_year_began INTEGER,
indicia_publisher_year_ended INTEGER,
indicia_publisher_is_surrogate BOOLEAN,
indicia_publisher_url VARCHAR,
indicia_publisher_created INTEGER,
indicia_publisher_modified INTEGER,
brand_id BIGINT,
brand_name VARCHAR,
brand_url VARCHAR,
brand_created INTEGER,
brand_modified INTEGER,
story_id BIGINT,
story_title VARCHAR,
story_feature VARCHAR,
story_sequence_number INTEGER,
story_page_count INTEGER,
story_script VARCHAR[],
story_script_creator_id BIGINT[],
story_pencils VARCHAR[],
story_pencils_creator_id BIGINT[],
story_inks VARCHAR[],
story_inks_creator_id BIGINT[],
story_colors VARCHAR[],
story_colors_creator_id BIGINT[],
story_letters VARCHAR[],
story_letters_creator_id BIGINT[],
story_editing VARCHAR[],
story_editing_creator_id BIGINT[],
story_painting VARCHAR[],
story_painting_creator_id BIGINT[],
story_credit_source VARCHAR,
story_genre VARCHAR[],
story_characters VARCHAR[],
story_type VARCHAR,
story_job_number VARCHAR,
story_first_line VARCHAR,
story_created INTEGER,
story_modified INTEGER,
snapshot INTEGER
```

## Architecture

```
GCD MySQL dump
      │
      ▼
pipeline.py (Python + pyarrow)
      │
      ▼
gcd-parquet/snapshot=YYYYMMDD/*.parquet  (local + S3)
      │
      ├─► DuckDB (local) ──► Redash (Docker)
      │
      └─► DuckDB WASM (browser) ◄── parquet.gcdata.org
```

## Historical: Hive/Presto architecture (pre-2026)

Prior to 2026 the pipeline was a Java/Maven project using the Cloudera CDH 5 distribution to write Parquet
via Avro, stored in HDFS, served by a Hive metastore and Presto query engine. The Hive DDL for the table was:

```sql
CREATE TABLE hive.gcd.gcdissuesnapshot (
   ...columns as above...
)
WITH (
   external_location = 'hdfs://localhost/gcd/parquet',
   format = 'PARQUET',
   partitioned_by = ARRAY['snapshot']
)
```

The pipeline ran on CDH 5.4.11 (a 2015-era Hadoop distribution, EOL) and required ~300 Maven/CDH jars to
write a single Parquet file. It was replaced by a Python/pyarrow pipeline that eliminated the Hadoop,
Hive, and Presto daemons entirely.
