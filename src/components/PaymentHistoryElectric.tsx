import React, { useState } from "react";
import {
  Page, Heading, Menu, Card, Detail,
  Button, Info, ScreenProps
} from "./EmeraldUI";

const sample = [
  { id: 1, month: "Қараша", amount: 8500 },
  { id: 2, month: "Қазан", amount: 7900 },
  { id: 3, month: "Қыркүйек", amount: 8100 }
];

export default function PaymentHistoryElectric({
  onNavigate, onBack
}: ScreenProps) {
  const [selected, setSelected] = useState<number | null>(null);
  const current = sample.find(x => x.id === selected);

  return (
    <Page title="Электр төлемдері" onBack={onBack}>
      <Heading title="Электр энергиясының тарихы"
        subtitle="Демонстрациялық төлем тізімі" />
      {sample.map(x => (
        <Menu key={x.id} icon="💡"
          title={`${x.month} айы`}
          subtitle={`${x.amount.toLocaleString("kk-KZ")} ₸`}
          onPress={() => setSelected(x.id)} />
      ))}
      {current && (
        <Card>
          <Detail label="Қызмет" value="Электр энергиясы" />
          <Detail label="Ай" value={current.month} />
          <Detail label="Сома"
            value={`${current.amount.toLocaleString("kk-KZ")} ₸`} />
          <Detail label="Мәртебе" value="Үлгі төлем" />
        </Card>
      )}
      <Button title="Жаңа төлем"
        onPress={() => onNavigate("ElectricBillEmpty")} />
      <Info text="Тізімдегі төлемдер нақты банк операциялары емес." />
    </Page>
  );
}