
import React, { useState } from "react";
import { Alert } from "react-native";
import {
  Page, Heading, Card, Detail, Field,
  Button, Info, ScreenProps
} from "./EmeraldUI";
import { useBank } from "./BankStore";

export default function TransferConfirmOTP({
  onNavigate, onBack
}: ScreenProps) {
  const bank = useBank();
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);

  function confirm() {
    if (loading) return;
    if (code !== "123456") {
      Alert.alert("Қате", "Растау коды қате.");
      return;
    }
    setLoading(true);
    if (bank.completeTransfer()) {
      onNavigate("TransferSuccess");
    } else {
      setLoading(false);
      Alert.alert("Қате", "Аударым орындалмады. Балансты тексеріңіз.");
    }
  }

  return (
    <Page title="SMS растау" onBack={onBack}>
      <Heading title="Аударымды растаңыз"
        subtitle="Қауіпсіздік кодын енгізіңіз." />
      <Card>
        <Detail label="Алушы" value={bank.transfer.recipient} />
        <Detail label="Сома"
          value={`${bank.transfer.amount.toLocaleString("kk-KZ")} ₸`} />
      </Card>
      <Field label="SMS-код" placeholder="000000"
        value={code}
        onChangeText={v => setCode(v.replace(/\D/g, "").slice(0, 6))}
        keyboardType="number-pad" />
      <Button title="Аударымды орындау"
        disabled={loading} onPress={confirm} />
      <Button title="Кодты қайта алу" secondary
        onPress={() => Alert.alert("Демо код", "123456")} />
      <Info text="Демо код: 123456. Нақты SMS келмейді." />
    </Page>
  );
}
