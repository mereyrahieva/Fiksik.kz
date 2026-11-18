
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import {
  Page, Heading, Card, Detail,
  Menu, Button, Info, ScreenProps, C
} from "./EmeraldUI";

export default function CreditCardOverview({
  onNavigate, onBack
}: ScreenProps) {
  return (
    <Page title="Несие картасы" onBack={onBack}>
      <Heading
        title="Менің несие картам"
        subtitle="Карта лимиті және төлемдер"
      />

      <View style={s.creditCard}>
        <View style={s.row}>
          <Text style={s.bank}>✦ Fiksik Bank</Text>
          <Text style={s.visa}>VISA</Text>
        </View>

        <Text style={s.caption}>Демонстрациялық лимит</Text>
        <Text style={s.balance}>300 000 ₸</Text>
        <Text style={s.number}>•••• •••• •••• 8822</Text>
      </View>

      <Card>
        <Detail label="Несие лимиті" value="300 000 ₸ (үлгі)" />
        <Detail label="Берешек" value="50 000 ₸ (үлгі)" />
        <Detail label="Ай сайынғы төлем" value="5 000 ₸ (үлгі)" />
        <Detail label="Валюта" value="KZT" />
        <Detail label="Мәртебе" value="Демо белсенді" />
      </Card>

      <Menu
        icon="💰"
        title="Несие төлемін жасау"
        subtitle="Қарызды өтеу"
        onPress={() => onNavigate("CreditCardCheckout")}
      />

      <Menu
        icon="📋"
        title="Төлемдер тарихы"
        onPress={() => onNavigate("TransactionReportList")}
      />

      <Button
        title="Төлем жасау"
        onPress={() => onNavigate("CreditCardCheckout")}
      />

      <Button
        title="Карталарым"
        secondary
        onPress={() => onNavigate("Cards")}
      />

      <Info text="Несие сомалары нақты қарыз немесе банк ұсынысы емес." />
    </Page>
  );
}

const s = StyleSheet.create({
  creditCard: {
    backgroundColor: C.dark,
    borderRadius: 24,
    padding: 24,
    minHeight: 210,
    marginBottom: 20,
    justifyContent: "space-between"
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  bank: {
    color: C.white,
    fontSize: 18,
    fontWeight: "800"
  },
  visa: {
    color: C.white,
    fontSize: 22,
    fontWeight: "900"
  },
  caption: {
    color: C.light,
    fontSize: 13
  },
  balance: {
    color: C.white,
    fontSize: 32,
    fontWeight: "900"
  },
  number: {
    color: C.light,
    fontSize: 17,
    letterSpacing: 2
  }
});
