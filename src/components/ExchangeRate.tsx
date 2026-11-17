
import React, { useState } from "react";
import {
  Page, Heading, Menu, Card, Detail,
  Button, Info, ScreenProps
} from "./EmeraldUI";
import { useBank } from "./BankStore";

const rates = [
  { code: "USD", name: "АҚШ доллары", buy: 490, sell: 495 },
  { code: "EUR", name: "Еуро", buy: 520, sell: 528 }
];

export default function ExchangeRate({
  onNavigate, onBack
}: ScreenProps) {
  const bank = useBank();
  const [selected, setSelected] = useState("USD");
  const current = rates.find(item => item.code === selected)!;

  function exchange() {
    bank.setCurrency(selected);
    onNavigate("ExchangeEmpty");
  }

  return (
    <Page title="Валюта бағамдары" onBack={onBack}>
      <Heading
        title="Валюта бағамдары"
        subtitle="Айырбастауға арналған демонстрациялық бағамдар"
      />

      {rates.map(item => (
        <Menu
          key={item.code}
          icon={item.code === "USD" ? "🇺🇸" : "🇪🇺"}
          title={`${item.code} — ${item.name}`}
          subtitle={`Сатып алу: ${item.buy} ₸ | Сату: ${item.sell} ₸`}
          onPress={() => setSelected(item.code)}
        />
      ))}

      <Card>
        <Detail label="Таңдалған валюта" value={current.code} />
        <Detail label="Сатып алу" value={`${current.buy} ₸`} />
        <Detail label="Сату" value={`${current.sell} ₸`} />
      </Card>

      <Button title="Айырбастауға өту" onPress={exchange} />
      <Info text="Бағамдар нақты уақыттан алынбайды. Қаржылық шешімге пайдаланбаңыз." />
    </Page>
  );
}
