
import React from "react";
import {
  Page, Heading, Card, Detail, Menu,
  Info, ScreenProps
} from "../EmeraldUI";
import { useBank } from "../BankStore";

export default function TransferConfirmEmpty({
  onNavigate, onBack
}: ScreenProps) {
  const bank = useBank();

  return (
    <Page title="Аударымды растау" onBack={onBack}>
      <Heading
        title="Растау әдісін таңдаңыз"
        subtitle="Аударым мәліметтерін тексеріңіз."
      />

      <Card>
        <Detail label="Алушы" value={bank.transfer.recipient || "Көрсетілмеген"} />
        <Detail
          label="Аударым сомасы"
          value={`${bank.transfer.amount.toLocaleString("kk-KZ")} ₸`}
        />
        <Detail label="Комиссия" value="0 ₸" />
      </Card>

      <Menu
        icon="✉️"
        title="SMS-код арқылы растау"
        subtitle="Алты таңбалы код енгізу"
        onPress={() => onNavigate("TransferConfirmOTP")}
      />

      <Menu
        icon="👆"
        title="Саусақ ізі"
        subtitle="Биометриялық демо"
        onPress={() => onNavigate("TransferTouchDialog")}
      />

      <Menu
        icon="🙂"
        title="Бет-әлпетті тану"
        subtitle="Биометриялық демо"
        onPress={() => onNavigate("TransferFaceEmpty")}
      />

      <Info text="Нақты ақша аударылмайды. Биометриялық тексеру демонстрациялық." />
    </Page>
  );
}
