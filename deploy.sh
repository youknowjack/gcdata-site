#!/bin/sh
#curl "https://redash.gcdata.org/embed/query/25/visualization/25?api_key=8cyi4zoKqJV1ESQW4h56pfZ7OfVxhNNTETWh5ZOa&"
#grep -o "202[0-9][0-9][0-9][0-9][0-9]" public/redash-samples/index.html | head -1
rsync -avz public/ ls-deb12-1:/var/www/gcdata/prod/

SNAPSHOT=$(ls -d /Users/jack/oss/builder-gcd-etl/gcd-parquet/snapshot=* | sort | tail -1 | xargs basename)
rsync -avz --delete \
  /Users/jack/oss/builder-gcd-etl/gcd-parquet/${SNAPSHOT}/ \
  ls-deb12-1:/var/www/gcd-parquet/${SNAPSHOT}/
rsync -avz \
  /Users/jack/oss/builder-gcd-etl/parquet-robots.txt \
  ls-deb12-1:/var/www/gcd-parquet/robots.txt
