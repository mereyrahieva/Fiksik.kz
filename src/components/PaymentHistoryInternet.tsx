import React, { useState } from "react";
import {
  Page, Heading, Card, Detail, Menu,
  Button, Info, ScreenProps
} from "../EmeraldUI";

const payments = [
  { id: 1, provider: "Интернет қызметі", date: "12 қараша", amount: 12000 },
  { id: 2, provider: "Интернет қызметі", date: "12 қазан", amount: 12000 },
  { id: 3, provider: "Интернет қызметі", date: "12 қыркүйек", amount: 11000 }
];

export default function PaymentHistoryInternet({
  onNavigate, onBack
}: ScreenProps) {
  const [selected, setSelected] = useState<number | null>(null);
  const current = payments.find(item => item.id === selected);

  return (
    <Page title="Интернет төлемдерінің тарихы" onBack={onBack}>
      <Heading
        title="Интернет төлемдері"
        subtitle="Бұрынғы төлемдерді қараңыз."
      />

      {payments.map(item => (
        <Menu
          key={item.id}
          icon="🌐"
          title={item.provider}
          subtitle={`${item.date} • ${item.amount.toLocaleString("kk-KZ")} ₸`}
          onPress={() => setSelected(item.id)}
        />
      ))}

      {current && (
        <Card>
          <Detail label="Қызмет" value={current.provider} />
          <Detail label="Күні" value={current.date} />
          <Detail
            label="Төлем сомасы"
            value={`${current.amount.toLocaleString("kk-KZ")} ₸`}
          />
          <Detail label="Мәртебе" value="Демо төленді" />
        </Card>
      )}

      <Button
        title="Интернет ақысын төлеу"
        onPress={() => onNavigate("InternetBillEmpty")}
      />

      <Button
        title="Төлемдерге оралу"
        secondary
        onPress={() => onNavigate("Bills")}
      />

      <Info text="Төлемдер тарихы үлгі мәліметтерден тұрады." />
    </Page>
  );
}