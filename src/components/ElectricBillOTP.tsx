
import React, { useState } from "react";
import { Alert } from "react-native";
import {
  Page, Heading, Card, Detail,
  Field, Button, Info, ScreenProps
} from "./EmeraldUI";
import { useBank } from "./BankStore";

export default function ElectricBillOTP({
  onNavigate, onBack
}: ScreenProps) {
  const bank = useBank();
  const [code, setCode] = useState("");
  const [completed, setCompleted] = useState(false);

  function confirmPayment() {
    if (completed) return;

    if (code !== "123456") {
      Alert.alert("Қате", "Растау коды дұрыс емес.");
      return;
    }

    if (!bank.completeTransfer()) {
      Alert.alert("Қате", "Қаражат жеткіліксіз немесе сома дұрыс емес.");
      return;
    }

    setCompleted(true);
    onNavigate("ElectricBillSuccess");
  }

  return (
    <Page title="SMS-код" onBack={onBack}>
      <Heading
        title="Электр төлемін аяқтау"
        subtitle="Алты таңбалы растау кодын енгізіңіз."
      />

      <Card>
        <Detail label="Қызмет" value="Электр энергиясы" />
        <Detail label="Компания" value={bank.transfer.recipient} />
        <Detail
          label="Сома"
          value={`${bank.transfer.amount.toLocaleString("kk-KZ")} ₸`}
        />
      </Card>

      <Field
        label="SMS-код"
        value={code}
        onChangeText={value =>
          setCode(value.replace(/\D/g, "").slice(0, 6))
        }
        placeholder="000000"
        keyboardType="number-pad"
      />

      <Button
        title="Төлемді растау"
        disabled={completed}
        onPress={confirmPayment}
      />

      <Button
        title="Кодты қайта алу"
        secondary
        onPress={() => Alert.alert("Демо код", "123456")}
      />

      <Info text="Демо код: 123456. Нақты SMS келмейді." />
    </Page>
  );
}
