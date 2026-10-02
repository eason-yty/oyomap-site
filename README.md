# Oyomap Website

Public website for Oyomap, hosted as a static GitHub Pages site at
[`www.oyomap.com`](https://www.oyomap.com/).

The repository may contain product and marketing pages in addition to the
required public privacy, support, and terms pages. Everything committed here,
including Git history, is public.

## Current routes

| Route | Purpose |
|---|---|
| `/` | Public landing page; may evolve into the main Oyomap product introduction |
| `/privacy/` | Privacy Policy URL for the app and App Store Connect |
| `/privacy/zh-Hans/` | Simplified Chinese Privacy Policy |
| `/privacy/zh-Hant/` | Traditional Chinese Privacy Policy |
| `/support/` | Support URL for the app and App Store Connect |
| `/terms/` | Apple Standard EULA link plus Oyomap supplemental terms |

## Repository structure

```text
oyomap-site/
├── .nojekyll          # Serve checked-in files directly; disable Jekyll processing
├── 404.html           # Public not-found page
├── CNAME              # GitHub Pages custom domain: www.oyomap.com
├── index.html         # Site landing page
├── assets/
│   └── styles.css     # Shared site styles
├── privacy/
│   ├── index.html     # /privacy/ (English)
│   ├── zh-Hans/
│   │   └── index.html # /privacy/zh-Hans/
│   └── zh-Hant/
│       └── index.html # /privacy/zh-Hant/
├── support/
│   └── index.html     # /support/
├── terms/
│   └── index.html     # /terms/
├── robots.txt
├── sitemap.xml
└── README.md
```

Future public sections should use directory routes such as
`features/index.html`, which publishes as `/features/`. Reuse shared assets,
link the page from the appropriate navigation, and add public routes to
`sitemap.xml`.

## Deployment

GitHub Pages deploys the repository root from the `main` branch. There is no
build step. A push to `main` republishes the site automatically.

| Setting | Value |
|---|---|
| Production URL | `https://www.oyomap.com/` |
| Fallback Pages URL | `https://eason-yty.github.io/oyomap-site/` |
| Publishing source | `main` branch, repository root |
| Custom domain | `www.oyomap.com` |
| HTTPS | Enforced in GitHub Pages |

The `CNAME` file and Cloudflare DNS records target `www.oyomap.com`. The apex
domain uses GitHub Pages' documented A records, and `www` is a DNS-only CNAME to
`eason-yty.github.io`. Do not change or delete Cloudflare Email Routing MX, SPF,
or DKIM records while changing the website.

## Adding or changing a page

1. Add or edit plain HTML under the intended route directory.
2. Reuse `assets/styles.css` unless the design requires a documented extension.
3. Update navigation, `sitemap.xml`, and this route table when applicable.
4. Test locally and verify responsive layout, accessibility, and external links.
5. Push to `main`, wait for Pages to report `built`, then test both the page URL
   and HTTPS on the custom domain.

## Public-content and security rules

- Never commit API keys, Firebase configuration, credentials, user data,
  internal launch documents, unpublished business information, or secrets.
- Use only images, fonts, copy, and other media Oyomap is licensed to publish.
- Do not add user uploads, authentication, private APIs, or customer databases
  to GitHub Pages; use a separately reviewed service if those become necessary.
- The current site has no JavaScript, forms, cookies, or site analytics. Adding
  analytics, forms, newsletters, or third-party embeds requires a privacy,
  consent, retention, and security review before deployment.
- Keep `CNAME` and the GitHub domain-verification DNS TXT record in place while
  this site owns `www.oyomap.com`.

## Launch checklist

| Owner | Action | Done when |
|---|---|---|
| Founder | Review the policy and terms; obtain legal review if desired | Public wording is approved |
| Founder | Configure and test `support@oyomap.com` and `privacy@oyomap.com` forwarding | Both addresses receive and can answer test mail |
| Firebase | Set and verify Analytics event-data retention at no more than 14 months | GA property setting matches the policy |
| Founder | Choose a support/feedback retention routine | Old Asana/email requests are deleted or anonymized when no longer needed |
| DNS | Keep `oyomap.com` verified in GitHub and `www` pointed to `eason-yty.github.io` | GitHub domain check succeeds |
| Repository | Keep `CNAME` set to `www.oyomap.com` and HTTPS enforced | The production URL loads without warnings |
| App | Point in-app Privacy and Terms links to the final HTTPS routes | Release archive opens both links |
| App Store Connect | Enter the final Privacy Policy and Support URLs; answer App Privacy consistently | Metadata matches the shipped app and policy |

## Content maintenance

Update the policy effective date and wording whenever data collection,
providers, account/cloud behavior, advertising, or subscription behavior
materially changes. Before every release, reconcile the app,
`PrivacyInfo.xcprivacy`, Firebase settings, App Store Connect answers, and these
public pages.

Maintain the English, Simplified Chinese, and Traditional Chinese privacy
policies together: the same provisions, service providers, and effective date
must appear in all three. Each page includes visible language links, its own
canonical URL, and the same `hreflang` alternate links. Keep `/privacy/` as the
stable English entry point for existing app and App Store links; the language
selector uses ordinary links without JavaScript, cookies, or redirects. Support
and Terms currently remain English.

The policies distinguish optional Firebase usage analytics (off by default,
enabled only by explicit consent, withdrawable in Oyomap Settings) from separate
crash reporting. Turning off usage analytics stops future optional collection
and resets local analytics data; it does not automatically delete previously
sent data. Keep these descriptions aligned with the shipping app.
