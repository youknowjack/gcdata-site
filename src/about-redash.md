---
layout: base.njk
title: "GCD Comics Data Analytics: About Redash"
permalink: /about-redash/
---

# Data Analytics for GCD

Behind our Redash front-end is the Presto query engine, backed by Parquet files in a Hive metastore.

[Sample Queries](/redash-samples/)

## Hive Schema

The `gcdissuesnapshot` table is denormalized from the [GCD schema](https://docs.comics.org/wiki/Current_Schema)
and partitioned by the `snapshot` date (YYYYMMDD) based on the date of the data dump. Each row in this
denormalized table corresponds to a row in `gcd_story` or `gcd_issue` if an issue has no linked stories,
and includes linked data pulled from `gcd_issue`, `gcd_publisher`, `gcd_indica_publisher`, `gcd_brand`, and
`gcd_story_credit`.

Here is the schema as reported by running `show create table gcd.gcdissuesnapshot;` in the Presto client.

```sql
 CREATE TABLE hive.gcd.gcdissuesnapshot (
    unix_time bigint,
    issue_id bigint,
    issue_number_raw varchar,
    issue_number integer,
    publication_date integer,
    price_raw varchar,
    price array(varchar),
    page_count integer,
    indicia_frequency varchar,
    isbn varchar,
    variant_name varchar,
    variant_of_issue_id bigint,
    barcode varchar,
    title varchar,
    on_sale_date integer,
    rating varchar,
    volume_not_printed boolean,
    editing array(varchar),
    notes varchar,
    created integer,
    modified integer,
    series_id bigint,
    series_name varchar,
    series_year_began integer,
    series_year_ended integer,
    series_is_current boolean,
    series_country_code varchar,
    series_language_code varchar,
    series_has_gallery boolean,
    series_is_comics_publication boolean,
    series_color varchar,
    series_dimensions varchar,
    series_paper_stock varchar,
    series_binding array(varchar),
    series_publishing_format varchar,
    series_publishing_type varchar,
    series_is_singleton boolean,
    series_created integer,
    series_modified integer,
    publisher_id bigint,
    publisher_name varchar,
    publisher_country_code varchar,
    publisher_created integer,
    publisher_modified integer,
    publisher_url varchar,
    indicia_publisher_id bigint,
    indicia_publisher_name varchar,
    indicia_publisher_country_code varchar,
    indicia_publisher_parent_id bigint,
    indicia_publisher_year_began integer,
    indicia_publisher_year_ended integer,
    indicia_publisher_is_surrogate boolean,
    indicia_publisher_url varchar,
    indicia_publisher_created integer,
    indicia_publisher_modified integer,
    brand_id bigint,
    brand_name varchar,
    brand_url varchar,
    brand_created integer,
    brand_modified integer,
    story_id bigint,
    story_title varchar,
    story_feature varchar,
    story_sequence_number integer,
    story_page_count integer,
    story_script array(varchar),
    story_script_creator_id array(bigint),
    story_pencils array(varchar),
    story_pencils_creator_id array(bigint),
    story_inks array(varchar),
    story_inks_creator_id array(bigint),
    story_colors array(varchar),
    story_colors_creator_id array(bigint),
    story_letters array(varchar),
    story_letters_creator_id array(bigint),
    story_editing array(varchar),
    story_editing_creator_id array(bigint),
    story_painting array(varchar),
    story_painting_creator_id array(bigint),
    story_credit_source varchar,
    story_genre array(varchar),
    story_characters array(varchar),
    story_type varchar,
    story_job_number varchar,
    story_first_line varchar,
    story_created integer,
    story_modified integer,
    snapshot integer
 )
 WITH (
    external_location = 'hdfs://localhost/gcd/parquet',
    format = 'PARQUET',
    partitioned_by = ARRAY['snapshot']
 )
```
