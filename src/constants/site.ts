/** サイト名 */
export const SITE_NAME = "cordelia.dev";

/** サイトURL */
export const SITE_URL =
  process.env.NODE_ENV === "production"
    ? "https://cordelia.dev"
    : "http://localhost:3000";

/** サイト説明 */
export const SITE_DESCRIPTION = "Personal website of cordelia.";
// メタデータ
// export const siteMeta = {
//   siteTitle: 'CORDELIA',
//   siteDesc: 'cordeliaの個人サイトです。ブログや製作物を掲載します。',
//   siteUrl: 'https://cordelia.dev',
//   siteLang: 'ja',
//   siteLocale: 'ja_JP',
//   siteType: 'website',
//   siteIcon: '/myicon.png', // puglicディレクトリからのpathを書く
// }
