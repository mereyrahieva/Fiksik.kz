
import React, { useState } from "react";
import { Alert } from "react-native";
import {
  Page, Heading, Card, Detail,
  Button, Info, ScreenProps
} from "../EmeraldUI";
import { useBank } from "../BankStore";

export default function TransferBankConfirm({
  onNavigate, onBack
}: ScreenProps) {
  const bank = useBank();
  const [confirmed, setConfirmed] = useState(false);

  function submit() {
    if (confirmed) return;

    Alert.alert(
      "Аударымды растау",
      "Демо баланстан көрсетілген сома шегеріледі.",
      [
        { text: "Бас тарту", style: "cancel" },
        {
          text: "Растау",
          onPress: () => {
            if (!bank.completeTransfer()) {
              Alert.alert("Қате", "Қаражат жеткіліксіз.");
              return;
            }
            setConfirmed(true);
            onNavigate("TransferSuccess");
          }
        }
      ]
    );
  }

  return (
    <Page title="Банк аударымын растау" onBack={onBack}>
      <Heading
        title="Аударымды аяқтау"
        subtitle="Соңғы мәліметтерді тексеріңіз."
      />

      <Card>
        <Detail label="Алушы" value={bank.transfer.recipient} />
        <Detail label="Банк" value={bank.transfer.message} />
        <Detail
          label="Сома"
          value={`${bank.transfer.amount.toLocaleString("kk-KZ")} ₸`}
        />
        <Detail label="Комиссия" value="0 ₸" />
      </Card>

      <Button
        title="Демо аударымды растау"
        onPress={submit}
        disabled={confirmed}
      />

      <Button
        title="Мәліметтерді өзгерту"
        secondary
        onPress={onBack}
      />

      <Info text="Ақша нақты банкке аударылмайды." />
    </Page>
  );
}
