
import React, { useState } from "react";
import { Text } from "react-native";
import {
  Page, Heading, Menu, Button,
  Card, Detail, Info, ScreenProps
} from "./EmeraldUI";
import { useBank } from "./BankStore";

const currencies = [
  { code: "USD", name: "АҚШ доллары", icon: "🇺🇸" },
  { code: "EUR", name: "Еуро", icon: "🇪🇺" }
];

export default function ExchangeCurrencyModal({
  onBack
}: ScreenProps) {
  const bank = useBank();
  const [selected, setSelected] = useState(bank.currency);

  function save() {
    bank.setCurrency(selected);
    onBack();
  }

  return (
    <Page title="Валютаны таңдау" onBack={onBack}>
      <Heading
        title="Қажетті валютаны таңдаңыз"
        subtitle="Қай валютаны айырбастағыңыз келеді?"
      />

      {currencies.map(item => (
        <Menu
          key={item.code}
          icon={item.icon}
          title={item.name}
          subtitle={`${item.code}${selected === item.code ? " — таңдалды" : ""}`}
          onPress={() => setSelected(item.code)}
        />
      ))}

      <Card>
        <Detail label="Таңдалған валюта" value={selected} />
      </Card>

      <Button title="Таңдауды сақтау" onPress={save} />
      <Info text="Қазір USD және EUR валюталарының демо бағамдары қолжетімді." />
    </Page>
  );
}
