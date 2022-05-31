---
heading: Average US dollar issue prices for 36-page comics published since 1970
blurb: Production of 36-page comics peaked in 1994, when the average price was $2.12 USD.
link: query/29/visualization/34?api_key=TVV9RzcUBOCNMV9o69aYtdhz0VSOc3uKm4AhzDCY
graph: query/29/visualization/35?api_key=TVV9RzcUBOCNMV9o69aYtdhz0VSOc3uKm4AhzDCY
position: 64
---
```sql
SELECT CAST(FLOOR(publication_date/10000) as varchar) as year,
        ROUND(avg(cast(regexp_extract(i.price, '[0-9]+\.[0-9]+') as double)), 2) as average_price,
        count(1) as unique_issue_count
FROM gcd.gcdissuesnapshot
CROSS JOIN UNNEST(price) AS i(price)
WHERE snapshot = SNAPSHOT_DATE_HERE AND
        series_language_code = 'en' AND
        series_country_code = 'us' AND
        page_count = 36 AND
        variant_of_issue_id = 0 AND
        regexp_like(i.price, '^[0-9]+\.[0-9]+ ?USD') AND
        publication_date > 19700000 AND
        publication_date < 20220000
GROUP BY FLOOR(publication_date/10000)
ORDER BY year DESC
```
