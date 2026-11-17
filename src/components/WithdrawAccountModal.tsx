import React, { useState } from "react";
import { Alert } from "react-native";
import {
  Page, Heading, Menu, Card, Detail,
  Button, ScreenProps
} from "../EmeraldUI";
import { useBank } from "../BankStore";

export default function WithdrawAccountModal({
  onNavigate, onBack
}: ScreenProps) {
  const bank = useBank();
  const [selected, setSelected] = useState("Негізгі шот");

  return (
    <Page title="Шотты таңдау" onBack={onBack}>
      <Heading title="Қаражат алынатын шот"
        subtitle="Өзіңізге қажетті шотты таңдаңыз." />

      <Menu
        icon="💳"
        title="Негізгі шот"
        subtitle="•••• 4589"
        onPress={() => setSelected("Негізгі шот")}
      />
      <Menu
        icon="💰"
        title="Жинақ шоты"
        subtitle="Демо шот"
        onPress={() => setSelected("Жинақ шоты")}
      />

      <Card>
        <Detail label="Таңдалған шот" value={selected} />
        <Detail label="Негізгі баланс"
          value={`${bank.balance.toLocaleString("kk-KZ")} ₸`} />
      </Card>

      <Button title="Таңдау" onPress={() => {
        if (selected !== "Негізгі шот") {
          Alert.alert("Қолжетімсіз", "Жинақ шотынан қаражат алу әлі қосылмаған.");
          return;
        }
        onNavigate("WithdrawEmpty");
      }} />
      <Button title="Артқа қайту" secondary onPress={onBack} />
    </Page>
  );
}