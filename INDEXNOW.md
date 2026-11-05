# Bing IndexNow

The verification key is served from:

`https://www.sibinfotech.com/cf0490a9c153417498047e2eff85e0bd.txt`

## Production environment

Set the variables documented in `.env.example`. In production,
`INDEXNOW_ENABLED=true` makes the post-build script submit static Next.js page
routes added, modified, renamed, or deleted in the deployed Git change.

`POST /api/indexnow` supports external deployment/content systems. Authenticate
with `x-indexnow-secret: <INDEXNOW_SUBMISSION_SECRET>` and send:

```json
{
  "urls": ["/important-page", "https://www.sibinfotech.com/another-page"]
}
```

Only HTTPS URLs on `www.sibinfotech.com` are accepted.

For an explicit command-line submission:

```bash
npm run indexnow -- /important-page /deleted-page
```

Local Trends publishing, scheduled publishing, edits, unpublishing, slug changes,
and deletions call IndexNow automatically. Notification failures are logged but
do not interrupt content publishing or production builds.

HTTP 200 means accepted. HTTP 202 means accepted with key verification pending.
The final receipt history can be checked in Bing Webmaster Tools.
