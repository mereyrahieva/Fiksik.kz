import React from "react";
import {
  Page, Heading, Card, Detail,
  Button, ScreenProps
} from "./EmeraldUI";
import { useBank } from "./BankStore";

export default function MobileRechargeFilled({
  onNavigate, onBack
}: ScreenProps) {
  const bank = useBank();

  return (
    <Page title="Төлем мәліметтері" onBack={onBack}>
      <Heading title="Төлемді тексеріңіз"
        subtitle="Нөмір мен соманың дұрыстығын растаңыз." />
      <Card>
        <Detail label="Қызмет" value="Ұялы байланыс" />
        <Detail label="Телефон" value={bank.transfer.recipient} />
        <Detail label="Сома"
          value={`${bank.transfer.amount.toLocaleString("kk-KZ")} ₸`} />
        <Detail label="Комиссия" value="0 ₸" />
      </Card>
      <Button title="SMS-код арқылы растау"
        onPress={() => onNavigate("MobileRechargeOTP")} />
      <Button title="Биометрия әдістері" secondary
        onPress={() => onNavigate("MobileRechargeBiometric")} />
      <Button title="Мәліметтерді өзгерту" secondary onPress={onBack} />
    </Page>
  );
}