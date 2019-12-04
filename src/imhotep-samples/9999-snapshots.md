---
heading: Issue counts by GCD data dump, since 2019-11-01
blurb: Curious how fast the database is growing?
shortlink: 9ZWNDR
position: 9999
---
```sql
FROM gcdissuesnapshot 2019-11-01 today
GROUP BY time(1d)
SELECT distinct(issue_id)
```
