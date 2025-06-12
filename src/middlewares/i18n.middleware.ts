import { routing } from "@/i18n/routing";
import createMiddleware from "next-intl/middleware";

const handleI18nRouting = createMiddleware(routing);
export default handleI18nRouting;
