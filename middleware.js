import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import { NextResponse } from "next/server";

const locales = ["en", "bn"];
const defaultLocale = "en";

const getLocale = (request) => {
  const acceptedLocale = request.headers.get("accept-language") ?? undefined;
  let headers = { "accept-language": acceptedLocale };
  let languages = new Negotiator({ headers }).languages();

  return match(languages, locales, defaultLocale);
};

export const middleware = (request) => {
  const pathName = request.nextUrl.pathname;
  const pathNameMissingLocale = locales.every(
    (locale) => !pathName.startsWith(`/${locale}/`) && pathName !== `/${locale}`
  );
  if (pathNameMissingLocale) {
    const locale = getLocale(request);
    return NextResponse.redirect(
      new URL(`/${locale}/${pathName}`, request.nextUrl)
    );
  }
};

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    "/((?!api|assets|.*\\..*|!_next).*)",
    // Optional: only run on root (/) URL
    // '/'
  ],
};
