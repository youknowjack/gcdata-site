---
heading: Top artists, by issue count, with series and publisher counts
blurb: Jack Kirby went through a lot of pencils in his lifetime!
link: query/5/visualization/6?api_key=0CSqpOVFZwy0fQeNKwXc5YEnDpnq8slIXrF7J9MN
position: 30
---
```sql
SELECT story.artist,
        count(distinct(issueId)) as issues,
        count(distinct(seriesId)) as series,
        count(distinct(publisherId)) as publishers
FROM gcdissuesnapshot.gcdissuesnapshot
CROSS JOIN UNNEST(storyPencils) AS story(artist)
WHERE snapshot=20191215 AND
	story.artist not like '%?%' AND
	story.artist NOT IN ('', 'various') AND
	variantOfIssueId=0
GROUP BY story.artist
ORDER BY issues DESC
```
