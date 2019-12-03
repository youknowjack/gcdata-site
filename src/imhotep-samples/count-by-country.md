---
heading: Counts of series, issues, and stories, by country code
blurb: Did you know that 59% of series in GCD are from outside the United States?
shortlink: CTT3AY
position: 0
---
```sql
FROM gcdissuesnapshot <start-date> <end-date>
GROUP BY series_country_code
SELECT distinct(series_id) /* series */,
       distinct(issue_id) /* issues */,
       distinct(story_id) /* stories */
```
