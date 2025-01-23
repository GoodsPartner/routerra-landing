import type { Metadata } from "next";
import "./globals.css";

import { Inter } from 'next/font/google';
import Script from 'next/script'

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://www.routerra.io'),
  title: "Routerra",
  description: "Boost efficiency and reduce costs with Routerra, the leading route optimization software. Plan optimal routes for your fleet in seconds. Try it today!",
  authors: [{ name: "Routerra" }],
  keywords: ["route optimization", "route planning software", "fleet management", "delivery optimization", "amazon flex", "ups", "dhl", "fedex", "us postal", "logistics software", "route planning", "route optimization software", "fleet management software", "delivery optimization software", "logistics software", "route planning software", "route optimization software", "fleet management software", "delivery optimization software", "logistics software"],
  openGraph: {
    title: "Optimize Your Routes with Routerra",
    description: "Boost efficiency and reduce costs with our leading route optimization software.",
    url: "https://www.routerra.io",
    siteName: "Routerra",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Optimize Your Routes with Routerra",
    description: "Boost efficiency and reduce costs with our leading route optimization software.",
    images: ["/og.png"],
  },
  icons: {
    icon: "/routerra-sign.svg",
  },
  alternates: {
    canonical: "https://www.routerra.io",
  },
  viewport: "width=device-width, initial-scale=1.0",
  other: {
    "application-ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "Routerra",
      "url": "https://www.routerra.io",
      "image": "https://www.routerra.io/logo-desktop.svg",
      "description": "Optimize routes and improve efficiency with our route optimization software.",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "All"
    })
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script 
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
      !function(t,e){var o,n,p,r;e.__SV||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.crossOrigin="anonymous",p.async=!0,p.src=s.api_host.replace(".i.posthog.com","-assets.i.posthog.com")+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"},o="init capture register register_once register_for_session unregister unregister_for_session getFeatureFlag getFeatureFlagPayload isFeatureEnabled reloadFeatureFlags updateEarlyAccessFeatureEnrollment getEarlyAccessFeatures on onFeatureFlags onSessionId getSurveys getActiveMatchingSurveys renderSurvey canRenderSurvey getNextSurveyStep identify setPersonProperties group resetGroups setPersonPropertiesForFlags resetPersonPropertiesForFlags setGroupPropertiesForFlags resetGroupPropertiesForFlags reset get_distinct_id getGroups get_session_id get_session_replay_url alias set_config startSessionRecording stopSessionRecording sessionRecordingStarted captureException loadToolbar get_property getSessionProperty createPersonProfile opt_in_capturing opt_out_capturing has_opted_in_capturing has_opted_out_capturing clear_opt_in_out_capturing debug".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);
      posthog.init('phc_cSFdqGXRHqgWbEfpKMeQQddcsQglc69Y6NjRt3cRRhv', {api_host: 'https://us.i.posthog.com', person_profiles: 'identified_only'})
            `
          }}
        />
      </head>
      <body
        className={`${inter.className}  antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
