import { NextRequest } from "next/server";
import handleI18nRouting from "./middlewares/i18n.middleware";

export default function middleware(request: NextRequest) {
  const response = handleI18nRouting(request);

  return response;
}

export const config = {
  matcher: ["/", "/(es|en)/:path*"],
};
