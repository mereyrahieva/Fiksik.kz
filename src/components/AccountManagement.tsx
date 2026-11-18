
import React from "react";
import { Text, StyleSheet } from "react-native";
import {
  Page, Heading, Card, Detail,
  Menu, Button, ScreenProps, C
} from "./EmeraldUI";
import { useBank } from "./BankStore";

export default function AccountManagement({
  onNavigate, onBack
}: ScreenProps) {
  const bank = useBank();

  return (
    <Page title="Шоттарды басқару" onBack={onBack}>
      <Heading
        title="Менің қаржым"
        subtitle="Шоттарыңыз бен карталарыңызды бір жерден басқарыңыз."
      />

      <Card dark>
        <Text style={s.label}>Жалпы баланс</Text>
        <Text style={s.balance}>
          {bank.balance.toLocaleString("kk-KZ")} ₸
        </Text>
        <Text style={s.label}>Fiksik Bank · KZT</Text>
      </Card>

      <Card>
        <Detail label="Шот иесі" value={bank.name} />
        <Detail label="Негізгі карта" value="•••• 4589" />
        <Detail label="Валюта" value="Теңге" />
        <Detail label="Шот мәртебесі" value="Белсенді (демо)" />
      </Card>

      <Menu
        icon="💳"
        title="Менің карталарым"
        subtitle="Карталарды қарау және басқару"
        onPress={() => onNavigate("Cards")}
      />

      <Menu
        icon="🏦"
        title="Барлық шоттар"
        onPress={() => onNavigate("Accounts")}
      />

      <Menu
        icon="💰"
        title="Жинақ ашу"
        onPress={() => onNavigate("SaveOnlineMenu")}
      />

      <Menu
        icon="📊"
        title="Қаржы есебі"
        onPress={() => onNavigate("TransactionReportChart")}
      />

      <Button
        title="Ақша аудару"
        onPress={() => onNavigate("TransferEmpty")}
      />

      <Button
        title="Басты бетке өту"
        secondary
        onPress={() => onNavigate("Home")}
      />
    </Page>
  );
}

const s = StyleSheet.create({
  label: {
    color: C.light,
    fontSize: 14
  },
  balance: {
    color: C.white,
    fontSize: 32,
    fontWeight: "900",
    marginVertical: 20
  }
});
