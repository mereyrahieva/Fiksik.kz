
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import {
  Page, Heading, Card, Detail, Button,
  SectionTitle, ScreenProps, C
} from "./EmeraldUI";
import { useBank } from "./BankStore";

export default function TransactionReportChart({
  onNavigate, onBack
}: ScreenProps) {
  const bank = useBank();
  const income = bank.transactions
    .filter(x => x.amount > 0)
    .reduce((a, b) => a + b.amount, 0);
  const expense = bank.transactions
    .filter(x => x.amount < 0)
    .reduce((a, b) => a + Math.abs(b.amount), 0);
  const max = Math.max(income, expense, 1);

  return (
    <Page title="Қаржы статистикасы" onBack={onBack}>
      <Heading title="Кірістер мен шығыстар"
        subtitle="Операцияларыңыз бойынша демо талдау" />

      <Card>
        <Detail label="Кірістер"
          value={`+${income.toLocaleString("kk-KZ")} ₸`} />
        <Detail label="Шығыстар"
          value={`−${expense.toLocaleString("kk-KZ")} ₸`} />
        <Detail label="Операциялар саны"
          value={`${bank.transactions.length}`} />
      </Card>

      <SectionTitle title="Қаржылық диаграмма" />

      <Card>
        <Text style={s.label}>Кірістер</Text>
        <View style={s.track}>
          <View style={[s.income, {
            width: `${(income / max) * 100}%`
          }]} />
        </View>
        <Text style={s.amount}>{income.toLocaleString("kk-KZ")} ₸</Text>

        <Text style={[s.label, { marginTop: 20 }]}>Шығыстар</Text>
        <View style={s.track}>
          <View style={[s.expense, {
            width: `${(expense / max) * 100}%`
          }]} />
        </View>
        <Text style={s.amount}>{expense.toLocaleString("kk-KZ")} ₸</Text>
      </Card>

      <Button title="Операциялар тізімі"
        onPress={() => onNavigate("TransactionReportList")} />
    </Page>
  );
}

const s = StyleSheet.create({
  label: { color: C.dark, fontWeight: "800", fontSize: 14 },
  track: {
    height: 23,
    backgroundColor: C.mint,
    borderRadius: 12,
    overflow: "hidden",
    marginTop: 10
  },
  income: {
    height: 23,
    backgroundColor: C.green,
    borderRadius: 12
  },
  expense: {
    height: 23,
    backgroundColor: "#F59E0B",
    borderRadius: 12
  },
  amount: { color: C.gray, marginTop: 8, fontWeight: "700" }
});
