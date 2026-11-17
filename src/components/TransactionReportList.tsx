
import React, { useState } from "react";
import { View, Text } from "react-native";
import {
  Page, Heading, Card, Detail,
  Button, Menu, Info, ScreenProps, C
} from "./EmeraldUI";
import { useBank } from "./BankStore";

export default function TransactionReportList({
  onNavigate, onBack
}: ScreenProps) {
  const bank = useBank();
  const [filter, setFilter] = useState("Барлығы");

  const items = bank.transactions.filter(x => {
    if (filter === "Кірістер") return x.amount > 0;
    if (filter === "Шығыстар") return x.amount < 0;
    return true;
  });

  return (
    <Page title="Операциялар тарихы" onBack={onBack}>
      <Heading title="Менің операцияларым"
        subtitle="Аударымдар мен төлемдер тарихы" />

      <View style={{ flexDirection: "row", gap: 7, marginBottom: 20 }}>
        {["Барлығы", "Кірістер", "Шығыстар"].map(f => (
          <View key={f} style={{ flex: 1 }}>
            <Button title={f}
              secondary={filter !== f}
              onPress={() => setFilter(f)} />
          </View>
        ))}
      </View>

      {items.map(item => (
        <Card key={item.id}>
          <Detail label="Операция" value={item.title} />
          <Detail label="Күні" value={item.date} />
          <Detail label="Сома"
            value={`${item.amount.toLocaleString("kk-KZ")} ₸`} />
          <Detail label="Мәртебе" value={item.status} />
        </Card>
      ))}

      {items.length === 0 && (
        <Info text="Бұл санатта операциялар жоқ." />
      )}

      <Button title="Қаржы диаграммасы"
        onPress={() => onNavigate("TransactionReportChart")} />
      <Button title="Басты бет" secondary
        onPress={() => onNavigate("Home")} />
    </Page>
  );
}
