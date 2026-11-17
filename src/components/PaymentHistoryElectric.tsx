import React, { useState } from "react";
import {
  Page, Heading, Card, Detail, Menu,
  Button, Info, ScreenProps
} from "../EmeraldUI";

const payments = [
  { id: 1, date: "15 қараша", amount: 8500, status: "Демо төленді" },
  { id: 2, date: "15 қазан", amount: 7900, status: "Демо төленді" },
  { id: 3, date: "15 қыркүйек", amount: 8100, status: "Демо төленді" }
];

export default function PaymentHistoryElectric({
  onNavigate, onBack
}: ScreenProps) {
  const [selected, setSelected] = useState<number | null>(null);
  const current = payments.find(item => item.id === selected);

  return (
    <Page title="Электр төлемдерінің тарихы" onBack={onBack}>
      <Heading
        title="Электр энергиясы"
        subtitle="Бұрынғы төлемдердің демонстрациялық тізімі"
      />

      {payments.map(item => (
        <Menu
          key={item.id}
          icon="💡"
          title={`Электр төлемі — ${item.date}`}
          subtitle={`${item.amount.toLocaleString("kk-KZ")} ₸`}
          onPress={() => setSelected(item.id)}
        />
      ))}

      {current && (
        <Card>
          <Detail label="Қызмет" value="Электр энергиясы" />
          <Detail label="Күні" value={current.date} />
          <Detail
            label="Сома"
            value={`${current.amount.toLocaleString("kk-KZ")} ₸`}
          />
          <Detail label="Мәртебе" value={current.status} />
        </Card>
      )}

      <Button
        title="Жаңа төлем жасау"
        onPress={() => onNavigate("ElectricBillEmpty")}
      />

      <Button
        title="Төлемдер бөлімі"
        secondary
        onPress={() => onNavigate("Bills")}
      />

      <Info text="Тізімдегі төлемдер нақты операциялар емес." />
    </Page>
  );
}