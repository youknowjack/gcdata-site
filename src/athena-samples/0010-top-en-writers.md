---
heading: Top English-language writers, by issue count, with series and publisher counts
blurb: Stan is the man, but do you know Jack?
link: query/4/visualization/5?api_key=Y2qX8CQwq0vuwxZXuoQx5dQUX6hi1WcvO20BN1cE&
position: 10
---
```sql
SELECT story.writer,
         count(distinct(issue_id)) AS issues,
         count(distinct(series_id)) AS series,
         count(distinct(publisher_id)) AS publishers
FROM "gcdissuesnapshot"."gcdissuesnapshot"
CROSS JOIN UNNEST(story_script) AS story(writer)
WHERE snapshot = SNAPSHOT_DATE_HERE AND
        story.writer NOT LIKE '%?%' AND story.writer != '' AND
        series_language_code = 'en' AND variant_of_issue_id = 0
GROUP BY  story.writer
ORDER BY  issues DESC
LIMIT 1000
``
