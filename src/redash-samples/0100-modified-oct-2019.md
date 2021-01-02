---
heading: GCD issue entries modified in October 2019, with series, issue, story counts
blurb: Over 50,000 issues were modified in this month alone!
link: query/12/visualization/12?api_key=KI0F6xAV3edGRGDB68hd4YNnrzKoAivQCWXGGVye
position: 100
---
```sql
SELECT modified,
        count(distinct(series_id)) as series,
        count(distinct(issue_id)) as issues,
        count(distinct(story_id)) as stories
FROM gcd.gcdissuesnapshot
WHERE snapshot = SNAPSHOT_DATE_HERE AND modified < 20191101 AND modified > 20191000
GROUP BY modified
```
