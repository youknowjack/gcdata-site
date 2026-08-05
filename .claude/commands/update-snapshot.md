# Update Snapshot

Update the GCD snapshot date in `.eleventy.js` and ensure the corresponding month entry is present in the `snapshot % 10000 IN (...)` clauses of all `src/redash-samples/9*.md` query files.

## Usage

`/update-snapshot YYYYMMDD`

Example: `/update-snapshot 20261001`

## Steps

Given the new snapshot date from `$ARGUMENTS`:

1. **Parse the date.** The argument is a date integer in `YYYYMMDD` format. Compute the month-day key as `YYYYMMDD % 10000` (i.e., drop the leading 4-digit year). For example, `20261001 % 10000 = 1001`.

2. **Update `.eleventy.js`.** Find the line:
   ```js
   eleventyConfig.addGlobalData("snapshot", XXXXXXXX);
   ```
   Replace the integer value with the new snapshot date.

3. **Update each `src/redash-samples/9*.md` file.** Each file may contain a SQL code block with a quarterly `IN` clause like:
   ```sql
   snapshot % 10000 IN (101, 401, 701, 1001)
   ```
   - **Only update clauses that have exactly 4 values.** Skip any `IN` clause with a different count.
   - Compute the new set of 4 quarterly month-day keys that includes the new snapshot month:
     - Extract the month number `M` from the snapshot date (e.g., `20260801` → `M = 8`).
     - The 4 quarterly months are `M`, `M-3`, `M-6`, `M-9`, each taken mod 12 with 1-indexing (so `0` wraps to `12`).
     - Example: `M=8` → months `8, 5, 2, 11` → sorted ascending → `2, 5, 8, 11` → keys `201, 501, 801, 1101`.
     - Example: `M=10` → months `10, 7, 4, 1` → sorted ascending → `1, 4, 7, 10` → keys `101, 401, 701, 1001`.
   - Convert each month number to the key format: `month * 100 + 1` (no leading zero — January = `101`, October = `1001`, December = `1201`).
   - Replace the entire `IN (...)` value list with the new 4 keys in ascending order.

4. **Report** what was changed: the new snapshot date set in `.eleventy.js`, and for each 9*.md file the old and new IN clause values.

## Notes

- The month-day values follow the pattern `M*100+1` with no leading zero on the month (January 1 → `101`, October 1 → `1001`).
- Do not reformat or otherwise modify the SQL or frontmatter in the 9*.md files beyond the `IN (...)` list change.
- If `$ARGUMENTS` is empty, read the current snapshot value from `.eleventy.js` and print it, then stop.
