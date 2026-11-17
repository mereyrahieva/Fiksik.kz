import React from "react";
import { View } from "react-native";
import {
  Page, Heading, Card, Detail, Menu,
  BottomNav, ScreenProps, C
} from "./EmeraldUI";
import { useBank } from "./BankStore";

export default function Bills({
  onNavigate, onBack
}: ScreenProps) {
  const bank = useBank();

  return (
    <View style={{ flex: 1, backgroundColor: C.bg }}>
      <View style={{ flex: 1 }}>
        <Page title="Төлемдер" onBack={onBack}>
          <Heading title="Қызметтерге төлем жасау"
            subtitle="Төлем санатын таңдаңыз." />
          <Card>
            <Detail label="Төлем картасы" value="•••• 4589" />
            <Detail label="Баланс"
              value={`${bank.balance.toLocaleString("kk-KZ")} ₸`} />
          </Card>
          <Menu icon="📱" title="Ұялы байланыс"
            subtitle="Телефон балансын толықтыру"
            onPress={() => onNavigate("MobileRechargeEmpty")} />
          <Menu icon="🌐" title="Интернет"
            subtitle="Интернет қызметінің ақысын төлеу"
            onPress={() => onNavigate("InternetBillEmpty")} />
          <Menu icon="💡" title="Электр энергиясы"
            subtitle="Коммуналдық төлем"
            onPress={() => onNavigate("ElectricBillEmpty")} />
          <Menu icon="📋" title="Төлемдер тарихы"
            onPress={() => onNavigate("TransactionReportList")} />
          <Menu icon="⚡" title="Электр төлемдерінің тарихы"
            onPress={() => onNavigate("PaymentHistoryElectric")} />
          <Menu icon="🧾" title="Интернет төлемдерінің тарихы"
            onPress={() => onNavigate("PaymentHistoryInternet")} />
        </Page>
      </View>
      <BottomNav onNavigate={onNavigate} active="Bills" />
    </View>
  );
}