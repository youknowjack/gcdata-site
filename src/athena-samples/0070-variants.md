---
heading: Issues with greatest number of variants published
blurb: Spider-Man, Batman, and Godzilla take the top spots.
link: query/9/visualization/11?api_key=ytKIY01ROHDxFM6gLYsSsyftAccDoeMRmuo81coP
position: 70
---
```sql
SELECT variantOfIssueId,
         seriesName,
         issueNumberRaw,
         publicationDate,
         count(distinct(issueId)) as issues
FROM "gcdissuesnapshot"."gcdissuesnapshot"
WHERE snapshot = 20191215 AND variantOfIssueId != 0
GROUP BY variantOfIssueId,
         seriesName,
         issueNumberRaw,
         publicationDate
ORDER BY issues DESC
LIMIT 100
```
