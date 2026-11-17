
import React, { useState } from "react";
import { Alert } from "react-native";
import {
  Page, Heading, Menu, Card, Detail,
  Field, Button, Info, ScreenProps
} from "./EmeraldUI";
import { useBank } from "./BankStore";

const recipients = [
  { name: "Бірінші алушы", card: "4532123412345678" },
  { name: "Екінші алушы", card: "4111111111111111" },
  { name: "Үшінші алушы", card: "5555444433332222" }
];

export default function TransferBeneficiaryFilled({
  onNavigate, onBack
}: ScreenProps) {
  const bank = useBank();
  const [selected, setSelected] = useState(0);
  const [amount, setAmount] = useState("");
  const recipient = recipients[selected];

  function proceed() {
    const sum = Number(amount.replace(",", "."));

    if (!Number.isFinite(sum) || sum <= 0 || sum > bank.balance) {
      Alert.alert("Қате", "Аударым сомасын дұрыс енгізіңіз.");
      return;
    }

    bank.setTransfer({
      recipient: recipient.name,
      card: recipient.card,
      amount: sum,
      message: "Сақталған алушыға аударым"
    });

    onNavigate("TransferFilled");
  }

  return (
    <Page title="Сақталған алушылар" onBack={onBack}>
      <Heading
        title="Алушыны таңдаңыз"
        subtitle="Бұрын сақталған алушылардың біріне ақша аударыңыз."
      />

      {recipients.map((item, index) => (
        <Menu
          key={item.card}
          icon={selected === index ? "✅" : "👤"}
          title={item.name}
          subtitle={`Карта: •••• ${item.card.slice(-4)}`}
          onPress={() => setSelected(index)}
        />
      ))}

      <Card>
        <Detail label="Таңдалған алушы" value={recipient.name} />
        <Detail label="Карта" value={`•••• ${recipient.card.slice(-4)}`} />
      </Card>

      <Field
        label="Аударым сомасы (₸)"
        value={amount}
        onChangeText={setAmount}
        placeholder="0"
        keyboardType="decimal-pad"
      />

      <Button title="Аударымды жалғастыру" onPress={proceed} />
      <Button
        title="Жаңа алушыға аудару"
        secondary
        onPress={() => onNavigate("TransferEmpty")}
      />

      <Info text="Алушылар демонстрациялық. Нақты карта шоттары қолданылмайды." />
    </Page>
  );
}
