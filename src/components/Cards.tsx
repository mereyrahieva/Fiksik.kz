import React from "react";
import { Text, View, StyleSheet } from "react-native";
import {
  Page, Heading, Menu, Button,
  ScreenProps, C
} from "./EmeraldUI";
import { useBank } from "./BankStore";

export default function Cards({
  onNavigate, onBack
}: ScreenProps) {
  const bank = useBank();

  return (
    <Page title="Банк карталары" onBack={onBack}>
      <Heading title="Менің карталарым"
        subtitle="Барлық карталарды бір жерден басқарыңыз." />
      <View style={s.card}>
        <View style={s.row}>
          <Text style={s.bank}>✦ Fiksik Bank</Text>
          <Text style={s.visa}>VISA</Text>
        </View>
        <Text style={s.balance}>
          {bank.balance.toLocaleString("kk-KZ")} ₸
        </Text>
        <Text style={s.number}>•••• •••• •••• 4589</Text>
        <Text style={s.holder}>{bank.name.toUpperCase()}</Text>
      </View>
      <Menu icon="💳" title="Карта туралы ақпарат"
        onPress={() => onNavigate("CardDetail")} />
      <Menu icon="↗️" title="Картадан аудару"
        onPress={() => onNavigate("TransferEmpty")} />
      <Menu icon="💵" title="Қаражат алу"
        onPress={() => onNavigate("WithdrawEmpty")} />
      <Button title="Шоттарымды қарау" secondary
        onPress={() => onNavigate("Accounts")} />
    </Page>
  );
}

const s = StyleSheet.create({
  card: {
    backgroundColor: C.dark, padding: 25,
    borderRadius: 24, minHeight: 230,
    marginBottom: 25, justifyContent: "space-between"
  },
  row: { flexDirection: "row", justifyContent: "space-between" },
  bank: { color: C.white, fontSize: 19, fontWeight: "800" },
  visa: { color: C.white, fontSize: 22, fontWeight: "900" },
  balance: { color: C.white, fontSize: 28, fontWeight: "900" },
  number: { color: C.light, fontSize: 17, letterSpacing: 2 },
  holder: { color: C.light, fontSize: 12 }
});