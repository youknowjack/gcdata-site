---
heading: Variants of The Amazing Spider-Man 666
blurb: Face it, Tiger... you just hit the jackpot!
link: query/10/visualization/10?api_key=gHhZlcjkiBBHnZedFmxCcItVARGT78GAMKSEUXeJ
position: 80
---
```sql
SELECT series_name, issue_number_raw, variant_name
FROM gcd.gcdissuesnapshot
WHERE snapshot = SNAPSHOT_DATE_HERE AND variant_of_issue_id = 863623
GROUP BY series_name, issue_number_raw, variant_name
```
