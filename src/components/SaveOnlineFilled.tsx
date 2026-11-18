
import React from "react";
import {
  Page, Heading, Card, Detail,
  Button, Info, ScreenProps
} from "./EmeraldUI";
import { useBank } from "./BankStore";

export default function SaveOnlineFilled({
  onNavigate, onBack
}: ScreenProps) {
  const bank = useBank();

  return (
    <Page title="Жинақ мәліметтері" onBack={onBack}>
      <Heading
        title="Жинақты тексеріңіз"
        subtitle="Барлық мәлімет дұрыс екеніне көз жеткізіңіз."
      />

      <Card>
        <Detail label="Жинақ атауы" value={bank.transfer.recipient} />
        <Detail label="Шот түрі" value="Жинақ шоты" />
        <Detail label="Валюта" value="KZT" />
        <Detail
          label="Бастапқы сома"
          value={`${bank.transfer.amount.toLocaleString("kk-KZ")} ₸`}
        />
        <Detail label="Комиссия" value="0 ₸" />
      </Card>

      <Button
        title="Ақша алынатын картаны таңдау"
        onPress={() => onNavigate("SaveOnlineCardSelection")}
      />

      <Button
        title="Депозит шарттарын таңдау"
        secondary
        onPress={() => onNavigate("SaveOnlineDepositPicker")}
      />

      <Button
        title="Мәліметтерді түзету"
        secondary
        onPress={onBack}
      />

      <Info text="Көрсетілген мәліметтер демонстрациялық." />
    </Page>
  );
}
