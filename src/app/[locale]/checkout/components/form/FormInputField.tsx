import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useTranslations } from "next-intl";
import { InputHTMLAttributes } from "react";
import { useFormContext } from "react-hook-form";

interface FormInputFieldProps {
  label: string;
  name: string;
  autoComplete?: InputHTMLAttributes<HTMLInputElement>["autoComplete"];
  styles?: string;
  type?: React.HTMLInputTypeAttribute;
  inputProps?: Omit<InputHTMLAttributes<HTMLInputElement>, "type">;
}

const FormInputField = ({
  label,
  autoComplete,
  name,
  styles,
  inputProps,
  type = "text",
}: FormInputFieldProps) => {
  const { control } = useFormContext();

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className={styles}>
          <FormLabel className="text-neutral-600">{label}</FormLabel>
          <FormControl>
            <Input
              type={type}
              {...inputProps}
              autoComplete={autoComplete}
              {...field}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default FormInputField;
