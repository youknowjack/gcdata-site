---
path: "/doc/imhotep-sample-queries"
title: "GCD Comics Data Analytics: Imhotep Sample Queries"
---

# Imhotep Sample Queries

#### Counts of Series, Issues, Stories by Country
<a name="q1"></a>

```sql
FROM gcdissuesnapshot <start-date> <end-date>
GROUP BY series_country_code
SELECT distinct(series_id) /* series */,
       distinct(issue_id) /* issues */,
       distinct(story_id) /* stories */
```

<a href="https://imhotep.gcdata.org/iql/q/CTT3AY" target="_blank">▶️ Run Query</a>

#### Top English Language Writers, by issue count, with series and publisher counts
<a name="q2"></a>

```sql
FROM gcdissuesnapshot <start-date> <end-date>
WHERE story_script !=~'.*\?.*' story_script!='' 
      series_language_code='en' 
      variant_of_issue_id=0
GROUP BY story_script /* writer */
SELECT distinct(issue_id), distinct(series_id), distinct(publisher_id)
```

<a href="https://imhotep.gcdata.org/iql/q/AY9RYW" target="_blank">▶️ Run Query</a>
