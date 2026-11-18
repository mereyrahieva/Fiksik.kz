
import React, { useState } from "react";
import { Alert } from "react-native";
import {
  Page, Heading, Card, Detail, Field,
  Button, Info, ScreenProps
} from "./EmeraldUI";
import { useBank } from "./BankStore";

export default function ElectricBillEmpty({
  onNavigate, onBack
}: ScreenProps) {
  const bank = useBank();
  const [provider, setProvider] = useState("");
  const [account, setAccount] = useState("");
  const [amount, setAmount] = useState("");

  function proceed() {
    const sum = Number(amount.replace(",", "."));

    if (provider.trim().length < 2) {
      Alert.alert("Қате", "Электр компаниясының атауын енгізіңіз.");
      return;
    }

    if (!account.trim()) {
      Alert.alert("Қате", "Дербес шот нөмірін енгізіңіз.");
      return;
    }

    if (!Number.isFinite(sum) || sum <= 0) {
      Alert.alert("Қате", "Төлем сомасын дұрыс енгізіңіз.");
      return;
    }

    if (sum > bank.balance) {
      Alert.alert("Қате", "Қаражат жеткіліксіз.");
      return;
    }

    bank.setTransfer({
      recipient: provider.trim(),
      card: account.trim(),
      amount: sum,
      message: "Электр энергиясы төлемі"
    });

    onNavigate("ElectricBillFilled");
  }

  return (
    <Page title="Электр энергиясы" onBack={onBack}>
      <Heading
        title="Электр ақысын төлеу"
        subtitle="Компания мен абонент мәліметтерін енгізіңіз."
      />

      <Card>
        <Detail label="Ақша алынатын карта" value="•••• 4589" />
        <Detail
          label="Қолжетімді баланс"
          value={`${bank.balance.toLocaleString("kk-KZ")} ₸`}
        />
      </Card>

      <Field
        label="Электр компаниясы"
        value={provider}
        onChangeText={setProvider}
        placeholder="Компания атауы"
      />

      <Field
        label="Дербес шот"
        value={account}
        onChangeText={setAccount}
        placeholder="Абонент нөмірі"
      />

      <Field
        label="Төлем сомасы (₸)"
        value={amount}
        onChangeText={setAmount}
        placeholder="0"
        keyboardType="decimal-pad"
      />

      <Button
        title="Жалғастыру"
        onPress={proceed}
      />

      <Button
        title="Төлемдер тарихы"
        secondary
        onPress={() => onNavigate("PaymentHistoryElectric")}
      />

      <Info text="Нақты коммуналдық ұйымға төлем жіберілмейді." />
    </Page>
  );
}
