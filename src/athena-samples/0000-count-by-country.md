---
heading: Counts of series, issues, and stories, by country code
blurb: Did you know that 59% of series in GCD are from outside the United States?
link: query/2/visualization/3?api_key=X2eAZDiEF7QwWDk0fK7LFukhOgVxjtJldHWIovAk
position: 0
---
```sql
SELECT seriesCountryCode,
         count(distinct(seriesId)) AS series,
         count(distinct(issueId)) AS issues,
         count(distinct(storyId)) AS stories
FROM "gcdissuesnapshot"."gcdissuesnapshot"
WHERE snapshot=20191215
GROUP BY  seriesCountryCode
ORDER BY  series DESC
```
