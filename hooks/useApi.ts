import { useEffect, useState } from "react";

export function useApi<TResult, TRaw = TResult>(
    endpoint: string,
    transform?: (data: TRaw[]) => TResult[]
  )  {
    const [data, setData] = useState<TResult[]>([]);
    
    useEffect(() => {
      async function fetchData() {
        try {
          const response = await fetch(endpoint);
          const json = await response.json();
          setData(transform ? transform(json) : json);
        } catch (error) {
          console.error(`Error fetching ${endpoint}:`, error);
        }
      }
      fetchData();
    }, [endpoint, transform]);
  
    return data;
  }