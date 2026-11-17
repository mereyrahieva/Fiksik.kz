import React, { useState } from "react";
import { Alert } from "react-native";
import {
  Page, Heading, Card, Detail, Check,
  Button, Info, ScreenProps
} from "./EmeraldUI";
import { useBank } from "./BankStore";

export default function WithdrawFilled({
  onNavigate, onBack
}: ScreenProps) {
  const bank = useBank();
  const [accepted, setAccepted] = useState(false);
  const [done, setDone] = useState(false);

  function confirm() {
    if (done) return;
    if (!accepted) {
      Alert.alert("Ескерту", "Шарттарды қабылдаңыз.");
      return;
    }
    if (!bank.completeTransfer()) {
      Alert.alert("Қате", "Баланс жеткіліксіз.");
      return;
    }
    setDone(true);
    onNavigate("WithdrawSuccess");
  }

  return (
    <Page title="Қаражат алуды растау" onBack={onBack}>
      <Heading title="Операцияны растаңыз"
        subtitle="Соманы тексеріңіз." />
      <Card>
        <Detail label="Карта" value="•••• 4589" />
        <Detail label="Сома"
          value={`${bank.transfer.amount.toLocaleString("kk-KZ")} ₸`} />
        <Detail label="Комиссия" value="0 ₸" />
      </Card>
      <Check title="Демо операцияны растаймын"
        value={accepted}
        onPress={() => setAccepted(!accepted)} />
      <Button title="Растау" disabled={done} onPress={confirm} />
      <Button title="Соманы өзгерту" secondary onPress={onBack} />
      <Info text="Қаражат тек демо баланстан шегеріледі." />
    </Page>
  );
}