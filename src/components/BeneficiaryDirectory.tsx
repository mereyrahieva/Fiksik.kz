
import React, { useState } from "react";
import {
  Page, Heading, Field,
  Menu, Button, Info, ScreenProps
} from "./EmeraldUI";

const contacts = [
  { id: 1, name: "Бірінші алушы", card: "•••• 5678" },
  { id: 2, name: "Екінші алушы", card: "•••• 9012" },
  { id: 3, name: "Үшінші алушы", card: "•••• 3456" }
];

export default function BeneficiaryDirectory({
  onNavigate, onBack
}: ScreenProps) {
  const [query, setQuery] = useState("");

  const results = contacts.filter(item =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <Page title="Алушылар тізімі" onBack={onBack}>
      <Heading
        title="Менің алушыларым"
        subtitle="Жиі ақша аударатын адамдарды таңдаңыз."
      />

      <Field
        label="Алушыны іздеу"
        value={query}
        onChangeText={setQuery}
        placeholder="Алушының аты"
      />

      {results.map(person => (
        <Menu
          key={person.id}
          icon="👤"
          title={person.name}
          subtitle={person.card}
          onPress={() => onNavigate("TransferBeneficiaryFilled")}
        />
      ))}

      {results.length === 0 && (
        <Info text="Алушы табылмады." />
      )}

      <Button
        title="Жаңа алушы қосу"
        onPress={() => onNavigate("BeneficiaryAddEmpty")}
      />

      <Button
        title="Картаға аудару"
        secondary
        onPress={() => onNavigate("TransferManualEmpty")}
      />

      <Info text="Бұл алушылар тізімі — үлгі. Жаңа алушылар тұрақты сақталмайды." />
    </Page>
  );
}
