
import React, { useState } from "react";
import { Text } from "react-native";
import {
  Page, Heading, Menu, Card, Detail,
  Button, Info, ScreenProps
} from "../EmeraldUI";

type Filter = "all" | "income" | "expense";

const transactions = [
  { id: 1, title: "Шотты толықтыру", amount: 50000, date: "12 қараша" },
  { id: 2, title: "Интернет төлемі", amount: -12500, date: "11 қараша" },
  { id: 3, title: "Дүкендегі төлем", amount: -8500, date: "10 қараша" },
  { id: 4, title: "Ақша түсуі", amount: 120000, date: "9 қараша" },
  { id: 5, title: "Ұялы байланыс", amount: -3000, date: "8 қараша" }
];

export default function TransactionReportList({
  onNavigate, onBack
}: ScreenProps) {
  const [filter, setFilter] = useState<Filter>("all");
  const [selected, setSelected] = useState<number | null>(null);

  const visible = transactions.filter(item =>
    filter === "all" ||
    (filter === "income" && item.amount > 0) ||
    (filter === "expense" && item.amount < 0)
  );

  const current = transactions.find(item => item.id === selected);

  return (
    <Page title="Операциялар тарихы" onBack={onBack}>
      <Heading
        title="Қаржы қозғалысы"
        subtitle="Операцияларды түрі бойынша қараңыз."
      />

      <Button
        title="Барлық операциялар"
        secondary={filter !== "all"}
        onPress={() => setFilter("all")}
      />

      <Button
        title="Тек кірістер"
        secondary={filter !== "income"}
        onPress={() => setFilter("income")}
      />

      <Button
        title="Тек шығыстар"
        secondary={filter !== "expense"}
        onPress={() => setFilter("expense")}
      />

      {visible.map(item => (
        <Menu
          key={item.id}
          icon={item.amount > 0 ? "↙️" : "↗️"}
          title={item.title}
          subtitle={`${item.date} • ${item.amount > 0 ? "+" : ""}${item.amount.toLocaleString("kk-KZ")} ₸`}
          onPress={() => setSelected(item.id)}
        />
      ))}

      {current && (
        <Card>
          <Detail label="Операция" value={current.title} />
          <Detail label="Күні" value={current.date} />
          <Detail
            label="Сома"
            value={`${current.amount.toLocaleString("kk-KZ")} ₸`}
          />
        </Card>
      )}

      <Button
        title="Диаграмманы қарау"
        onPress={() => onNavigate("TransactionReportChart")}
      />

      <Info text="Бұл тізімдегі операциялар үлгі деректерден тұрады." />
    </Page>
  );
}
