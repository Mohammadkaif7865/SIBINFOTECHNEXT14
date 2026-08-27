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
  "/blog/[slug]",
  "/blog/google-maps-ai-2026-conversational-search",
  "/blog/seo-vs-aeo-vs-geo-difference-which-one-your-business-needs",
  "/blog/ads-in-ai-overviews",
  "/index.php/stmap_38z28kw.htm",
  "/index.php/stmap_38z28kw.html",

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

  /*
   * Canonical origin: force https://www.sibinfotech.com in a SINGLE hop.
   *
   * Why: http://www.sibinfotech.com/* previously returned 200 with no redirect,
   * so every page existed at both http:// and https://. That is site-wide
   * duplicate content and is what produced the "Alternate page with proper
   * canonical" and "Redirect error" reports in Search Console.
   *
   * Loop safety - important, this site sits behind Cloudflare:
   * If Cloudflare's SSL mode is "Flexible", Cloudflare terminates TLS at the
   * edge and talks to the origin over plain HTTP, setting
   * x-forwarded-proto: http even when the visitor arrived on https. Trusting
   * that header alone would redirect a visitor who is ALREADY on https,
   * Cloudflare would fetch the origin over http again, and the site would
   * loop until the browser gives up.
   *
   * Cloudflare's CF-Visitor header reports the scheme the *visitor* used, so
   * it is the only trustworthy signal here. We check it first and fall back
   * to x-forwarded-proto only when Cloudflare is not in front. If neither
   * header is present we do nothing, so an unknown proxy cannot trap us.
   *
   * Localhost is always skipped so local dev over http keeps working.
   */
  const CANONICAL_HOST = "www.sibinfotech.com";

  // Cloudflare: {"scheme":"https"} - reflects the visitor's real scheme.
  let visitorScheme = "";
  const cfVisitor = request.headers.get("cf-visitor");
  if (cfVisitor) {
    const m = /"scheme"\s*:\s*"(https?)"/i.exec(cfVisitor);
    if (m) visitorScheme = m[1].toLowerCase();
  }
  const forwardedProto =
    visitorScheme ||
    (request.headers.get("x-forwarded-proto") || "")
      .split(",")[0]
      .trim()
      .toLowerCase();
  const rawHost = (request.headers.get("host") || "").toLowerCase();
  const host = rawHost.split(":")[0];
  const isLocal =
    host === "localhost" ||
    host === "127.0.0.1" ||
    host === "0.0.0.0" ||
    host.endsWith(".local");

  if (!isLocal && host) {
    const needsHttps = forwardedProto === "http";
    const needsHost = host !== CANONICAL_HOST && host.endsWith("sibinfotech.com");

    if (needsHttps || needsHost) {
      const target = new URL(
        `${request.nextUrl.pathname}${request.nextUrl.search}`,
        `https://${CANONICAL_HOST}`,
      );
      return NextResponse.redirect(target, 301);
    }
  }

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
    "atnct",
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

  // Redirect trailing slashes to non-trailing slashes for consistency
  // This prevents duplicate content (e.g., /testimonials/ vs /testimonials)
  if (
    request.nextUrl.pathname.length > 1 &&
    request.nextUrl.pathname.endsWith("/")
  ) {
    const redirectUrl = url.clone();
    redirectUrl.pathname = pathname;
    return NextResponse.redirect(redirectUrl, 308);
  }

  if (
    GONE_URLS.has(pathname) ||
    pathname.startsWith("/index.php/stmap_") ||
    pathname.startsWith("/index/stmap_")
  ) {
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
