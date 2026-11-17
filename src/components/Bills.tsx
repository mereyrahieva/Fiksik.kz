import React from "react";
import {
  Page, Heading, Menu, Card, Detail,
  Info, ScreenProps
} from "../EmeraldUI";
import { useBank } from "../BankStore";

export default function Bills({
  onNavigate, onBack
}: ScreenProps) {
  const bank = useBank();

  return (
    <Page title="Төлемдер" onBack={onBack}>
      <Heading
        title="Қызмет ақысын төлеу"
        subtitle="Төлем түрін таңдаңыз."
      />

      <Card>
        <Detail label="Төлем картасы" value="•••• 4589" />
        <Detail label="Қолжетімді баланс"
          value={`${bank.balance.toLocaleString("kk-KZ")} ₸`} />
      </Card>

      <Menu icon="📱" title="Ұялы байланыс"
        subtitle="Телефон балансын толықтыру"
        onPress={() => onNavigate("MobileRechargeEmpty")} />

      <Menu icon="🌐" title="Интернет"
        subtitle="Интернет қызметіне төлем жасау"
        onPress={() => onNavigate("InternetBillEmpty")} />

      <Menu icon="💡" title="Электр энергиясы"
        subtitle="Электр қуаты үшін төлем"
        onPress={() => onNavigate("ElectricBillEmpty")} />

      <Menu icon="📋" title="Электр төлемдерінің тарихы"
        onPress={() => onNavigate("PaymentHistoryElectric")} />

      <Menu icon="🧾" title="Интернет төлемдерінің тарихы"
        onPress={() => onNavigate("PaymentHistoryInternet")} />

      <Info text="Төлемдер демо режимінде жұмыс істейді." />
    </Page>
  );
}