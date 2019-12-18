---
heading: Series by Stan Lee, with issue counts
blurb: Stan did write a LOT of comics!
link: query/3/visualization/4?api_key=oqs6j57jTR8W0MYr2za2z40AKXWYhOHkP3k1Aqhn
position: 20
---
```sql
SELECT seriesName,
         count(distinct(issueId)) AS issues
FROM "gcdissuesnapshot"."gcdissuesnapshot"
WHERE snapshot=20191215 AND
	contains(storyScript, 'Stan Lee') AND
	seriesLanguageCode = 'en' AND variantOfIssueId = 0
GROUP BY  seriesName
ORDER BY  issues DESC
```
