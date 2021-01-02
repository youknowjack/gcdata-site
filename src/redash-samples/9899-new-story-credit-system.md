---
heading: Stories tracked in new credit system, since 2020-01-01
blurb: A new credit tracking system rolled out in 2020; how's that going?
link: query/14/visualization/15?api_key=F7WREtuOkOMKh29t7cBobEakz6LgmyrtrH90lvOz
graph: query/14/visualization/16?api_key=F7WREtuOkOMKh29t7cBobEakz6LgmyrtrH90lvOz
position: 9899
---
```sql
SELECT snapshot, count(distinct(story_id)) as stories
FROM gcd.gcdissuesnapshot
WHERE snapshot >= 20200101 AND story_credit_source='gcd_story_credit'
GROUP BY snapshot
ORDER BY snapshot DESC
```
