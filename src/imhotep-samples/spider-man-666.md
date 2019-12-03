---
heading: Variants of The Amazing Spider-Man 666
blurb: Face it, Tiger... you just hit the jackpot!
shortlink: 2XAZ6F
position: 8
---
```sql
FROM gcdissuesnapshot <start-date> <end-date>
WHERE variant_of_issue_id = 863623
GROUP BY series_name,
         issue_number_raw,
         variant_name
SELECT distinct(issue_id)
```
