"use client";

// React
import { useState } from "react";

// Next.js & Next-Intl
import { useRouter } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import Image from "next/image";

// React Hook Form & Zod
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";

// Components
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import OrContinueWith from "./OrContinueWith";

// Custom Hooks
import { useAuth } from "@/hooks/useAuth";

// Assets & Lucide Icons
import { Loader2 } from "lucide-react";
import { authImage, authImage2 } from "@/assets";
//
import { useAuthSchema } from "@/lib/validations/authSchema";

type AuthFormProps = {
  type: "sign-in" | "sign-up";
};

const AuthForm = ({ type = "sign-in" }: AuthFormProps) => {
  const t = useTranslations("Auth");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const { signIn, signUp } = useAuth();

  const signInSchema = useAuthSchema("signIn");
  const signUpSchema = useAuthSchema("signUp");

  // Tipos derivados
  type SignInData = z.infer<typeof signInSchema>;
  type SignUpData = z.infer<typeof signUpSchema>;

  // Escolher schema e valores default
  const schema = type === "sign-in" ? signInSchema : signUpSchema;
  const defaultValues =
    type === "sign-in"
      ? { email: "", password: "" }
      : { username: "", email: "", password: "" };

  const authForm = useForm<SignInData | SignUpData>({
    resolver: zodResolver(schema),
    defaultValues,
    mode: "onSubmit",
  });

  const onSubmit = async (values: SignInData | SignUpData) => {
    setLoading(true);

    setTimeout(() => {
      try {
        if (type === "sign-in") {
          signIn(values.email, values.password);
        } else {
          if ("username" in values) {
            signUp(values.email, values.password, values.username);
          }
        }
        authForm.reset();
        router.push("/");
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (err: any) {
        authForm.setError("email", { message: err.message });
      } finally {
        setLoading(false);
      }
    }, 1000);
  };

  // Traduções
  const namespace = type === "sign-in" ? "SignIn" : "SignUp";
  const switchLinkHref = type === "sign-in" ? "/auth/sign-up" : "/auth/sign-in";
  const switchTextKey = type === "sign-in" ? "noAccount" : "alreadyAccount";
  const switchActionKey = type === "sign-in" ? "signUp" : "signIn";
  const submitButtonKey = type === "sign-in" ? "signIn" : "signUpButton";

  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 container-section min-h-[calc(100vh-160px)] place-content-center items-center gap-4">
      <div className="flex flex-col gap-4 items-start max-w-sm mx-auto w-full">
        <Form {...authForm}>
          <form
            onSubmit={authForm.handleSubmit(onSubmit)}
            className="flex flex-col gap-4 items-start w-full"
          >
            <div className="space-y-6 mb-4">
              <h2 className="font-bold text-3xl">{t(`${namespace}.title`)}</h2>
              <p className="text-muted-foreground flex gap-2 items-center text-sm">
                {t(`${namespace}.${switchTextKey}`)}
                <a
                  href={switchLinkHref}
                  className="text-indigo-600 font-semibold"
                >
                  {t(`${namespace}.${switchActionKey}`)}
                </a>
              </p>
            </div>

            {/* Username apenas no Sign Up */}
            {type === "sign-up" && (
              <FormField
                control={authForm.control}
                name="username"
                render={({ field }) => (
                  <FormItem className="w-full space-y-2">
                    <FormLabel>{t(`${namespace}.username`)}</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}

            {/* Email */}
            <FormField
              control={authForm.control}
              name="email"
              render={({ field }) => (
                <FormItem className="w-full space-y-2">
                  <FormLabel>{t(`${namespace}.email`)}</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Senha */}
            <FormField
              control={authForm.control}
              name="password"
              render={({ field }) => (
                <FormItem className="w-full space-y-2">
                  <FormLabel>{t(`${namespace}.password`)}</FormLabel>
                  <FormControl>
                    <Input type="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Remember Me apenas no Sign In */}
            {type === "sign-in" && (
              <div className="flex justify-between items-center text-sm w-full">
                <div className="flex gap-2 items-center">
                  <Checkbox id="rememberMe" />
                  <label htmlFor="rememberMe">
                    {t(`${namespace}.rememberMe`)}
                  </label>
                </div>
                <Button
                  variant={"link"}
                  className="text-indigo-600 font-semibold hover:text-indigo-600/90"
                >
                  {t(`${namespace}.forgotPassword`)}
                </Button>
              </div>
            )}

            {/* Botão de Submit */}
            <Button
              className="bg-indigo-600 hover:bg-indigo-600/90 hover:text-white w-full"
              type="submit"
              disabled={loading}
            >
              {loading ? (
                <Loader2 className="size-4 animate-spin" />
              ) : (
                t(`${namespace}.${submitButtonKey}`)
              )}
            </Button>

            <OrContinueWith />
          </form>
        </Form>
      </div>

      {/* Imagem lateral */}
      <div className="relative hidden lg:block aspect-auto min-h-[calc(100vh-160px)] rounded overflow-hidden">
        <Image
          src={type === "sign-up" ? authImage : authImage2}
          alt=""
          fill
          sizes="50vw"
          placeholder="blur"
          priority
          className="object-cover"
        />
      </div>
    </section>
  );
};

export default AuthForm;
