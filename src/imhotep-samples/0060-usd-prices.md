---
heading: Most common US dollar prices for comics published since 2019
blurb: Remember when comics were a nickel? Me neither.
shortlink: K2Z7C2
position: 60
---
```sql
FROM gcdissuesnapshot <start-date> <end-date>
WHERE price=~'.*USD.*'
      publication_date > 20190000
GROUP BY price[10]
SELECT distinct(issue_id)
```
