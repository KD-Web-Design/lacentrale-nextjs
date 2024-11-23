import { useEffect, useState } from "react";

export function useApi<TResult, TRaw = TResult>(
    endpoint: string,
    transform?: (data: TRaw[]) => TResult[],
    params?: Record<string, string>
  )  {
    const [data, setData] = useState<TResult[]>([]);
    
    useEffect(() => {
      async function fetchData() {
        try {
          const queryString = params ? `?${new URLSearchParams(params)}` : '';
          const response = await fetch(`${endpoint}${queryString}`);
          const json = await response.json();
          setData(transform ? transform(json) : json);
        } catch (error) {
          console.error(`Error fetching ${endpoint}:`, error);
        }
      }
      fetchData();
    }, [endpoint, transform, params]);
  
    return data;
  }