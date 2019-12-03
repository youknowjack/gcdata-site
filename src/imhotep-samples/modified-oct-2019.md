---
heading: GCD issue entries modified in October 2019, with series, issue, story counts
blurb: Over 50,000 issues were modified in this month alone!
shortlink: YCCHTW
position: 10
---
```sql
FROM gcdissuesnapshot <start-date> <end-date>
WHERE modified < 20191101 modified > 20191000
GROUP BY modified
SELECT distinct(series_id) /* series */,
       distinct(issue_id) /* issues */,
       distinct(story_id) /* stories */
```
