---
heading: Series drawn by Curt Swan, with issue counts
blurb: Curt drew that iconic "S" more than maybe anyone.
link: query/6/visualization/7?api_key=wDP7pjPhD4s8p9Zu9VT9K7DdGZXxgZtpxrodHxtQ
position: 40
---
```sql
SELECT seriesName,
         count(distinct(issueId)) AS issues
FROM "gcdissuesnapshot"."gcdissuesnapshot"
WHERE snapshot=20191215 AND contains(storyPencils, 'Curt Swan') AND variantOfIssueId = 0
GROUP BY  seriesName
ORDER BY  issues DESC
```
