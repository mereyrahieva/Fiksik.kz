
import React, { useState } from "react";
import { Alert } from "react-native";
import {
  Page, Heading, Card, Detail,
  Field, Button, Info, ScreenProps
} from "./EmeraldUI";
import { useBank } from "./BankStore";

export default function SaveOnlineEmpty({
  onNavigate, onBack
}: ScreenProps) {
  const bank = useBank();
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");

  function continueSaving() {
    const sum = Number(amount.trim().replace(",", "."));

    if (name.trim().length < 3) {
      Alert.alert("Қате", "Жинақтың атауын енгізіңіз.");
      return;
    }

    if (!Number.isFinite(sum) || sum < 1000) {
      Alert.alert("Қате", "Кемінде 1 000 ₸ енгізіңіз.");
      return;
    }

    if (sum > bank.balance) {
      Alert.alert("Қате", "Қаражат жеткіліксіз.");
      return;
    }

    bank.setTransfer({
      recipient: name.trim(),
      card: "Жинақ шоты",
      amount: sum,
      message: "Демо депозит ашу"
    });

    onNavigate("SaveOnlineFilled");
  }

  return (
    <Page title="Жаңа жинақ" onBack={onBack}>
      <Heading
        title="Депозит ашу"
        subtitle="Жинақ атауы мен бастапқы соманы енгізіңіз."
      />

      <Card>
        <Detail label="Қаражат көзі" value="Негізгі карта •••• 4589" />
        <Detail
          label="Қолжетімді баланс"
          value={`${bank.balance.toLocaleString("kk-KZ")} ₸`}
        />
      </Card>

      <Field
        label="Жинақ атауы"
        value={name}
        onChangeText={setName}
        placeholder="Мысалы: Жаңа телефон"
      />

      <Field
        label="Бастапқы сома (₸)"
        value={amount}
        onChangeText={setAmount}
        placeholder="1000"
        keyboardType="decimal-pad"
      />

      <Button
        title="Жалғастыру"
        onPress={continueSaving}
      />

      <Button
        title="Жинақ түрлеріне оралу"
        secondary
        onPress={() => onNavigate("SaveOnlineMenu")}
      />

      <Info text="Жинақ нақты банкте ашылмайды. Бұл демо операция." />
    </Page>
  );
}
