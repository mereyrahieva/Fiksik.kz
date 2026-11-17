import React from "react";
import { Text } from "react-native";
import {
  Page, Heading, Card, Detail, Menu,
  Button, ScreenProps, C
} from "./EmeraldUI";
import { useBank } from "./BankStore";

export default function Accounts({
  onNavigate, onBack
}: ScreenProps) {
  const bank = useBank();

  return (
    <Page title="Менің шоттарым" onBack={onBack}>
      <Heading title="Шоттарды басқару"
        subtitle="Банк шоттары мен қолжетімді қаражат" />
      <Card dark>
        <Text style={{ color: C.light }}>Жалпы баланс</Text>
        <Text style={{
          color: C.white, fontSize: 32,
          fontWeight: "900", marginVertical: 18
        }}>{bank.balance.toLocaleString("kk-KZ")} ₸</Text>
        <Text style={{ color: C.light }}>Fiksik Bank</Text>
      </Card>
      <Menu icon="💳" title="Негізгі шот"
        subtitle="•••• 4589"
        onPress={() => onNavigate("CardDetail")} />
      <Menu icon="💰" title="Жинақ шоты"
        onPress={() => onNavigate("Deposits")} />
      <Menu icon="🕘" title="Операциялар тарихы"
        onPress={() => onNavigate("TransactionReportList")} />
      <Button title="Ақша аудару"
        onPress={() => onNavigate("TransferEmpty")} />
      <Button title="Карталарым" secondary
        onPress={() => onNavigate("Cards")} />
    </Page>
  );
}