import { useState } from "react";
import InputBox from "./components/InputBox";
import useCurrencyConverter from "./hooks/useCurrencyConverter";
import { CgArrowsExchangeAltV } from "react-icons/cg";

const App = () => {
  const [currency, setCurrency] = useState("inr");
  const [convertedCurrency, setConvertedCurrency] = useState("usd");
  const [amount, setAmount] = useState();
  const [convertedAmount, setConvertedAmount] = useState();

  const data = useCurrencyConverter(currency);

  return (
    <main className="flex justify-center items-center bg-gray-400 h-screen w-screen">
      <div className="max-w-xl bg-slate-600 text-gray-900 rounded-xl w-full flex flex-col">
        <h1 className="text-center text-3xl font-medium py-2">
          Currency Converter
        </h1>
        <InputBox
          label={"From"}
          currency={currency}
          setCurrency={setCurrency}
          amount={amount}
          setAmount={setAmount}
          currencyOptions={Object.keys(data)}
          disabled={false}
        />
        <CgArrowsExchangeAltV
          onClick={() => {
            setConvertedCurrency(currency);
            setCurrency(convertedCurrency);
            setAmount(convertedAmount);
            setConvertedAmount(amount);
          }}
          className="text-5xl bg-gray-400 text-gray-950 rounded-full cursor-pointer self-center z-10 -my-6 hover:shadow-md hover:shadow-gray-700 border border-gray-400 hover:border-gray-500"
        />

        <InputBox
          label={"To"}
          currency={convertedCurrency}
          setCurrency={setConvertedCurrency}
          amount={convertedAmount}
          setAmount={setConvertedAmount}
          currencyOptions={Object.keys(data)}
        />
        <button
          className=" bg-gray-400 text-center h-10 m-2 text-xl rounded-lg font-semibold"
          onClick={() =>
            setConvertedAmount((amount * data[convertedCurrency]).toFixed(3))
          }
        >
          Convert {currency.toUpperCase()} to {convertedCurrency.toUpperCase()}
        </button>
      </div>
    </main>
  );
};

export default App;
