import React from "react";
import { Text, StyleSheet } from "react-native";
import {
  Page, Heading, Card, Detail, Menu,
  Button, ScreenProps, C
} from "../EmeraldUI";
import { useBank } from "../BankStore";

export default function Accounts({ onNavigate, onBack }: ScreenProps) {
  const bank = useBank();

  return (
    <Page title="Менің шоттарым" onBack={onBack}>
      <Heading
        title="Шоттарды басқару"
        subtitle="Қаражатыңыз бен банк шоттарыңыз"
      />

      <Card dark>
        <Text style={s.label}>Жалпы баланс</Text>
        <Text style={s.balance}>
          {bank.balance.toLocaleString("kk-KZ")} ₸
        </Text>
        <Text style={s.label}>Fiksik Bank</Text>
      </Card>

      <Text style={s.heading}>Шоттар тізімі</Text>

      <Menu
        icon="💳"
        title="Негізгі шот"
        subtitle={`•••• 4589  •  ${bank.balance.toLocaleString("kk-KZ")} ₸`}
        onPress={() => onNavigate("CardDetail")}
      />

      <Menu
        icon="💰"
        title="Жинақ шоты"
        subtitle="Депозиттер бөлімін ашу"
        onPress={() => onNavigate("SaveOnlineMenu")}
      />

      <Button
        title="Ақша аудару"
        onPress={() => onNavigate("TransferEmpty")}
      />

      <Button
        title="Карталарды қарау"
        secondary
        onPress={() => onNavigate("Cards")}
      />
    </Page>
  );
}

const s = StyleSheet.create({
  label: { color: "#D1FAE5", fontSize: 13 },
  balance: {
    color: "#FFFFFF",
    fontSize: 30,
    fontWeight: "800",
    marginVertical: 20
  },
  heading: {
    color: C.dark,
    fontSize: 18,
    fontWeight: "700",
    marginVertical: 20
  }
});