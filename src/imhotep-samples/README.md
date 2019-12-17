# Have a query you want to add to [the Imhotep sample queries page](https://www.gcdata.org/imhotep-samples)?

Send a pull request with a new Markdown file in this directory. It should contain a frontmatter section:
```
---
heading: <heading that explains the query>
blurb: <pithy text to go beneath the heading, like a teaser or an insight>
shortlink: <six-character shortlink code generated using "Link" in IQL webapp>
position: <next unused position number>
---
```

After that, the body should be a Markdown code block (wrapped in <code>```sql</code>) that follows this pattern: 
```
FROM gcdissuesnapshot <start-date> <end-date>
WHERE <filter(s)>
GROUP BY <dimension(s)>
SELECT <metric(s)>
```
