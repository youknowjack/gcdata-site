---
heading: Most common page counts for English-language comics
blurb: The ubiquitous 36-pager takes the top spot. Number 3 may surprise you!
shortlink: KAFXFR
position: 50
---
```sql
FROM gcdissuesnapshot <start-date> <end-date>
WHERE series_language_code='en'
      page_count!=0
GROUP BY page_count[1000]
SELECT distinct(issue_id)
```
