import React, { useState } from "react";
import { Alert } from "react-native";
import {
  Page, Heading, Field, Card, Detail,
  Button, Info, ScreenProps
} from "./EmeraldUI";
import { useBank } from "./BankStore";

export default function InternetBillEmpty({
  onNavigate, onBack
}: ScreenProps) {
  const bank = useBank();
  const [provider, setProvider] = useState("");
  const [account, setAccount] = useState("");
  const [amount, setAmount] = useState("");

  function proceed() {
    const sum = Number(amount.replace(",", "."));

    if (!provider.trim() || !account.trim()) {
      Alert.alert("Қате", "Провайдер мен абонент нөмірін енгізіңіз.");
      return;
    }
    if (!Number.isFinite(sum) || sum <= 0 || sum > bank.balance) {
      Alert.alert("Қате", "Соманы тексеріңіз.");
      return;
    }

    bank.setTransfer({
      recipient: provider,
      card: account,
      amount: sum,
      message: "Интернет қызметінің төлемі"
    });
    onNavigate("InternetBillDetails");
  }

  return (
    <Page title="Интернет төлемі" onBack={onBack}>
      <Heading title="Интернет ақысын төлеу"
        subtitle="Төлем мәліметтерін енгізіңіз." />
      <Card>
        <Detail label="Карта" value="•••• 4589" />
        <Detail label="Баланс"
          value={`${bank.balance.toLocaleString("kk-KZ")} ₸`} />
      </Card>
      <Field label="Интернет провайдері"
        value={provider} onChangeText={setProvider}
        placeholder="Компания атауы" />
      <Field label="Абонент нөмірі"
        value={account} onChangeText={setAccount}
        placeholder="Шот нөмірі" />
      <Field label="Сома (₸)"
        value={amount} onChangeText={setAmount}
        placeholder="0" keyboardType="decimal-pad" />
      <Button title="Жалғастыру" onPress={proceed} />
      <Info text="Бұл демо төлем. Провайдерге нақты қаражат түспейді." />
    </Page>
  );
}