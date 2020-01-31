---
heading: Issue counts by GCD data dump, since 2019-11-01
blurb: A new credit tracking system rolled out in 2020; how's that going?
shortlink: 7HXG3N
position: 9899
---
```sql
FROM gcdissuesnapshot 2020-01-01
WHERE story_credit_source='gcd_story_credit'
GROUP BY time(1d), story_credit_source
SELECT distinct(story_id)
```
