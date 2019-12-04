---
heading: GCD issue entries created in October 2019, with series, issue, story counts
blurb: Check out 10/29! It was a busy day.
shortlink: RHXWZT
position: 90
---
```sql
FROM gcdissuesnapshot <start-date> <end-date>
WHERE created < 20191101 created > 20191000
GROUP BY created
SELECT distinct(series_id) /* series */,
       distinct(issue_id) /* issues */,
       distinct(story_id) /* stories */
```
