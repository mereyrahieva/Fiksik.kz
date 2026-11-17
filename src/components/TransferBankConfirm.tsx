
import React, { useState } from "react";
import { Alert } from "react-native";
import {
  Page, Heading, Card, Detail, Field,
  Button, Info, ScreenProps
} from "./EmeraldUI";
import { useBank } from "./BankStore";

export default function TransferBankConfirm({
  onNavigate, onBack
}: ScreenProps) {
  const bank = useBank();
  const [code, setCode] = useState("");
  const [done, setDone] = useState(false);

  function confirm() {
    if (done) return;
    if (code !== "123456") {
      Alert.alert("Қате", "SMS-код қате.");
      return;
    }
    if (!bank.completeTransfer()) {
      Alert.alert("Қате", "Қаражат жеткіліксіз.");
      return;
    }
    setDone(true);
    onNavigate("TransferSuccess");
  }

  return (
    <Page title="Банк аударымын растау" onBack={onBack}>
      <Heading title="Соңғы растау"
        subtitle="Аударымды аяқтау үшін код енгізіңіз." />
      <Card>
        <Detail label="Алушы" value={bank.transfer.recipient} />
        <Detail label="Сома"
          value={`${bank.transfer.amount.toLocaleString("kk-KZ")} ₸`} />
      </Card>
      <Field label="Растау коды" value={code}
        onChangeText={v => setCode(v.replace(/\D/g, "").slice(0, 6))}
        placeholder="000000" keyboardType="number-pad" />
      <Button title="Аударымды орындау"
        disabled={done} onPress={confirm} />
      <Info text="Демо код: 123456. Нақты банкаралық аударым жасалмайды." />
    </Page>
  );
}
