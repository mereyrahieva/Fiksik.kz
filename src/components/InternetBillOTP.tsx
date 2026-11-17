import React, { useState } from "react";
import { Alert } from "react-native";
import {
  Page, Heading, Card, Detail, Field,
  Button, Info, ScreenProps
} from "./EmeraldUI";
import { useBank } from "./BankStore";

export default function InternetBillOTP({
  onNavigate, onBack
}: ScreenProps) {
  const bank = useBank();
  const [code, setCode] = useState("");
  const [done, setDone] = useState(false);

  function confirm() {
    if (done) return;
    if (code !== "123456") {
      Alert.alert("Қате", "Код қате.");
      return;
    }
    if (!bank.completeTransfer()) {
      Alert.alert("Қате", "Баланс жеткіліксіз.");
      return;
    }
    setDone(true);
    onNavigate("InternetBillSuccess");
  }

  return (
    <Page title="SMS-код" onBack={onBack}>
      <Heading title="Төлемді растау"
        subtitle="Алты таңбалы кодты енгізіңіз." />
      <Card>
        <Detail label="Провайдер" value={bank.transfer.recipient} />
        <Detail label="Сома"
          value={`${bank.transfer.amount.toLocaleString("kk-KZ")} ₸`} />
      </Card>
      <Field label="Код" value={code}
        onChangeText={v => setCode(v.replace(/\D/g, "").slice(0, 6))}
        placeholder="000000" keyboardType="number-pad" />
      <Button title="Төлемді растау" disabled={done}
        onPress={confirm} />
      <Button title="Кодты қайта алу" secondary
        onPress={() => Alert.alert("Демо код", "123456")} />
      <Info text="Демо код: 123456. Нақты SMS жіберілмейді." />
    </Page>
  );
}