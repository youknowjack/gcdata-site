---
heading: Top artists, by issue count, with series and publisher counts
blurb: Jack Kirby went through a lot of pencils in his lifetime!
shortlink: RR96E2
position: 3
---
```sql
FROM gcdissuesnapshot <start-date> <end-date>
WHERE story_pencils !=~'.*\?.*' story_pencils!='' 
      variant_of_issue_id=0
GROUP BY story_pencils /* artist */
SELECT distinct(issue_id), distinct(series_id), distinct(publisher_id)
```
