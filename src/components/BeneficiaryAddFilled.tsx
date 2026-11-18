
import React from "react";
import { Alert } from "react-native";
import {
  Page, Heading, Card, Detail,
  Button, Info, ScreenProps
} from "./EmeraldUI";
import { useBank } from "./BankStore";

export default function BeneficiaryAddFilled({
  onNavigate, onBack
}: ScreenProps) {
  const bank = useBank();

  function confirm() {
    Alert.alert(
      "Мәліметтер тексерілді",
      "Демо алушы дайын. Тұрақты сақтау әзірге қосылмаған.",
      [{
        text: "Жалғастыру",
        onPress: () => onNavigate("BeneficiaryDetails")
      }]
    );
  }

  return (
    <Page title="Алушыны растау" onBack={onBack}>
      <Heading
        title="Мәліметтерді тексеріңіз"
        subtitle="Алушы туралы ақпарат"
      />

      <Card>
        <Detail label="Алушы" value={bank.transfer.recipient} />
        <Detail
          label="Карта"
          value={`•••• ${bank.transfer.card.slice(-4)}`}
        />
        <Detail
          label="Телефон"
          value={bank.transfer.message || "Көрсетілмеген"}
        />
      </Card>

      <Button title="Алушыны растау" onPress={confirm} />

      <Button
        title="Мәліметтерді өзгерту"
        secondary
        onPress={onBack}
      />

      <Info text="Алушы туралы мәліметтер тек демо режимге арналған." />
    </Page>
  );
}
