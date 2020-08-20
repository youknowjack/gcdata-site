---
heading: Issue counts by GCD data dump, twice a year since 2015
blurb: Curious how fast the database is growing?
link: query/22/visualization/22?api_key=YQjKy7Pi1ypmkj0ZJsgl9d3Pis7gjN8VxH7NXmtG
graph: query/22/visualization/29?api_key=YQjKy7Pi1ypmkj0ZJsgl9d3Pis7gjN8VxH7NXmtG
position: 9999
---
```sql
SELECT snapshot,
        count(distinct(issue_id)) as issues
FROM "gcd"."gcdissuesnapshot"
WHERE snapshot <= 20190701 OR (snapshot IN (20200101, 20200701))
GROUP BY snapshot
ORDER BY snapshot DESC
```
