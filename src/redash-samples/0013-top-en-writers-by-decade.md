---
heading: 🆕 Top English-language writer each decade since 1900, by issue count
blurb: Stan Lee owns a few decades, but other great writers have taken their turn!<br/><br/><span class="note">You can change the <b>count</b> parameter to see more than one top writer per decade. Adjust <b>first_decade</b> and <b>last_decade</b> to zoom in and out. Change the series <b>language</b> using the drop-down.</span>
link: query/38/visualization/53?api_key=REU12EU7DzFM0iq8BUWfrvPrmWaq210fOtcmmwZ5&p_count=1&p_first_decade=1900&p_last_decade=2020&p_language=en
graph: query/38/visualization/54?api_key=REU12EU7DzFM0iq8BUWfrvPrmWaq210fOtcmmwZ5&p_count=1&p_first_decade=1900&p_last_decade=2020&p_language=en
position: 13
---
```sql
SELECT decade, rank, writer, issues FROM (
    SELECT story.writer,
         FLOOR(publication_date/100000)*10 as decade,
         count(distinct(issue_id)) AS issues,
         row_number() over (partition by FLOOR(publication_date/100000)*10 order by count(distinct(issue_id)) desc) as rank
    FROM (
        SELECT issue_id, publication_date, story_script
        FROM gcd.gcdissuesnapshot
        WHERE snapshot = SNAPSHOT_DATE_HERE
          AND series_language_code = 'en' AND variant_of_issue_id = 0
    )
    CROSS JOIN UNNEST(story_script) AS story(writer)
    WHERE story.writer NOT LIKE '%?%' AND story.writer != ''
    GROUP BY story.writer, FLOOR(publication_date/100000)*10
    ORDER BY decade DESC, issues DESC
)
WHERE rank <= 1 AND decade >= 1900 AND decade <= 2020
ORDER BY decade DESC, rank
```
