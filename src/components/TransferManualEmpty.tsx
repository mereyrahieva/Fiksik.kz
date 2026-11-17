
import React, { useState } from "react";
import { Alert } from "react-native";
import {
  Page, Heading, Card, Detail, Field,
  Button, Info, ScreenProps
} from "./EmeraldUI";
import { useBank } from "./BankStore";

export default function TransferManualEmpty({
  onNavigate, onBack
}: ScreenProps) {
  const bank = useBank();
  const [recipient, setRecipient] = useState("");
  const [card, setCard] = useState("");
  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState("");

  function continueTransfer() {
    const cleanCard = card.replace(/\D/g, "");
    const sum = Number(amount.replace(",", "."));

    if (recipient.trim().length < 2) {
      Alert.alert("Қате", "Алушының аты-жөнін енгізіңіз.");
      return;
    }

    if (cleanCard.length !== 16) {
      Alert.alert("Қате", "Карта нөмірі 16 саннан тұруы керек.");
      return;
    }

    if (!Number.isFinite(sum) || sum <= 0) {
      Alert.alert("Қате", "Аударым сомасын дұрыс енгізіңіз.");
      return;
    }

    if (sum > bank.balance) {
      Alert.alert("Қате", "Шотыңызда қаражат жеткіліксіз.");
      return;
    }

    bank.setTransfer({
      recipient,
      card: cleanCard,
      amount: sum,
      message: message.trim() || "Картаға аударым"
    });

    onNavigate("TransferFilled");
  }

  return (
    <Page title="Картаға аудару" onBack={onBack}>
      <Heading
        title="Жаңа аударым"
        subtitle="Алушының деректерін енгізіңіз."
      />

      <Card>
        <Detail label="Ақша алынатын карта" value="•••• 4589" />
        <Detail
          label="Қолжетімді баланс"
          value={`${bank.balance.toLocaleString("kk-KZ")} ₸`}
        />
      </Card>

      <Field
        label="Алушының аты-жөні"
        placeholder="Аты-жөні"
        value={recipient}
        onChangeText={setRecipient}
      />

      <Field
        label="Карта нөмірі"
        placeholder="0000 0000 0000 0000"
        value={card}
        onChangeText={setCard}
        keyboardType="number-pad"
      />

      <Field
        label="Аударым сомасы (₸)"
        placeholder="0"
        value={amount}
        onChangeText={setAmount}
        keyboardType="decimal-pad"
      />

      <Field
        label="Аударым мақсаты"
        placeholder="Мысалы: Сыйлық"
        value={message}
        onChangeText={setMessage}
      />

      <Button
        title="Аударымды жалғастыру"
        onPress={continueTransfer}
      />

      <Button
        title="Алушылар тізімі"
        secondary
        onPress={() => onNavigate("BeneficiaryDirectory")}
      />

      <Info text="Демо операция. Нақты банк картасына ақша жіберілмейді." />
    </Page>
  );
}
