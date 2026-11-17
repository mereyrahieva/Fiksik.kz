
import React, { useState } from "react";
import { Alert } from "react-native";
import {
  Page, Heading, Menu, Card, Detail,
  Field, Button, Info, ScreenProps
} from "./EmeraldUI";
import { useBank } from "./BankStore";

const recipients = [
  { name: "Бірінші алушы", card: "4111111111115678" },
  { name: "Екінші алушы", card: "4111111111119012" },
  { name: "Үшінші алушы", card: "4111111111113456" }
];

export default function TransferBeneficiaryFilled({
  onNavigate, onBack
}: ScreenProps) {
  const bank = useBank();
  const [selected, setSelected] = useState(0);
  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState("");

  function proceed() {
    const sum = Number(amount.replace(",", "."));

    if (!Number.isFinite(sum) || sum <= 0 || sum > bank.balance) {
      Alert.alert("Қате", "Аударым сомасын тексеріңіз.");
      return;
    }

    const person = recipients[selected];

    bank.setTransfer({
      recipient: person.name,
      card: person.card,
      amount: sum,
      message: message.trim() || "Сақталған алушыға аударым"
    });

    onNavigate("TransferFilled");
  }

  return (
    <Page title="Сақталған алушы" onBack={onBack}>
      <Heading
        title="Алушыны таңдаңыз"
        subtitle="Қажетті адамды таңдап, аударым жасаңыз."
      />

      {recipients.map((person, index) => (
        <Menu
          key={person.card}
          icon={selected === index ? "✅" : "👤"}
          title={person.name}
          subtitle={`•••• ${person.card.slice(-4)}`}
          onPress={() => setSelected(index)}
        />
      ))}

      <Card>
        <Detail label="Таңдалған алушы" value={recipients[selected].name} />
        <Detail
          label="Қолжетімді баланс"
          value={`${bank.balance.toLocaleString("kk-KZ")} ₸`}
        />
      </Card>

      <Field
        label="Аударым сомасы (₸)"
        value={amount}
        onChangeText={setAmount}
        placeholder="0"
        keyboardType="decimal-pad"
      />

      <Field
        label="Хабарлама"
        value={message}
        onChangeText={setMessage}
        placeholder="Аударым мақсаты"
      />

      <Button title="Жалғастыру" onPress={proceed} />

      <Info text="Алушылар үлгі ретінде берілген. Нақты ақша аударылмайды." />
    </Page>
  );
}
