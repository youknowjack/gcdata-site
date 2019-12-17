---
heading: Most common US dollar prices for comics published since 2019
blurb: Remember when comics were a nickel? Me neither.
link: query/8/visualization/9?api_key=TVV9RzcUBOCNMV9o69aYtdhz0VSOc3uKm4AhzDCY
position: 60
---
```sql
SELECT i.price,
        count(distinct(issueId)) as issues
FROM "gcdissuesnapshot"."gcdissuesnapshot"
CROSS JOIN UNNEST(price) AS i(price)
WHERE snapshot = 20191215 AND i.price LIKE '%USD%' AND publicationDate > 20190000
GROUP BY i.price
ORDER BY issues DESC
LIMIT 10
```