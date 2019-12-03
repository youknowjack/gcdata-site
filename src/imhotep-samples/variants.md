---
heading: Issues with greatest number of variants published
blurb: Spider-Man, Batman, and Godzilla take the top spots.
shortlink: Z2WHYR
position: 7
---
```sql
FROM gcdissuesnapshot <start-date> <end-date>
WHERE variant_of_issue_id!=0
GROUP BY variant_of_issue_id[100],
         series_name,
         issue_number_raw,
         publication_date
SELECT distinct(issue_id)
```
