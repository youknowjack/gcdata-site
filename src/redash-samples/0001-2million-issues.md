---
heading: 🆕 Non-variant issue count in GCD reaches TWO MILLION!
blurb: In August 2023, after years of diligent work by all the GCD volunteers, non-variant comic issue count reached 2 million. Well done!
link: query/37/visualization/51?api_key=481KOqr9GENkABW7R9SX53H1i6m249dzCrH1T7z1
graph: query/37/visualization/52?api_key=481KOqr9GENkABW7R9SX53H1i6m249dzCrH1T7z1
position: 0
---
```sql
SELECT snapshot,
        count(distinct(issue_id)) as issues
FROM gcd.gcdissuesnapshot
WHERE snapshot > 20230300 AND snapshot < 20230900
      AND variant_of_issue_id = 0 
      AND series_is_comics_publication = true
GROUP BY snapshot
ORDER BY snapshot DESC
```
