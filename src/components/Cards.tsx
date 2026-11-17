import React from "react";
import { Text, View, StyleSheet } from "react-native";
import {
  Page, Heading, Button, Menu,
  ScreenProps, C
} from "../EmeraldUI";
import { useBank } from "../BankStore";

export default function Cards({ onNavigate, onBack }: ScreenProps) {
  const bank = useBank();

  return (
    <Page title="Менің карталарым" onBack={onBack}>
      <Heading
        title="Банк карталары"
        subtitle="Карталарыңызды қарап, басқарыңыз."
      />

      <View style={s.card}>
        <Text style={s.bank}>✦ Fiksik Bank</Text>
        <Text style={s.balance}>
          {bank.balance.toLocaleString("kk-KZ")} ₸
        </Text>
        <Text style={s.number}>•••• •••• •••• 4589</Text>
        <View style={s.footer}>
          <Text style={s.white}>НЕГІЗГІ КАРТА</Text>
          <Text style={s.visa}>VISA</Text>
        </View>
      </View>

      <Menu
        icon="💳"
        title="Карта мәліметтері"
        subtitle="Нөмірі, балансы және баптаулары"
        onPress={() => onNavigate("CardDetail")}
      />

      <Menu
        icon="⇄"
        title="Картадан ақша аудару"
        onPress={() => onNavigate("TransferEmpty")}
      />

      <Menu
        icon="💵"
        title="Қаражат алу"
        onPress={() => onNavigate("WithdrawEmpty")}
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
  card: {
    backgroundColor: C.dark,
    borderRadius: 22,
    padding: 24,
    minHeight: 205,
    marginBottom: 28,
    justifyContent: "space-between"
  },
  bank: { color: "#FFFFFF", fontSize: 19, fontWeight: "800" },
  balance: { color: "#FFFFFF", fontSize: 28, fontWeight: "800" },
  number: { color: "#D1FAE5", fontSize: 16, letterSpacing: 2 },
  footer: { flexDirection: "row", justifyContent: "space-between" },
  white: { color: "#D1FAE5", fontSize: 11 },
  visa: { color: "#FFFFFF", fontWeight: "800", fontSize: 21 }
});