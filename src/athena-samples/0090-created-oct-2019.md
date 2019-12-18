---
heading: GCD issue entries created in October 2019, with series, issue, story counts
blurb: Check out 10/29! It was a busy day.
link: query/11/visualization/13?api_key=eJiRlN32jCZVFUXQhcXFY2SBgMQSMQRImftssNnk
position: 90
---
```sql
SELECT created,
        count(distinct(series_id)) as series,
        count(distinct(issue_id)) as issues,
        count(distinct(story_id)) as stories
FROM "gcdissuesnapshot"."gcdissuesnapshot"
WHERE snapshot = 20191215 AND created < 20191101 AND created > 20191000
GROUP BY created
```
