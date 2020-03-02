---
heading: Stories tracked in new credit system, since 2020-01-01
blurb: A new credit tracking system rolled out in 2020; how's that going?
shortlink: 7HXG3N
graph: 28FGCT
position: 9899
---
```sql
FROM gcdissuesnapshot 2020-01-01
WHERE story_credit_source='gcd_story_credit'
GROUP BY time(1d), story_credit_source
SELECT distinct(story_id)
```
