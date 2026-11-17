
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import {
  Page, Heading, Card, Detail, Menu,
  BottomNav, ScreenProps, C
} from "./EmeraldUI";
import { useBank } from "./BankStore";

export default function TransferEmpty({
  onNavigate, onBack
}: ScreenProps) {
  const bank = useBank();

  return (
    <View style={{ flex: 1, backgroundColor: C.bg }}>
      <View style={{ flex: 1 }}>
        <Page title="Ақша аудару" onBack={onBack}>
          <Heading
            title="Ақша аударымдары"
            subtitle="Ақша жіберудің ыңғайлы тәсілін таңдаңыз."
          />

          <Card dark>
            <Text style={s.caption}>Қолжетімді баланс</Text>
            <Text style={s.balance}>
              {bank.balance.toLocaleString("kk-KZ")} ₸
            </Text>
            <Text style={s.caption}>Негізгі карта •••• 4589</Text>
          </Card>

          <Menu
            icon="💳"
            title="Картаға аудару"
            subtitle="Басқа банк картасына ақша жіберу"
            onPress={() => onNavigate("TransferManualEmpty")}
          />

          <Menu
            icon="👤"
            title="Сақталған алушыға аудару"
            subtitle="Алушылар тізімінен таңдау"
            onPress={() => onNavigate("TransferBeneficiaryFilled")}
          />

          <Menu
            icon="🏦"
            title="Басқа банкке аудару"
            subtitle="Банк деректемелері бойынша"
            onPress={() => onNavigate("TransferBankEmpty")}
          />

          <Menu
            icon="📋"
            title="Алушылар тізімі"
            onPress={() => onNavigate("BeneficiaryDirectory")}
          />

          <Menu
            icon="🕘"
            title="Аударымдар тарихы"
            onPress={() => onNavigate("TransactionReportList")}
          />
        </Page>
      </View>
      <BottomNav onNavigate={onNavigate} active="TransferEmpty" />
    </View>
  );
}

const s = StyleSheet.create({
  caption: { color: C.light, fontSize: 13 },
  balance: {
    color: C.white,
    fontSize: 31,
    fontWeight: "900",
    marginVertical: 18
  }
});
