
import React, { useState } from "react";
import {
  Page, Heading, Field, Menu,
  Info, ScreenProps
} from "./EmeraldUI";

const services = [
  { title: "Ақша аудару", icon: "↗️", page: "TransferEmpty" },
  { title: "Карталар", icon: "💳", page: "Cards" },
  { title: "Менің шоттарым", icon: "🏦", page: "Accounts" },
  { title: "Ұялы байланыс", icon: "📱", page: "MobileRechargeEmpty" },
  { title: "Интернет төлемі", icon: "🌐", page: "InternetBillEmpty" },
  { title: "Электр энергиясы", icon: "💡", page: "ElectricBillEmpty" },
  { title: "Депозиттер", icon: "💰", page: "Deposits" },
  { title: "Несие картасы", icon: "💳", page: "CreditCardOverview" },
  { title: "Валюта бағамы", icon: "💱", page: "ExchangeRate" },
  { title: "Филиалдар", icon: "📍", page: "Branch" },
  { title: "Хабарламалар", icon: "💬", page: "Messages" },
  { title: "Баптаулар", icon: "⚙️", page: "Settings" }
];

export default function Search({
  onNavigate, onBack
}: ScreenProps) {
  const [query, setQuery] = useState("");

  const results = services.filter(item =>
    item.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <Page title="Іздеу" onBack={onBack}>
      <Heading
        title="Не іздейсіз?"
        subtitle="Банк қызметтерін жылдам табыңыз."
      />

      <Field
        label="Қызмет атауы"
        placeholder="Мысалы: Ақша аудару"
        value={query}
        onChangeText={setQuery}
      />

      {results.map(item => (
        <Menu
          key={item.page}
          icon={item.icon}
          title={item.title}
          onPress={() => onNavigate(item.page)}
        />
      ))}

      {results.length === 0 && (
        <Info text="Іздеу нәтижесі табылмады. Басқа сөз енгізіп көріңіз." />
      )}
    </Page>
  );
}
