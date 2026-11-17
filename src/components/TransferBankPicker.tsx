
import React, { useState } from "react";
import {
  Page, Heading, Menu, Card, Detail,
  Button, Info, ScreenProps
} from "./EmeraldUI";

export default function TransferBankPicker({
  onNavigate, onBack
}: ScreenProps) {
  const [bank, setBank] = useState("Басқа банк");

  return (
    <Page title="Банкті таңдау" onBack={onBack}>
      <Heading title="Алушының банкі"
        subtitle="Аударым жасалатын банкті таңдаңыз." />

      {["Halyk Bank", "Kaspi Bank", "ForteBank", "Басқа банк"].map(item => (
        <Menu
          key={item}
          icon={bank === item ? "✅" : "🏦"}
          title={item}
          onPress={() => setBank(item)}
        />
      ))}

      <Card>
        <Detail label="Таңдалған банк" value={bank} />
      </Card>

      <Button title="Жалғастыру"
        onPress={() => onNavigate("TransferBankFilled")} />

      <Info text="Банк тізімі үлгі ретінде берілген. IBAN бойынша банк автоматты тексерілмейді." />
    </Page>
  );
}
