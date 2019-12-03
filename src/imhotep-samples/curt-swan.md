---
heading: Series drawn by Curt Swan, with issue counts
blurb: Curt drew that iconic "S" more than maybe anyone.
shortlink: M42DFD
position: 4
---
```sql
FROM gcdissuesnapshot <start-date> <end-date>
WHERE story_pencils='Curt Swan' 
      variant_of_issue_id=0
GROUP BY series_name
SELECT distinct(issue_id)
```
