
import React, { useState } from "react";
import { Alert } from "react-native";
import {
  Page, Heading, Field, Button,
  Info, ScreenProps
} from "./EmeraldUI";
import { useBank } from "./BankStore";

export default function TransferManualEmpty({
  onNavigate, onBack
}: ScreenProps) {
  const bank = useBank();
  const [bankName, setBankName] = useState("");
  const [recipient, setRecipient] = useState("");
  const [iban, setIban] = useState("");
  const [amount, setAmount] = useState("");

  function proceed() {
    const sum = Number(amount.replace(",", "."));
    const account = iban.replace(/\s/g, "").toUpperCase();

    if (!bankName.trim() || !recipient.trim()) {
      Alert.alert("Қате", "Банк пен алушының аты-жөнін енгізіңіз.");
      return;
    }
    if (!/^KZ\d{18}$/.test(account)) {
      Alert.alert("Қате", "Үлгі IBAN нөмірі KZ және 18 саннан тұруы керек.");
      return;
    }
    if (!Number.isFinite(sum) || sum <= 0 || sum > bank.balance) {
      Alert.alert("Қате", "Аударым сомасын немесе балансты тексеріңіз.");
      return;
    }

    bank.setTransfer({
      recipient,
      card: account,
      amount: sum,
      message: `Банк: ${bankName}`
    });

    onNavigate("TransferFilled");
  }

  return (
    <Page title="Банк шотына аудару" onBack={onBack}>
      <Heading
        title="Банк деректемелері"
        subtitle="Шот арқылы ақша аудару мәліметтерін толтырыңыз."
      />

      <Field label="Алушының банкі" value={bankName}
        onChangeText={setBankName} placeholder="Банк атауы" />
      <Field label="Алушының аты-жөні" value={recipient}
        onChangeText={setRecipient} placeholder="Аты-жөні" />
      <Field label="IBAN шот нөмірі" value={iban}
        onChangeText={setIban} placeholder="KZ..." />
      <Field label="Аударым сомасы (₸)" value={amount}
        onChangeText={setAmount} placeholder="0"
        keyboardType="decimal-pad" />

      <Button title="Аударымды жалғастыру" onPress={proceed} />
      <Button title="Картаға аудару" secondary
        onPress={() => onNavigate("TransferEmpty")} />

      <Info text="Бұл IBAN тек қарапайым формат бойынша тексеріледі. Нақты банк шотын растау орындалмайды." />
    </Page>
  );
}
