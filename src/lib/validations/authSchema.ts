import { useTranslations } from "next-intl";
import z from "zod";

// Schemas

export function useAuthSchema(type: "signIn" | "signUp") {
  const t = useTranslations("Auth");

  const signInSchema = z.object({
    email: z.string({ message: t("Validation.emailInvalid") }),
    password: z.string().min(6, { message: t("Validation.minLengthPassword") }),
  });

  const signUpSchema = z.object({
    username: z
      .string()
      .min(3, { message: t("Validation.usernameMinLength") })
      .max(20, { message: t("Validation.usernameMaxLength") }),
    email: z.email({ message: t("Validation.emailInvalid") }),
    password: z.string().min(6, { message: t("Validation.minLengthPassword") }),
  });

  return type === "signIn" ? signInSchema : signUpSchema;
}
