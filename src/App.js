import { useState } from "react";
import InputBox from "./components/InputBox";
import useCurrencyConverter from "./hooks/useCurrencyConverter";

const App = () => {
  const [currency, setCurrency] = useState("inr");
  const [convertedCurrency, setConvertedCurrency] = useState("usd");
  const [amount, setAmount] = useState(100);
  const [convertedAmount, setConvertedAmount] = useState(0);

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
          onClick={() => setConvertedAmount((amount * data[convertedCurrency]).toFixed(3))}
        >
          Convert {currency.toUpperCase()} to {convertedCurrency.toUpperCase()}
        </button>
      </div>
    </main>
  );
};

export default App;
