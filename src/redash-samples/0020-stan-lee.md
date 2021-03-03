---
heading: Series by Stan Lee, with issue counts
blurb: Stan did write a LOT of comics!
link: query/14/visualization/14?api_key=oqs6j57jTR8W0MYr2za2z40AKXWYhOHkP3k1Aqhn
position: 20
---
```sql
SELECT series_name,
         count(distinct(issue_id)) AS issues
FROM gcd.gcdissuesnapshot
WHERE snapshot = SNAPSHOT_DATE_HERE AND
        cardinality(filter(story_script, x -> regexp_like(x, 'Stan Lee( [\[\(].*)?'))) > 0 AND
        series_language_code = 'en' AND variant_of_issue_id = 0
GROUP BY  series_name
ORDER BY  issues DESC
```
