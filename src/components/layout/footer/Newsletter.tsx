import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useTranslations } from "next-intl";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import z from "zod";

const Newsletter = () => {
  const t = useTranslations("Layout.Footer.newsletter");
  const [isLoading, setIsLoading] = useState(false);

  const newsletterSchema = z.object({
    email: z.email({ error: t("errors.invalid") }),
  });

  const newsletterForm = useForm<z.infer<typeof newsletterSchema>>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: {
      email: "",
    },
    mode: "onSubmit",
  });

  const onSubmit = (values: z.infer<typeof newsletterSchema>) => {
    setIsLoading(true);
    setTimeout(() => {
      toast.message(t("toastSuccessTitle"), {
        description: t("toastSuccessDescription", { email: values.email }),
      });
      newsletterForm.reset();
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="bg-neutral-100 rounded">
      <div className="max-w-sm mx-auto px-4 py-12">
        <Form {...newsletterForm}>
          <form onSubmit={newsletterForm.handleSubmit(onSubmit)}>
            <FormField
              control={newsletterForm.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-lg font-semibold text-black">
                    {t("title")}
                  </FormLabel>
                  <FormDescription className="text-muted-foreground">
                    {t("description")}
                  </FormDescription>
                  <FormControl>
                    <div className="flex flex-col sm:flex-row items-center sm:gap-4 mt-2">
                      <Input
                        placeholder={t("emailPlaceholder")}
                        className="bg-white rounded"
                        {...field}
                      />

                      <Button
                        type="submit"
                        disabled={isLoading}
                        className="mt-4 sm:mt-0 max-sm:w-full w-29 rounded bg-indigo-600 hover:bg-indigo/80"
                      >
                        {isLoading ? (
                          <Loader2 className="size-4 animate-spin " />
                        ) : (
                          t("submitBtn")
                        )}
                      </Button>
                    </div>
                  </FormControl>
                  <FormMessage className="text-sm  text-red-500" />
                </FormItem>
              )}
            />
          </form>
        </Form>
      </div>
    </div>
  );
};

export default Newsletter;
