import Script from "next/script";

const cloudflareBeacon = JSON.stringify({
  token: "bf5706cb766c47ab8596d3a99c737048",
});

export default function CloudflareAnalytics() {
  return (
    <Script
      id="cloudflare-web-analytics"
      type="module"
      strategy="afterInteractive"
      src="https://static.cloudflareinsights.com/beacon.min.js"
      data-cf-beacon={cloudflareBeacon}
    />
  );
}
