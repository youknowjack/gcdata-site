---
heading: Stories tracked in new credit system, since 2020-01-01
blurb: A new credit tracking system rolled out in 2020; how's that going?<br/><br/><span class="note">A note about the last part of the WHERE clause -- since the snapshot is a date integer in YYYYMMDD format, the <code>% 10000</code> modulo is a convenient way to look just at the month and day. <code>215</code> is February 15, <code>415</code> is April 15, <code>615</code> is June 15, etc. Presto would need a large amount of memory to load in all the snapshots and do the distinct story_id count. Using a subset of snapshots allows the query to stay within memory limits.</span>
link: query/5/visualization/5?api_key=GRfopcdBnAjQB4ILuKjaFzorCsEr5JGzebzdTuGN&
graph: query/5/visualization/28?api_key=GRfopcdBnAjQB4ILuKjaFzorCsEr5JGzebzdTuGN&
position: 9899
---
```sql
SELECT snapshot, count(distinct(story_id)) as stories
FROM gcd.gcdissuesnapshot
WHERE snapshot >= 20200101 AND story_credit_source='gcd_story_credit'
      AND snapshot % 10000 IN (215, 415, 615, 815, 1015, 1215)
GROUP BY snapshot
ORDER BY snapshot DESC
```
