
import React, { useState } from "react";
import { Alert } from "react-native";
import {
  Page, Heading, Field, Button,
  Card, Detail, Info, ScreenProps
} from "../EmeraldUI";
import { useBank } from "../BankStore";

export default function TransferConfirmOTP({
  onNavigate, onBack
}: ScreenProps) {
  const bank = useBank();
  const [code, setCode] = useState("");
  const [completed, setCompleted] = useState(false);

  function confirm() {
    if (completed) return;

    if (code !== "123456") {
      Alert.alert("Қате", "Растау коды дұрыс емес.");
      return;
    }

    if (!bank.completeTransfer()) {
      Alert.alert("Қате", "Соманы немесе демо балансты тексеріңіз.");
      return;
    }

    setCompleted(true);
    onNavigate("TransferSuccess");
  }

  return (
    <Page title="SMS арқылы растау" onBack={onBack}>
      <Heading
        title="Растау кодын енгізіңіз"
        subtitle="Операцияны аяқтау үшін кодты тексеріңіз."
      />

      <Card>
        <Detail
          label="Аударым сомасы"
          value={`${bank.transfer.amount.toLocaleString("kk-KZ")} ₸`}
        />
        <Detail label="Растау тәсілі" value="SMS-код" />
      </Card>

      <Field
        label="Алты таңбалы код"
        value={code}
        onChangeText={v => setCode(v.replace(/\D/g, "").slice(0, 6))}
        placeholder="000000"
        keyboardType="number-pad"
      />

      <Button
        title="Кодты қайта алу"
        secondary
        onPress={() => Alert.alert("Демо код", "123456")}
      />

      <Button
        title="Аударымды растау"
        onPress={confirm}
        disabled={completed}
      />

      <Info text="Демо растау коды: 123456. Нақты SMS жіберілмейді." />
    </Page>
  );
}
