import React, { useState } from "react";
import {
  Page, Heading, Menu, Card, Detail,
  Button, Info, ScreenProps
} from "./EmeraldUI";

const sample = [
  { id: 1, month: "Қараша", amount: 12000 },
  { id: 2, month: "Қазан", amount: 12000 },
  { id: 3, month: "Қыркүйек", amount: 11000 }
];

export default function PaymentHistoryInternet({
  onNavigate, onBack
}: ScreenProps) {
  const [selected, setSelected] = useState<number | null>(null);
  const current = sample.find(x => x.id === selected);

  return (
    <Page title="Интернет төлемдері" onBack={onBack}>
      <Heading title="Интернет төлемдерінің тарихы"
        subtitle="Өткен төлемдердің демо тізімі" />
      {sample.map(x => (
        <Menu key={x.id} icon="🌐"
          title={`Интернет — ${x.month}`}
          subtitle={`${x.amount.toLocaleString("kk-KZ")} ₸`}
          onPress={() => setSelected(x.id)} />
      ))}
      {current && (
        <Card>
          <Detail label="Қызмет" value="Интернет" />
          <Detail label="Ай" value={current.month} />
          <Detail label="Сома"
            value={`${current.amount.toLocaleString("kk-KZ")} ₸`} />
          <Detail label="Мәртебе" value="Үлгі төлем" />
        </Card>
      )}
      <Button title="Интернет ақысын төлеу"
        onPress={() => onNavigate("InternetBillEmpty")} />
      <Info text="Төлемдер тарихы демонстрациялық деректерден тұрады." />
    </Page>
  );
}