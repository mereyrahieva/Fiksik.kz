
import React from "react";
import { Text } from "react-native";
import {
  Page, Heading, Card, Detail,
  Menu, Button, Info, ScreenProps, C
} from "./EmeraldUI";
import { useBank } from "./BankStore";

export default function PaymentDetail({
  onNavigate, onBack
}: ScreenProps) {
  const bank = useBank();

  return (
    <Page title="Төлем туралы ақпарат" onBack={onBack}>
      <Heading
        title="Төлемдер орталығы"
        subtitle="Қажетті төлем түрін таңдаңыз."
      />

      <Card dark>
        <Text style={{
          color: C.light,
          fontSize: 14
        }}>Қолжетімді баланс</Text>

        <Text style={{
          color: C.white,
          fontSize: 30,
          fontWeight: "900",
          marginVertical: 18
        }}>
          {bank.balance.toLocaleString("kk-KZ")} ₸
        </Text>

        <Text style={{ color: C.light }}>
          Негізгі карта •••• 4589
        </Text>
      </Card>

      <Menu
        icon="📱"
        title="Ұялы байланыс"
        subtitle="Телефон балансын толықтыру"
        onPress={() => onNavigate("MobileRechargeEmpty")}
      />

      <Menu
        icon="🌐"
        title="Интернет"
        subtitle="Интернет қызметіне төлем"
        onPress={() => onNavigate("InternetBillEmpty")}
      />

      <Menu
        icon="💡"
        title="Электр энергиясы"
        subtitle="Коммуналдық төлем"
        onPress={() => onNavigate("ElectricBillEmpty")}
      />

      <Menu
        icon="💳"
        title="Несие картасы"
        subtitle="Несие төлемін жасау"
        onPress={() => onNavigate("CreditCardCheckout")}
      />

      <Card>
        <Detail label="Төлем картасы" value="•••• 4589" />
        <Detail label="Валюта" value="KZT" />
      </Card>

      <Button
        title="Операциялар тарихы"
        onPress={() => onNavigate("TransactionReportList")}
      />

      <Button
        title="Басты бет"
        secondary
        onPress={() => onNavigate("Home")}
      />

      <Info text="Нақты төлемдер орындалмайды. Бұл банк интерфейсінің демо нұсқасы." />
    </Page>
  );
}
