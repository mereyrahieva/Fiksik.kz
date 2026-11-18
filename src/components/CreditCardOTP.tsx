
import React, { useState } from "react";
import { Alert } from "react-native";
import {
  Page, Heading, Card, Detail,
  Field, Button, Info, ScreenProps
} from "./EmeraldUI";
import { useBank } from "./BankStore";

export default function CreditCardOTP({
  onNavigate, onBack
}: ScreenProps) {
  const bank = useBank();
  const [code, setCode] = useState("");
  const [done, setDone] = useState(false);

  function confirmPayment() {
    if (done) return;

    if (code !== "123456") {
      Alert.alert("Қате", "Растау коды дұрыс емес.");
      return;
    }

    if (!bank.completeTransfer()) {
      Alert.alert("Қате", "Төлемді орындау мүмкін болмады.");
      return;
    }

    setDone(true);
    onNavigate("CreditCardSuccess");
  }

  return (
    <Page title="Төлемді растау" onBack={onBack}>
      <Heading
        title="SMS-код енгізу"
        subtitle="Несие төлемін растаңыз."
      />

      <Card>
        <Detail label="Қызмет" value="Несие төлемі" />
        <Detail label="Несие картасы" value="•••• 8822" />
        <Detail
          label="Төлем сомасы"
          value={`${bank.transfer.amount.toLocaleString("kk-KZ")} ₸`}
        />
      </Card>

      <Field
        label="Растау коды"
        value={code}
        onChangeText={v => setCode(v.replace(/\D/g, "").slice(0, 6))}
        placeholder="000000"
        keyboardType="number-pad"
      />

      <Button
        title="Төлемді растау"
        disabled={done}
        onPress={confirmPayment}
      />

      <Button
        title="Кодты қайта алу"
        secondary
        onPress={() => Alert.alert("Демо код", "123456")}
      />

      <Info text="Демонстрациялық код: 123456. Нақты SMS жіберілмейді." />
    </Page>
  );
}
