---
heading: Series drawn by Curt Swan, with issue counts
blurb: Curt drew that iconic "S" more than maybe anyone.
link: query/6/visualization/7?api_key=wDP7pjPhD4s8p9Zu9VT9K7DdGZXxgZtpxrodHxtQ
position: 40
---
```sql
SELECT series_name,
         count(distinct(issue_id)) AS issues
FROM "gcdissuesnapshot"."gcdissuesnapshot"
WHERE snapshot = SNAPSHOT_DATE_HERE AND
        contains(story_pencils, 'Curt Swan') AND
        variant_of_issue_id = 0
GROUP BY  series_name
ORDER BY  issues DESC
```
