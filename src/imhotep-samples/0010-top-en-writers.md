---
heading: Top English-language writers, by issue count, with series and publisher counts
blurb: Stan is the man, but do you know Jack?
shortlink: AY9RYW
position: 10
---
```sql
FROM gcdissuesnapshot <start-date> <end-date>
WHERE story_script !=~'.*\?.*' story_script!='' 
      series_language_code='en' 
      variant_of_issue_id=0
GROUP BY story_script /* writer */
SELECT distinct(issue_id), distinct(series_id), distinct(publisher_id)
```
