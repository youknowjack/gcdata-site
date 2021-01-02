---
heading: Most common US dollar prices for comics published since 2019
blurb: Remember when comics were a nickel? Me neither.
link: query/8/visualization/8?api_key=MH0qAqnG2jJ1jsSD3fk6Y8pdoSgdBLcNPDHEyaE8
position: 60
---
```sql
SELECT i.price,
        count(distinct(issue_id)) as issues
FROM gcd.gcdissuesnapshot
CROSS JOIN UNNEST(price) AS i(price)
WHERE snapshot = SNAPSHOT_DATE_HERE AND
        i.price LIKE '%USD%' AND
        publication_date > 20190000
GROUP BY i.price
ORDER BY issues DESC
LIMIT 10
```
