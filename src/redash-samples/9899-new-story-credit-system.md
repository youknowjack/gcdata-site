---
heading: Stories tracked in new credit system, since 2020-01-01
blurb: A new credit tracking system rolled out in 2020; how's that going?<br/><br/><span class="note">A note about the last part of the WHERE clause -- since the snapshot is a date integer in YYYYMMDD format, the <code>% 100</code> modulo is a convenient way to look just at the day of the month. Half of the snapshots are day 1 and half are day 15. Presto would need a large amount of memory to load in all the snapshots and do the distinct story_id count. Using half of snapshots allows the query to stay within memory limits.</span>
link: query/5/visualization/5?api_key=GRfopcdBnAjQB4ILuKjaFzorCsEr5JGzebzdTuGN&
graph: query/5/visualization/28?api_key=GRfopcdBnAjQB4ILuKjaFzorCsEr5JGzebzdTuGN&
position: 9899
---
```sql
SELECT snapshot, count(distinct(story_id)) as stories
FROM gcd.gcdissuesnapshot
WHERE snapshot >= 20200101 AND story_credit_source='gcd_story_credit'
      AND snapshot % 100 = 1
GROUP BY snapshot
ORDER BY snapshot DESC
```
