
import React, {
  createContext, useContext, useState
} from "react";

type Transfer = {
  recipient: string;
  card: string;
  amount: number;
  message: string;
};

type BankState = {
  name: string;
  phone: string;
  registered: boolean;
  balance: number;
  currency: string;
  exchangeAmount: number;
  transfer: Transfer;
  setName: (v: string) => void;
  setPhone: (v: string) => void;
  setRegistered: (v: boolean) => void;
  setBalance: (v: number) => void;
  setCurrency: (v: string) => void;
  setExchangeAmount: (v: number) => void;
  setTransfer: (v: Transfer) => void;
  completeTransfer: () => boolean;
};

const BankContext = createContext<BankState | null>(null);

export function BankProvider({ children }: {
  children: React.ReactNode;
}) {
  const [name, setName] = useState("Пайдаланушы");
  const [phone, setPhone] = useState("");
  const [registered, setRegistered] = useState(false);
  const [balance, setBalance] = useState(1250000);
  const [currency, setCurrency] = useState("USD");
  const [exchangeAmount, setExchangeAmount] = useState(100);
  const [transfer, setTransfer] = useState<Transfer>({
    recipient: "",
    card: "",
    amount: 0,
    message: ""
  });

  const completeTransfer = () => {
    if (transfer.amount <= 0 || transfer.amount > balance) {
      return false;
    }
    setBalance(old => old - transfer.amount);
    return true;
  };

  return (
    <BankContext.Provider value={{
      name, phone, registered, balance,
      currency, exchangeAmount, transfer,
      setName, setPhone, setRegistered,
      setBalance, setCurrency, setExchangeAmount,
      setTransfer, completeTransfer
    }}>
      {children}
    </BankContext.Provider>
  );
}

export function useBank() {
  const state = useContext(BankContext);
  if (!state) {
    throw new Error("Қосымша BankProvider ішінде болуы керек.");
  }
  return state;
}
