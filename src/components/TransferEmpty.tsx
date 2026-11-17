
import React, { useState } from "react";
import { Text, Alert } from "react-native";
import {
  Page, Heading, Field, Button,
  Card, Detail, Info, ScreenProps, common
} from "./EmeraldUI";
import { useBank } from "./BankStore";

export default function TransferEmpty({
  onNavigate, onBack
}: ScreenProps) {
  const bank = useBank();
  const [recipient, setRecipient] = useState("");
  const [card, setCard] = useState("");
  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState("");

  function proceed() {
    const sum = Number(amount.replace(",", "."));

    if (!recipient.trim()) {
      Alert.alert("Қате", "Алушының аты-жөнін енгізіңіз.");
      return;
    }
    if (card.replace(/\D/g, "").length !== 16) {
      Alert.alert("Қате", "Карта нөмірі 16 таңбадан тұруы керек.");
      return;
    }
    if (!Number.isFinite(sum) || sum <= 0) {
      Alert.alert("Қате", "Аударым сомасын дұрыс енгізіңіз.");
      return;
    }
    if (sum > bank.balance) {
      Alert.alert("Қаражат жеткіліксіз", "Баланс жеткіліксіз.");
      return;
    }

    bank.setTransfer({ recipient, card, amount: sum, message });
    onNavigate("TransferFilled");
  }

  return (
    <Page title="Ақша аудару" onBack={onBack}>
      <Heading title="Картаға аудару"
        subtitle="Алушының деректерін енгізіңіз." />

      <Card>
        <Detail label="Ақша жіберілетін карта" value="•••• 4589" />
        <Detail label="Қолжетімді баланс"
          value={`${bank.balance.toLocaleString("kk-KZ")} ₸`} />
      </Card>

      <Button title="Сақталған алушылар" secondary
        onPress={() => onNavigate("TransferBeneficiaryFilled")} />
      <Button title="Банк шотына аудару" secondary
        onPress={() => onNavigate("TransferManualEmpty")} />

      <Text style={common.section}>Аударым мәліметтері</Text>

      <Field label="Алушының аты-жөні" value={recipient}
        onChangeText={setRecipient} placeholder="Аты-жөні" />

      <Field label="Карта нөмірі" value={card}
        onChangeText={setCard}
        placeholder="0000 0000 0000 0000"
        keyboardType="number-pad" />

      <Field label="Аударым сомасы (₸)" value={amount}
        onChangeText={setAmount}
        placeholder="0"
        keyboardType="decimal-pad" />

      <Field label="Хабарлама" value={message}
        onChangeText={setMessage}
        placeholder="Хабарлама (міндетті емес)" />

      <Button title="Аударымды жалғастыру" onPress={proceed} />
      <Info text="Аударым демонстрациялық. Нақты банкке ақша жіберілмейді." />
    </Page>
  );
}
