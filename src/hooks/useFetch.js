import { useEffect, useState } from "react";

const cache = {}; // simple in-memory cache

export const useFetch = (url) => {
  const [data, setData] = useState(cache[url] || null);
  const [loading, setLoading] = useState(!cache[url]);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (cache[url]) {
      setData(cache[url]);
      setLoading(false);
      return;
    }

    const fetchData = async () => {
      try {
        const res = await fetch(url);
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        const json = await res.json();
        cache[url] = json;
        setData(json);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};
