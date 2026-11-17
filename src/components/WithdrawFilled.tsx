import React, { useState } from "react";
import { Alert } from "react-native";
import {
  Page, Heading, Card, Detail, Check,
  Button, Info, ScreenProps
} from "../EmeraldUI";
import { useBank } from "../BankStore";

export default function WithdrawFilled({
  onNavigate, onBack
}: ScreenProps) {
  const bank = useBank();
  const [accepted, setAccepted] = useState(false);
  const [completed, setCompleted] = useState(false);

  function confirm() {
    if (completed) return;
    if (!accepted) {
      Alert.alert("Ескерту", "Операция шарттарын қабылдаңыз.");
      return;
    }
    if (!bank.completeTransfer()) {
      Alert.alert("Қате", "Қаражат жеткіліксіз.");
      return;
    }
    setCompleted(true);
    onNavigate("WithdrawSuccess");
  }

  return (
    <Page title="Қаражат алуды растау" onBack={onBack}>
      <Heading title="Операцияны тексеру"
        subtitle="Соманы растаңыз." />

      <Card>
        <Detail label="Шот" value="•••• 4589" />
        <Detail label="Сома"
          value={`${bank.transfer.amount.toLocaleString("kk-KZ")} ₸`} />
        <Detail label="Комиссия" value="0 ₸" />
      </Card>

      <Check
        title="Демо операцияны растауға келісемін"
        value={accepted}
        onPress={() => setAccepted(!accepted)}
      />

      <Button title="Қаражат алуды растау"
        onPress={confirm} disabled={completed} />
      <Button title="Мәліметтерді өзгерту"
        secondary onPress={onBack} />

      <Info text="Сома демо баланстан шегеріледі. Нақты қолма-қол ақша берілмейді." />
    </Page>
  );
}