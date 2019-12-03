---
heading: Top English-language writers, by issue count, with series and publisher counts
blurb: Think Stan Lee is in the top spot? Then I guess you don't know Jack...
shortlink: AY9RYW
position: 1
---
```sql
FROM gcdissuesnapshot <start-date> <end-date>
WHERE story_script !=~'.*\?.*' story_script!='' 
      series_language_code='en' 
      variant_of_issue_id=0
GROUP BY story_script /* writer */
SELECT distinct(issue_id), distinct(series_id), distinct(publisher_id)
```
