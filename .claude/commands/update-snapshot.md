# Update Snapshot

Update the GCD snapshot date in `.eleventy.js` and update the quarterly `IN` clauses in all `src/redash-samples/9*.md` query files.

## Usage

`/update-snapshot YYYYMMDD` (dashes optional — `YYYY-MM-DD` is also accepted)

Example: `/update-snapshot 20261015`

## Steps

Given the new snapshot date from `$ARGUMENTS`:

1. **Parse the date.** Strip any dashes to get an 8-digit integer `YYYYMMDD`. Extract:
   - Month number `M` = digits 5–6 (e.g., `20260815` → `M = 8`)
   - Day number `D` = digits 7–8 (e.g., `20260815` → `D = 15`)
   - Month-day key = `YYYYMMDD % 10000` = `M*100 + D` (e.g., `815`)

2. **Update `.eleventy.js`.** Find the line:
   ```js
   eleventyConfig.addGlobalData("snapshot", XXXXXXXX);
   ```
   Replace the integer value with the new snapshot date (no dashes).

3. **Update each `src/redash-samples/9*.md` file.** Each file may contain a SQL code block with a quarterly `IN` clause like:
   ```sql
   snapshot % 10000 IN (215, 515, 815, 1115)
   ```
   - **Only update clauses that have exactly 4 values.** Skip any `IN` clause with a different count.
   - Compute the new set of 4 quarterly month-day keys:
     - The 4 quarterly months are `M`, `M-3`, `M-6`, `M-9`, each mod 12 with 1-indexing (so `0` wraps to `12`).
     - Convert each month to a key using `month * 100 + D` (same day `D` as the snapshot).
     - Sort the 4 keys ascending.
     - Example: `20260815` → M=8, D=15 → months 8,5,2,11 → keys `215, 515, 815, 1115`.
     - Example: `20261015` → M=10, D=15 → months 10,7,4,1 → keys `115, 415, 715, 1015`.
   - Replace the entire `IN (...)` value list with the new 4 keys in ascending order.

4. **Report** what was changed: the new snapshot date set in `.eleventy.js`, and for each 9*.md file the old and new IN clause values.

## Notes

- The month-day key format is `M*100+D` with no leading zero on the month (August 15 → `815`, October 15 → `1015`).
- Do not reformat or otherwise modify the SQL or frontmatter in the 9*.md files beyond the `IN (...)` list change.
- If `$ARGUMENTS` is empty, read the current snapshot value from `.eleventy.js` and print it, then stop.
