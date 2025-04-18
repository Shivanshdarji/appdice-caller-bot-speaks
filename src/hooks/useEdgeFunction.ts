
import { useState } from "react";
import { EDGE_FUNCTION_URL } from "@/config/edgeFunction";

interface EdgeFunctionOptions {
  payload?: Record<string, any>;
}

export const useEdgeFunction = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const invoke = async ({ payload }: EdgeFunctionOptions) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(EDGE_FUNCTION_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
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
