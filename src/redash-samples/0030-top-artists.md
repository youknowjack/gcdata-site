---
heading: Top artists, by issue count, with series and publisher counts
blurb: Jack Kirby went through a lot of pencils in his lifetime!
link: query/10/visualization/10?api_key=0CSqpOVFZwy0fQeNKwXc5YEnDpnq8slIXrF7J9MN
position: 30
---
```sql
SELECT story.artist,
        count(distinct(issue_id)) as issues,
        count(distinct(series_id)) as series,
        count(distinct(publisher_id)) as publishers
FROM gcd.gcdissuesnapshot
CROSS JOIN UNNEST(story_pencils) AS story(artist)
WHERE snapshot = SNAPSHOT_DATE_HERE AND
        story.artist not like '%?%' AND
        story.artist NOT IN ('', 'various') AND
        variant_of_issue_id=0
GROUP BY story.artist
ORDER BY issues DESC
LIMIT 1000
```
