
import React, { useState } from "react";
import {
  Page, Heading, Menu, Card, Detail,
  Button, Info, ScreenProps
} from "../EmeraldUI";
import { useBank } from "../BankStore";

const banks = [
  "Бірінші банк",
  "Екінші банк",
  "Үшінші банк"
];

export default function TransferBankPicker({
  onNavigate, onBack
}: ScreenProps) {
  const bank = useBank();
  const [selected, setSelected] = useState(banks[0]);

  function confirm() {
    bank.setTransfer({
      ...bank.transfer,
      message: `Банк: ${selected}`
    });
    onNavigate("TransferBankFilled");
  }

  return (
    <Page title="Банкті таңдау" onBack={onBack}>
      <Heading
        title="Алушының банкі"
        subtitle="Қажетті банкті таңдаңыз."
      />

      {banks.map(item => (
        <Menu
          key={item}
          icon={selected === item ? "✅" : "🏦"}
          title={item}
          subtitle={selected === item ? "Таңдалды" : "Таңдау үшін басыңыз"}
          onPress={() => setSelected(item)}
        />
      ))}

      <Card>
        <Detail label="Таңдалған банк" value={selected} />
      </Card>

      <Button title="Банкті растау" onPress={confirm} />
      <Button title="Артқа қайту" secondary onPress={onBack} />

      <Info text="Банк атаулары демонстрациялық." />
    </Page>
  );
}
