---
heading: Series by Stan Lee, with issue counts
blurb: Stan did write a LOT of comics!
link: query/4/visualization/4?api_key=mopNZaejdtJLz1gJryPof4QqC8qGkTXaSwyGZuOK
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
