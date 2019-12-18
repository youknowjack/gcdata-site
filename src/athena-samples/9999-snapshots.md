---
heading: Issue counts by GCD data dump, since 2019-11-01
blurb: Curious how fast the database is growing?
link: query/13/visualization/15?api_key=YQjKy7Pi1ypmkj0ZJsgl9d3Pis7gjN8VxH7NXmtG
graph: query/13/visualization/16?api_key=YQjKy7Pi1ypmkj0ZJsgl9d3Pis7gjN8VxH7NXmtG
position: 9999
---
```sql
SELECT snapshot,
        count(distinct(issueId)) as issues
FROM "gcdissuesnapshot"."gcdissuesnapshot"
GROUP BY snapshot
```
