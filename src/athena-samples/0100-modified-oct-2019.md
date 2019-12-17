---
heading: GCD issue entries modified in October 2019, with series, issue, story counts
blurb: Over 50,000 issues were modified in this month alone!
link: query/12/visualization/14?api_key=p4lPVRSFlpi1EVhrm70LcPOmT06osZO137Daj9NE
position: 100
---
```sql
SELECT modified,
        count(distinct(seriesId)) as series,
        count(distinct(issueId)) as issues,
        count(distinct(storyId)) as stories
FROM "gcdissuesnapshot"."gcdissuesnapshot"
WHERE snapshot = 20191215 AND modified < 20191101 AND modified > 20191000
GROUP BY modified
```
