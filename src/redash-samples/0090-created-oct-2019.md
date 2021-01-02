---
heading: GCD issue entries created in October 2019, with series, issue, story counts
blurb: Check out 10/29! It was a busy day.
link: query/11/visualization/11?api_key=X3Hot6x8aVEXpYy66PAd8PIg8QAdTsteE9p0DzBx
position: 90
---
```sql
SELECT created,
        count(distinct(series_id)) as series,
        count(distinct(issue_id)) as issues,
        count(distinct(story_id)) as stories
FROM gcd.gcdissuesnapshot
WHERE snapshot = SNAPSHOT_DATE_HERE AND created < 20191101 AND created > 20191000
GROUP BY created
```
