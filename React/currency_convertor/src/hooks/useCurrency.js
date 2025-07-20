import { useEffect, useState } from "react";

const useCurrency = (currency) => {
  const [data, setData] = useState({});

  useEffect(() => {
    if (!currency) return;

    const fetchData = async () => {
      try {
        const res = await fetch(
          `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
        );
        const json = await res.json();
        setData(json[currency]); // Only use nested data
      } catch (error) {
        console.error("Failed to fetch currency data:", error);
        setData({});
      }
    };

    fetchData();
  }, [currency]);

  return data;
};

export default useCurrency;
