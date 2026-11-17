import React, { useState } from "react";
import { Alert } from "react-native";
import {
  Page, Heading, Field, Card, Detail,
  Button, Info, ScreenProps
} from "../EmeraldUI";
import { useBank } from "../BankStore";

export default function MobileRechargeOTP({
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
      Alert.alert("Қате", "Қаражат жеткіліксіз.");
      return;
    }

    setCompleted(true);
    onNavigate("MobileRechargeSuccess");
  }

  return (
    <Page title="SMS-код" onBack={onBack}>
      <Heading title="Төлемді растау"
        subtitle="Алты таңбалы растау кодын енгізіңіз." />

      <Card>
        <Detail label="Телефон" value={bank.transfer.recipient} />
        <Detail label="Сома"
          value={`${bank.transfer.amount.toLocaleString("kk-KZ")} ₸`} />
      </Card>

      <Field label="Растау коды"
        value={code}
        onChangeText={v => setCode(v.replace(/\D/g, "").slice(0, 6))}
        placeholder="000000"
        keyboardType="number-pad" />

      <Button title="Төлемді растау"
        onPress={confirm} disabled={completed} />
      <Button title="Кодты қайта алу"
        secondary
        onPress={() => Alert.alert("Демо код", "123456")} />

      <Info text="Демо код: 123456. Нақты SMS жіберілмейді." />
    </Page>
  );
}