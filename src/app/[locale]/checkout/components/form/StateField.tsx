"use client";

import { useState } from "react";
import { useFormContext } from "react-hook-form";
import { ChevronsUpDown, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Input } from "@/components/ui/input";
import { useTranslations } from "next-intl";
import { statesBR, statesCAN, statesUS } from "@/data/constants";

export const StateField = () => {
  const t = useTranslations("Pages.Checkout");
  const {
    register,
    setValue,
    watch,
    formState: { errors },
  } = useFormContext();

  const country = watch("country");
  const selected = watch("state");

  const options =
    country === "brazil" ? statesBR : country === "usa" ? statesUS : statesCAN;

  const [open, setOpen] = useState(false);

  if (!options) {
    // País sem suporte: renderiza input comum
    return (
      <div className="space-y-1">
        <Label htmlFor="state">{t("shippingInformation.state")}</Label>
        <Input
          id="state"
          {...register("state", { required: true })}
          autoComplete="address-level1"
        />
        {errors.state && (
          <p className="text-red-600 text-sm">{t("errors.state.required")}</p>
        )}
      </div>
    );
  }

  const selectedLabel = options.find((opt) => opt.label === selected)?.label;

  return (
    <div className="space-y-2">
      <Label htmlFor="state">{t("shippingInformation.state")}</Label>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            className="w-full justify-between text-muted-foreground"
          >
            {selectedLabel || t("shippingInformation.selectYourState")}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="p-0">
          <Command>
            <CommandInput placeholder={t("shippingInformation.state")} />
            <CommandList>
              <CommandEmpty>
                {t("shippingInformation.stateNoResults")}
              </CommandEmpty>
              <CommandGroup>
                {options.map((opt) => (
                  <CommandItem
                    key={opt.value}
                    value={opt.value}
                    onSelect={(val) => {
                      const selectedOption = options.find(
                        (opt) => opt.value === val
                      );
                      if (selectedOption) {
                        setValue("state", selectedOption.label, {
                          shouldValidate: true,
                          shouldDirty: true,
                        });
                      }
                      setOpen(false);
                    }}
                  >
                    {opt.label}
                    <Check
                      className={cn(
                        "ml-auto h-4 w-4",
                        selected === opt.value ? "opacity-100" : "opacity-0"
                      )}
                    />
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
      {errors.state && (
        <p className="text-red-600 text-sm">{t("errors.state.required")}</p>
      )}
    </div>
  );
};
