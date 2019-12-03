---
heading: Series by Stan Lee, with issue counts
blurb: Stan did write a LOT of comics!
shortlink: TFFEX8
position: 2
---
```sql
FROM gcdissuesnapshot <start-date> <end-date>
WHERE story_script='Stan Lee'
      series_language_code='en' 
      variant_of_issue_id=0
GROUP BY series_name
SELECT distinct(issue_id)
```
