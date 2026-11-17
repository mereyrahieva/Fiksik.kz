
import React, {
  createContext, useContext, useState, ReactNode
} from "react";

export type Transaction = {
  id: string;
  type: string;
  title: string;
  amount: number;
  date: string;
  status: string;
};

export type TransferData = {
  recipient: string;
  card: string;
  amount: number;
  message: string;
};

type BankContextType = {
  name: string;
  phone: string;
  email: string;
  balance: number;
  currency: string;
  transfer: TransferData;
  transactions: Transaction[];
  isRegistered: boolean;
  updateProfile: (data: Partial<{
    name: string;
    phone: string;
    email: string;
  }>) => void;
  register: (name: string, phone: string, email: string) => void;
  setTransfer: (data: TransferData) => void;
  completeTransfer: () => boolean;
  addMoney: (amount: number) => void;
  setCurrency: (currency: string) => void;
};

const defaultTransfer: TransferData = {
  recipient: "",
  card: "",
  amount: 0,
  message: ""
};

const BankContext = createContext<BankContextType | null>(null);

export function BankProvider({
  children
}: {
  children: ReactNode;
}) {
  const [name, setName] = useState("Қолданушы");
  const [phone, setPhone] = useState("+7 700 000 00 00");
  const [email, setEmail] = useState("");
  const [balance, setBalance] = useState(250000);
  const [currency, setCurrency] = useState("KZT");
  const [isRegistered, setIsRegistered] = useState(false);
  const [transfer, updateTransfer] = useState<TransferData>(
    defaultTransfer
  );

  const [transactions, setTransactions] = useState<Transaction[]>([
    {
      id: "demo-1",
      type: "income",
      title: "Демо кіріс",
      amount: 150000,
      date: "15 қараша",
      status: "Орындалды"
    },
    {
      id: "demo-2",
      type: "expense",
      title: "Демо сатып алу",
      amount: -12500,
      date: "14 қараша",
      status: "Орындалды"
    },
    {
      id: "demo-3",
      type: "expense",
      title: "Демо аударым",
      amount: -8000,
      date: "12 қараша",
      status: "Орындалды"
    }
  ]);

  function register(
    userName: string,
    userPhone: string,
    userEmail: string
  ) {
    setName(userName);
    setPhone(userPhone);
    setEmail(userEmail);
    setIsRegistered(true);
  }

  function updateProfile(data: Partial<{
    name: string;
    phone: string;
    email: string;
  }>) {
    if (data.name !== undefined) setName(data.name);
    if (data.phone !== undefined) setPhone(data.phone);
    if (data.email !== undefined) setEmail(data.email);
  }

  function setTransfer(data: TransferData) {
    updateTransfer(data);
  }

  function completeTransfer(): boolean {
    if (
      !Number.isFinite(transfer.amount) ||
      transfer.amount <= 0 ||
      transfer.amount > balance
    ) {
      return false;
    }

    const amount = transfer.amount;

    setBalance(previous => previous - amount);

    setTransactions(previous => [
      {
        id: Date.now().toString(),
        type: "expense",
        title: transfer.message || transfer.recipient || "Аударым",
        amount: -amount,
        date: new Date().toLocaleDateString("kk-KZ"),
        status: "Демо орындалды"
      },
      ...previous
    ]);

    // Бір операцияны қайта орындамау үшін соманы тазартамыз.
    updateTransfer(previous => ({
      ...previous,
      amount: 0
    }));

    return true;
  }

  function addMoney(amount: number) {
    if (!Number.isFinite(amount) || amount <= 0) return;

    setBalance(previous => previous + amount);
    setTransactions(previous => [
      {
        id: Date.now().toString(),
        type: "income",
        title: "Демо толықтыру",
        amount,
        date: new Date().toLocaleDateString("kk-KZ"),
        status: "Демо орындалды"
      },
      ...previous
    ]);
  }

  return (
    <BankContext.Provider
      value={{
        name,
        phone,
        email,
        balance,
        currency,
        transfer,
        transactions,
        isRegistered,
        updateProfile,
        register,
        setTransfer,
        completeTransfer,
        addMoney,
        setCurrency
      }}
    >
      {children}
    </BankContext.Provider>
  );
}

export function useBank() {
  const context = useContext(BankContext);

  if (!context) {
    throw new Error(
      "useBank міндетті түрде BankProvider ішінде қолданылуы керек"
    );
  }

  return context;
}
