const InputBox = ({
  label,
  currency,
  amount,
  setAmount,
  setCurrency,
  currencyOptions,
  disabled = true,
}) => {
  return (
    <div className="m-2 bg-gray-200 text-xl rounded-2xl">
      <div className="flex justify-between text-gray-700 px-4 py-2 font-medium">
        {label}
        <span>Currency</span>
      </div>
      <div className="flex justify-between px-3 py-2">
        <input
          className="outline-none border px-2 rounded-md text-gray-700 border-gray-500 font-medium"
          type="number"
          disabled={disabled}
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <select
          onChange={(e) => setCurrency(e.target.value)}
          value={currency}
          className="outline-none rounded-md text-gray-900 bg-gray-300 p-2 cursor-pointer"
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default InputBox;
