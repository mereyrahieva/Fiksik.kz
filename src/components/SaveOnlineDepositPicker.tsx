
import React, { useState } from "react";
import { Alert } from "react-native";
import {
  Page, Heading, Card, Detail, Menu,
  Check, Button, Info, ScreenProps
} from "./EmeraldUI";
import { useBank } from "./BankStore";

export default function SaveOnlineDepositPicker({
  onNavigate, onBack
}: ScreenProps) {
  const bank = useBank();
  const [duration, setDuration] = useState("12 ай");
  const [accepted, setAccepted] = useState(false);
  const [done, setDone] = useState(false);

  function confirm() {
    if (done) return;

    if (!accepted) {
      Alert.alert("Ескерту", "Демо шарттарды қабылдаңыз.");
      return;
    }

    if (bank.transfer.amount <= 0) {
      Alert.alert("Қате", "Жинақ сомасын қайта енгізіңіз.");
      return;
    }

    if (!bank.completeTransfer()) {
      Alert.alert("Қате", "Қаражат жеткіліксіз.");
      return;
    }

    setDone(true);
    onNavigate("SaveOnlineSuccess");
  }

  return (
    <Page title="Депозит шарттары" onBack={onBack}>
      <Heading
        title="Жинақ мерзімі"
        subtitle="Жинақ мерзімін таңдаңыз және операцияны растаңыз."
      />

      {["3 ай", "6 ай", "12 ай", "24 ай"].map(item => (
        <Menu
          key={item}
          icon={duration === item ? "✅" : "📅"}
          title={item}
          onPress={() => setDuration(item)}
        />
      ))}

      <Card>
        <Detail label="Жинақ атауы" value={bank.transfer.recipient} />
        <Detail label="Мерзімі" value={duration} />
        <Detail
          label="Бастапқы сома"
          value={`${bank.transfer.amount.toLocaleString("kk-KZ")} ₸`}
        />
        <Detail label="Валюта" value="KZT" />
        <Detail label="Мөлшерлеме" value="Белгіленбеген" />
      </Card>

      <Check
        title="Демонстрациялық депозит шарттарын қабылдаймын"
        value={accepted}
        onPress={() => setAccepted(!accepted)}
      />

      <Button
        title="Депозитті ашуды растау"
        onPress={confirm}
        disabled={done}
      />

      <Button
        title="Артқа оралу"
        secondary
        onPress={onBack}
      />

      <Info text="Бұл операция нақты депозит ашпайды. Демо баланс өзгереді." />
    </Page>
  );
}
