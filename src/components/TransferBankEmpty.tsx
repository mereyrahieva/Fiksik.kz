
import React, { useState } from "react";
import { Alert } from "react-native";
import {
  Page, Heading, Field, Card, Detail,
  Button, Info, ScreenProps
} from "./EmeraldUI";
import { useBank } from "./BankStore";

export default function TransferBankEmpty({
  onNavigate, onBack
}: ScreenProps) {
  const bank = useBank();
  const [iban, setIban] = useState("");
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");

  function proceed() {
    const sum = Number(amount.replace(",", "."));
    const clean = iban.replace(/\s/g, "").toUpperCase();

    if (!/^KZ[A-Z0-9]{18}$/.test(clean)) {
      Alert.alert("Қате", "20 таңбалы KZ IBAN енгізіңіз.");
      return;
    }
    if (!name.trim()) {
      Alert.alert("Қате", "Алушының атын енгізіңіз.");
      return;
    }
    if (!Number.isFinite(sum) || sum <= 0 || sum > bank.balance) {
      Alert.alert("Қате", "Аударым сомасын тексеріңіз.");
      return;
    }

    bank.setTransfer({
      recipient: name,
      card: clean,
      amount: sum,
      message: "Банк шотына демо аударым"
    });
    onNavigate("TransferBankPicker");
  }

  return (
    <Page title="Басқа банкке аудару" onBack={onBack}>
      <Heading title="Банк шотына аудару"
        subtitle="Алушының IBAN деректемесін енгізіңіз." />

      <Card>
        <Detail label="Қолжетімді қаражат"
          value={`${bank.balance.toLocaleString("kk-KZ")} ₸`} />
      </Card>

      <Field label="Алушының аты-жөні"
        value={name} onChangeText={setName}
        placeholder="Алушының аты" />
      <Field label="IBAN шот нөмірі"
        value={iban} onChangeText={setIban}
        placeholder="KZ..." />
      <Field label="Сома (₸)"
        value={amount} onChangeText={setAmount}
        placeholder="0" keyboardType="decimal-pad" />

      <Button title="Жалғастыру" onPress={proceed} />
      <Info text="Деректемелер тек формат бойынша тексеріледі. Банк сәйкестігі расталмайды." />
    </Page>
  );
}
