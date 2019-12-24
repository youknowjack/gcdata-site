---
heading: Most common page counts for English-language comics
blurb: The ubiquitous 36-pager takes the top spot. Number 3 may surprise you!
link: query/7/visualization/8?api_key=KwXy5dPATb5Xjs7ooZRXBhg0HUSX5G7947PezyHa
position: 50
---
```sql
SELECT page_count,
        count(distinct(issue_id)) as issues
FROM "gcdissuesnapshot"."gcdissuesnapshot"
WHERE snapshot = SNAPSHOT_DATE_HERE AND
        series_language_code = 'en' AND
        page_count != 0
GROUP BY page_count
ORDER BY issues DESC
LIMIT 1000
```
