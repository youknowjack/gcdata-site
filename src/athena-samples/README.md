# Have a query you want to add to [the Athena sample queries page](https://www.gcdata.org/athena-samples)?

First, you'll need a user account in our redash instance; email <a href="https://mailhide.io/e/T8xal" onclick="mailhidepopup=window.open('https://mailhide.io/e/T8xal','mailhidepopup','width=580,height=635'); return false;">a......@gcdata.org</a> to request access.
Once you have that, create and publish the query you want to add.
Then send a pull request with a new Markdown file in this directory. It should contain a frontmatter section:
```
---
heading: <heading that explains the query>
blurb: <pithy text to go beneath the heading, like a teaser or an insight>
link: path (after /embed/) to the public published redash query result page
position: <next unused position number>
---
```

After that, the body should be a Markdown code block (wrapped in <code>```sql</code>) that follows this pattern: 
```
SELECT <metric(s)>
FROM "gcdissuesnapshot"."gcdissuesnapshot"
WHERE snapshot = <snapshot-date> AND <other filter(s)>
GROUP BY <dimension(s)>
```
