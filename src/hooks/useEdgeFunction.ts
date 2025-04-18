
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
      console.log(`Attempting to call edge function at: ${EDGE_FUNCTION_URL}`);
      
      const response = await fetch(EDGE_FUNCTION_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(payload),
        mode: 'cors',  // Explicitly set CORS mode
      });

      console.log(`Edge function response status: ${response.status}`);
      
      if (!response.ok) {
        const errorText = await response.text().catch(() => 'No error details available');
        throw new Error(`HTTP error! Status: ${response.status}, Details: ${errorText}`);
      }

      const data = await response.json();
      return { data, error: null };
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An error occurred calling the edge function';
      console.error('Edge function error:', errorMessage);
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
