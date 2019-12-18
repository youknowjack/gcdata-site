---
heading: Variants of The Amazing Spider-Man 666
blurb: Face it, Tiger... you just hit the jackpot!
link: query/10/visualization/12?api_key=HkfYZdZ1pTmnauDRErqQoHDigTCGKELGzyM2jZdh
position: 80
---
```sql
SELECT series_name, issue_number_raw, variant_name
FROM "gcdissuesnapshot"."gcdissuesnapshot"
WHERE snapshot = 20191215 AND variant_of_issue_id = 863623
GROUP BY series_name, issue_number_raw, variant_name
```
