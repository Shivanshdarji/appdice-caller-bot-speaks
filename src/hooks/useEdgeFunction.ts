
import { supabase } from "@/integrations/supabase/client";
import { useState } from "react";

interface EdgeFunctionOptions {
  functionName: string;
  payload?: Record<string, any>;
}

export const useEdgeFunction = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const invoke = async ({ functionName, payload }: EdgeFunctionOptions) => {
    setIsLoading(true);
    setError(null);

    try {
      const { data, error: functionError } = await supabase.functions.invoke(functionName, {
        body: payload
      });

      if (functionError) {
        throw new Error(functionError.message);
      }

      return { data, error: null };
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An error occurred';
      setError(errorMessage);
      return { data: null, error: errorMessage };
    } finally {
      setIsLoading(false);
    }
  };

  return {
    invoke,
    isLoading,
    error
  };
};
