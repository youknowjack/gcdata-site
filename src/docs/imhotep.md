---
path: "/doc/imhotep-sample-queries"
title: "GCD Comics Data Analytics: Imhotep Sample Queries"
---

# Imhotep Sample Queries

<a name="q1"></a>
### Counts of series, issues, and stories, by country code

Did you know that 59% of series in GCD are from outside the United States?

```sql
FROM gcdissuesnapshot <start-date> <end-date>
GROUP BY series_country_code
SELECT distinct(series_id) /* series */,
       distinct(issue_id) /* issues */,
       distinct(story_id) /* stories */
```

<a href="https://imhotep.gcdata.org/iql/q/CTT3AY" target="_blank">▶️ Run Query</a>

<a name="q2"></a>
### Top English-language writers, by issue count, with series and publisher counts

Think Stan Lee is in the top spot? Then I guess you don't know Jack...

```sql
FROM gcdissuesnapshot <start-date> <end-date>
WHERE story_script !=~'.*\?.*' story_script!='' 
      series_language_code='en' 
      variant_of_issue_id=0
GROUP BY story_script /* writer */
SELECT distinct(issue_id), distinct(series_id), distinct(publisher_id)
```

<a href="https://imhotep.gcdata.org/iql/q/AY9RYW" target="_blank">▶️ Run Query</a>
