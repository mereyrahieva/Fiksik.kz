
import React, { useState } from "react";
import { Alert } from "react-native";
import {
  Page, Heading, Card, Detail, Check,
  Button, Info, ScreenProps
} from "./EmeraldUI";
import { useBank } from "./BankStore";

export default function TransferFilled({
  onNavigate, onBack
}: ScreenProps) {
  const bank = useBank();
  const [accepted, setAccepted] = useState(false);
  const [completed, setCompleted] = useState(false);
  const transfer = bank.transfer;

  function confirm() {
    if (completed) return;

    if (transfer.amount <= 0) {
      Alert.alert("Қате", "Аударым сомасы енгізілмеген.");
      return;
    }
    if (!accepted) {
      Alert.alert("Ескерту", "Демо операция шарттарын қабылдаңыз.");
      return;
    }

    Alert.alert(
      "Аударымды растау",
      `${transfer.recipient}\n${transfer.amount.toLocaleString("kk-KZ")} ₸`,
      [
        { text: "Бас тарту", style: "cancel" },
        {
          text: "Растау",
          onPress: () => {
            const success = bank.completeTransfer();

            if (!success) {
              Alert.alert("Қате", "Демо баланста қаражат жеткіліксіз.");
              return;
            }

            setCompleted(true);

            Alert.alert(
              "Демо аударым орындалды",
              "Қаражат демо баланстан шегерілді.",
              [{
                text: "Басты бетке өту",
                onPress: () => onNavigate("Home")
              }]
            );
          }
        }
      ]
    );
  }

  return (
    <Page title="Аударымды растау" onBack={onBack}>
      <Heading title="Операция мәліметтері"
        subtitle="Аударымды тексеріп, растаңыз." />

      <Card>
        <Detail label="Алушы" value={transfer.recipient || "Көрсетілмеген"} />
        <Detail label="Карта"
          value={transfer.card.length >= 4
            ? `•••• ${transfer.card.slice(-4)}`
            : "Көрсетілмеген"} />
        <Detail label="Сома"
          value={`${transfer.amount.toLocaleString("kk-KZ")} ₸`} />
        <Detail label="Комиссия" value="0 ₸" />
        <Detail label="Хабарлама" value={transfer.message || "Жоқ"} />
      </Card>

      <Check
        title="Демо аударымды растауға келісемін"
        value={accepted}
        onPress={() => setAccepted(!accepted)}
      />

      <Button
        title={completed ? "Аударым аяқталды" : "Аударымды растау"}
        onPress={confirm}
        disabled={completed}
      />

      <Button title="Мәліметтерді өзгерту" secondary onPress={onBack} />

      <Info text="Бұл операция тек демо балансқа әсер етеді. Нақты ақша жіберілмейді." />
    </Page>
  );
}
