"use client";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export function RegisterForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const t = useTranslations("RegisterPage");
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle>{t("title")}</CardTitle>
          <CardDescription>{t("description")}</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
              <div className="grid gap-3">
                <Label htmlFor="email">{t("form.email")}</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>
              <div className="grid gap-3">
                <div className="flex items-center">
                  <Label htmlFor="password">{t("form.password")}</Label>
                </div>
                <Input id="password" type="password" required />
              </div>
              <div className="flex flex-col gap-3">
                <Button type="submit" className="w-full">
                  {t("form.action.submit")}
                </Button>
                <Button variant="outline" className="w-full">
                  {t("form.action.google")}
                </Button>
              </div>
            </div>
            <div className="mt-4 text-center text-sm">
              {t.rich("extras.login", {
                link: (chunks) => (
                  <Link
                    href="/auth/login"
                    className="underline underline-offset-4"
                  >
                    {chunks}
                  </Link>
                ),
              })}
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
