import { useEffect, useState } from "react";

interface OptionProps {
    method?: string,
    headers?: object,
    body?: string
}

export const useGetFetch = (url: string, opts: OptionProps) => {
    const [data, setData] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');


    const fetchData = async () => {
        setLoading(true);
        setError('');
        const opt = {
            method: "GET",
            ...opts
        }
        try {
            const res = await fetch(
                import.meta.env.VITE_URL_BACK + url, 
                opt as RequestInit
            );
            const result = await res.json();
            // console.log(result)
            if (res.status > 399) {
                throw result;
            }
            
            setData(result.url);
        } catch (error) {
            setError((error as Error).message);
        } finally {
            setLoading(false);
        }
    }
    useEffect(() => {
        setLoading(false);
        fetchData();
    }, [url]);

  return {data, loading, error};
}