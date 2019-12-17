---
heading: Variants of The Amazing Spider-Man 666
blurb: Face it, Tiger... you just hit the jackpot!
link: query/10/visualization/12?api_key=HkfYZdZ1pTmnauDRErqQoHDigTCGKELGzyM2jZdh
position: 80
---
```sql
SELECT seriesName, issueNumberRaw, variantName
FROM "gcdissuesnapshot"."gcdissuesnapshot"
WHERE snapshot = 20191215 AND variantOfIssueId = 863623
GROUP BY seriesName, issueNumberRaw, variantName
```
