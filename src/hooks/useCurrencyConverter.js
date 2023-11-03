import { useEffect, useState } from "react";

const useCurrencyConverter = (currency) => {
  const [data, setData] = useState({});
  useEffect(() => {
    fetchData();
  }, [currency]);

  const fetchData = async () => {
    const data = await fetch(
      `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
    );
    const json = await data.json();
    setData(json[currency]);
  };

  return data;
};

export default useCurrencyConverter;
