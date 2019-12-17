---
heading: Most common page counts for English-language comics
blurb: The ubiquitous 36-pager takes the top spot. Number 3 may surprise you!
link: query/7/visualization/8?api_key=KwXy5dPATb5Xjs7ooZRXBhg0HUSX5G7947PezyHa
position: 50
---
```sql
SELECT pageCount,
        count(distinct(issueId)) as issues
FROM "gcdissuesnapshot"."gcdissuesnapshot"
WHERE snapshot=20191215 AND seriesLanguageCode = 'en' AND pageCount != 0
GROUP BY pageCount
ORDER BY issues DESC
LIMIT 1000
```
