---
heading: Counts of series, issues, and stories, by country code
blurb: Did you know that 59% of series in GCD are from outside the United States?
link: query/15/visualization/15?api_key=X2eAZDiEF7QwWDk0fK7LFukhOgVxjtJldHWIovAk
position: 0
---
```sql
SELECT series_country_code,
         count(distinct(series_id)) AS series,
         count(distinct(issue_id)) AS issues,
         count(distinct(story_id)) AS stories
FROM "gcd"."gcdissuesnapshot"
WHERE snapshot = SNAPSHOT_DATE_HERE
GROUP BY  series_country_code
ORDER BY  series DESC
```
