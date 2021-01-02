---
heading: Top English-language writers, by issue count, with series and publisher counts
blurb: Stan is the man, but do you know Jack?
link: query/3/visualization/3?api_key=Q7j3oRZgL0SrDawEw73ZVNIqjo3Gsb913hpmparE
position: 10
---
```sql
SELECT story.writer,
         count(distinct(issue_id)) AS issues,
         count(distinct(series_id)) AS series,
         count(distinct(publisher_id)) AS publishers
FROM gcd.gcdissuesnapshot
CROSS JOIN UNNEST(story_script) AS story(writer)
WHERE snapshot = SNAPSHOT_DATE_HERE AND
        story.writer NOT LIKE '%?%' AND story.writer != '' AND
        series_language_code = 'en' AND variant_of_issue_id = 0
GROUP BY  story.writer
ORDER BY  issues DESC
LIMIT 1000
``
