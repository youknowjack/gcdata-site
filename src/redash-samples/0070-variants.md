---
heading: Issues with greatest number of variants published
blurb: Spider-Man, Batman, and Godzilla take the top spots.
link: query/17/visualization/17?api_key=ytKIY01ROHDxFM6gLYsSsyftAccDoeMRmuo81coP
position: 70
---
```sql
SELECT variant_of_issue_id,
         series_name,
         issue_number_raw,
         publication_date,
         count(distinct(issue_id)) as issues
FROM gcd.gcdissuesnapshot
WHERE snapshot = SNAPSHOT_DATE_HERE AND variant_of_issue_id != 0
GROUP BY variant_of_issue_id,
         series_name,
         issue_number_raw,
         publication_date
ORDER BY issues DESC
LIMIT 100
```
