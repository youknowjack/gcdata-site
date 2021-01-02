---
heading: Issue counts by GCD data dump, twice a year since 2015
blurb: Curious how fast the database is growing?
link: query/13/visualization/13?api_key=7940sQtXf7gFWvTbBTGNjAgloNx7fI5blZ84TZiT
graph: query/13/visualization/14?api_key=7940sQtXf7gFWvTbBTGNjAgloNx7fI5blZ84TZiT
position: 9999
---
```sql
SELECT snapshot,
        count(distinct(issue_id)) as issues
FROM gcd.gcdissuesnapshot
WHERE snapshot <= 20190701 OR (snapshot IN (20200101, 20200701))
GROUP BY snapshot
ORDER BY snapshot DESC
```
