// middleware.js
import { NextResponse } from "next/server";

/*
 * Permanently removed URLs.
 * These paths return HTTP 410 Gone instead of a normal 404.
 *
 * Important:
 * Keep service, business and blog URLs here only when they are
 * permanently removed and no suitable replacement page exists.
 * When a replacement page exists, use a permanent redirect instead.
 */
const GONE_URLS = new Set([
  "/adritod.txt",
  "/index.rdf",
  "/blog/google-",
  "/index.php/stmap_38z28kw.htm",

  /*
   * Do not enable this unless Cloudflare Email Address Obfuscation
   * is disabled or definitely not generating this path.
   */
  // "/cdn-cgi/l/email-protection",

  "/joomla-development-mumbai-india",
  "/digital-marketing-",

  /*
   * Keep these as 410 only when there is no current replacement page.
   * Otherwise move them into redirects() inside next.config.mjs.
   */
  "/services",
  "/mobile-application-development-companies-mumbai-india",
  "/request-a-quote",
  "/request-a-quote.php",

  "/index./stmap_74ntzyy",
  "/facebook-ads-management-servicesbest+web+designing+company",

  /*
   * Corrected URL:
   * The reported path contains "2019.-", not "2019:-".
   */
  "/blogs/ppc-trends-of-2019.-what-all-you-should-be-focusing-on",

  "/index.php/stmap_74ntzyy.html",
  "/blogs/what's-wrong-with-using-design-templates",
  "/blogs/digital-marketing-strategies-to-grow-your-online-business-get-a-quote",
  "/blogs/off-page-seo:-building-your-website's-authority-and-reputation",
  "/digital-marketing-executive-job-delhi-mumbai",
  "/blogs/3-mistakes-that-every-uiux-designer-makes",
  "/index.php/stmap_74ntzyy",
  "/blog/career.php",

  /*
   * Additional removed URLs listed in your analysis column.
   */
  "/digital-marketing-serv",
  "/blogs/what's-the-big-deal-about-mobile-first",
  "/website-designing-service",
  "/pay-per-click-ppc-",
  "/blogs/what-is-search-engine-optimization-(seo)",
  "/blogs/ways-to-make-your-website's-landing-page-a-conversion-machine",
  "/zen-cart-development-companies-mumbai-india/contact-us.php",
  "/clients.php",
  "/paid-inclusion-services-mumbai-india",
  "/search-engine-marketing-companies-mumbai-india",
]);

function getNormalizedPathname(pathname) {
  let normalizedPath = pathname;

  /*
   * Convert encoded URL characters:
   * %27 => '
   * %28 => (
   * %29 => )
   */
  try {
    normalizedPath = decodeURIComponent(pathname);
  } catch {
    normalizedPath = pathname;
  }

  /*
   * Treat /services and /services/ as the same URL.
   */
  if (normalizedPath.length > 1 && normalizedPath.endsWith("/")) {
    normalizedPath = normalizedPath.slice(0, -1);
  }

  return normalizedPath;
}

function getGoneResponse() {
  return new NextResponse(
    `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="robots" content="noindex, nofollow">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>410 - Page Gone</title>
</head>
<body>
  <main>
    <h1>410 - Page Gone</h1>
    <p>This page has been permanently removed.</p>
  </main>
</body>
</html>`,
    {
      status: 410,
      headers: {
        "Content-Type": "text/html; charset=utf-8",
        "Cache-Control": "public, max-age=0, s-maxage=86400",
        "X-Robots-Tag": "noindex, nofollow",
      },
    },
  );
}

export function middleware(request) {
  const url = request.nextUrl.clone();

  // Remove tracking parameters
  const trackingParams = [
    "ref",
    "trk",
    "utm_source",
    "utm_medium",
    "utm_campaign",
    "utm_term",
    "utm_content",
    "utm_id",
    "gclid",
    "fbclid",
    "msclkid",
  ];

  const hasTrackingParams = trackingParams.some((param) =>
    url.searchParams.has(param),
  );

  if (hasTrackingParams) {
    trackingParams.forEach((param) => url.searchParams.delete(param));

    return NextResponse.redirect(url, 308);
  }

  // Redirect homepage URLs with random query strings
  // Example: /?cylibmvbz24295%2F=
  if (url.pathname === "/" && url.search) {
    return NextResponse.redirect(new URL("/", request.url), 308);
  }

  // Redirect malformed index URLs to homepage
  if (url.pathname === "/index" || url.pathname === "/ndex") {
    return NextResponse.redirect(new URL("/", request.url), 308);
  }

  const pathname = getNormalizedPathname(request.nextUrl.pathname);

  if (GONE_URLS.has(pathname)) {
    return getGoneResponse();
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Run middleware for normal public requests, while skipping Next.js
     * internal assets and existing static system files.
     *
     * Do not exclude every URL containing a dot because paths such as
     * /index.rdf, /clients.php and /request-a-quote.php must be handled.
     */
    "/((?!api|_next/static|_next/image|favicon.ico|manifest.json|robots.txt|sitemap.xml).*)",
  ],
};
