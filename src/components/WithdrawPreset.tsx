import React, { useState } from "react";
import { Alert } from "react-native";
import {
  Page, Heading, Menu, Card, Detail,
  Button, Info, ScreenProps
} from "../EmeraldUI";
import { useBank } from "../BankStore";

const amounts = [5000, 10000, 20000, 50000, 100000];

export default function WithdrawPreset({
  onNavigate, onBack
}: ScreenProps) {
  const bank = useBank();
  const [selected, setSelected] = useState(10000);

  function proceed() {
    if (selected > bank.balance) {
      Alert.alert("Қате", "Баланс жеткіліксіз.");
      return;
    }
    bank.setTransfer({
      recipient: "Қаражат алу",
      card: "•••• 4589",
      amount: selected,
      message: "Дайын сомамен қаражат алу"
    });
    onNavigate("WithdrawFilled");
  }

  return (
    <Page title="Қаражат сомасы" onBack={onBack}>
      <Heading title="Қажетті соманы таңдаңыз"
        subtitle="Дайын сомалардың бірін таңдаңыз." />

      {amounts.map(amount => (
        <Menu
          key={amount}
          icon={selected === amount ? "✅" : "💵"}
          title={`${amount.toLocaleString("kk-KZ")} ₸`}
          onPress={() => setSelected(amount)}
        />
      ))}

      <Card>
        <Detail label="Таңдалған сома"
          value={`${selected.toLocaleString("kk-KZ")} ₸`} />
      </Card>

      <Button title="Жалғастыру" onPress={proceed} />
      <Button title="Өз сомамды енгізу" secondary
        onPress={() => onNavigate("WithdrawCustom")} />
      <Info text="Қаражат алу нақты банкоматпен байланыспаған." />
    </Page>
  );
}