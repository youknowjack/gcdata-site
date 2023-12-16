---
heading: Most common US dollar prices for comics published since 2019
blurb: Remember when comics were a nickel? Me neither.<br/><br/><span class="note">You can select a difference <b>currency</b> code in the dropdown, and you can change the date range with <b>start_year</b> and <b>end_year</b>.</span>
link: query/18/visualization/18?api_key=TVV9RzcUBOCNMV9o69aYtdhz0VSOc3uKm4AhzDCY&p_currency=USD&p_start_year=2019&p_end_year=2100
position: 60
---
```sql
SELECT i.price,
        count(distinct(issue_id)) as issues
FROM gcd.gcdissuesnapshot
CROSS JOIN UNNEST(price) AS i(price)
WHERE snapshot = SNAPSHOT_DATE_HERE AND
        i.price LIKE '%USD%' AND
        publication_date >= 20190000 AND
        publication_date <= 21009999
GROUP BY i.price
ORDER BY issues DESC
LIMIT 10
```
