import { useState } from "react";

interface FieldProps {
  type: string;
}

const useField = ({ type }: FieldProps) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState<string | null>(null);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // --- SOLO LETRAS SI ES DE TYPE TEXT --- //
    if (type === "text") {
      const result = event.target.value.replace(/[^a-z]/gi, "");
      setValue(result);
      setError(null);
      return;
    }
    setValue(event.target.value);
    setError(null);
  };

  return {
    type,
    value,
    onChange,
    error,
    setError,
    reset: () => setValue(""),
  };
};

export { useField };
