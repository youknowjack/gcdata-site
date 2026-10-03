---
heading: Comic issue counts by GCD data dump since 2015
blurb: It is great to see how the database has grown through the years!<br/><br/><span class="note">A note about the first part of the WHERE clause -- since the snapshot is a date integer in YYYYMMDD format, the <code>% 10000</code> modulo is a convenient way to look just at the month and day. <code>201</code> is February 1, and <code>801</code> is August 1. Using a subset of snapshots keeps query time reasonable.</span>
link: query/22/visualization/22?api_key=YQjKy7Pi1ypmkj0ZJsgl9d3Pis7gjN8VxH7NXmtG
graph: query/22/visualization/29?api_key=YQjKy7Pi1ypmkj0ZJsgl9d3Pis7gjN8VxH7NXmtG
position: 9999
---
```sql
SELECT snapshot,
        count(distinct(issue_id)) as issues
FROM gcd.gcdissuesnapshot
WHERE snapshot % 10000 IN (101, 401, 701, 1001)
      AND variant_of_issue_id = 0 
      AND series_is_comics_publication = true
GROUP BY snapshot
ORDER BY snapshot DESC
```
