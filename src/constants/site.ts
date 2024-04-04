/** サイト名 */
export const SITE_NAME = "cordelia.dev";

/** サイトURL */
export const SITE_URL =
  process.env.NODE_ENV === "production"
    ? "https://cordelia.dev"
    : "http://localhost:3000";

/** サイト説明 */
export const SITE_DESCRIPTION = "Personal website of cordelia.";
