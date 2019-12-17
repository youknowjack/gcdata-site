---
heading: Top English-language writers, by issue count, with series and publisher counts
blurb: Think Stan Lee is in the top spot? Then I guess you don't know Jack...
link: query/4/visualization/5?api_key=Y2qX8CQwq0vuwxZXuoQx5dQUX6hi1WcvO20BN1cE&
position: 10
---
```sql
SELECT story.writer,
         count(distinct(issueId)) AS issues,
         count(distinct(seriesId)) AS series,
         count(distinct(publisherId)) AS publishers
FROM "gcdissuesnapshot"."gcdissuesnapshot"
CROSS JOIN UNNEST(storyScript) AS story(writer)
WHERE snapshot=20191215 AND story.writer NOT LIKE '%?%' AND story.writer != '' AND seriesLanguageCode = 'en' AND variantOfIssueId = 0
GROUP BY  story.writer
ORDER BY  issues DESC
```
