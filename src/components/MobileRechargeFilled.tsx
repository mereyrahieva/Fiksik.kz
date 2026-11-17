import React from "react";
import {
  Page, Heading, Card, Detail,
  Button, Info, ScreenProps
} from "../EmeraldUI";
import { useBank } from "../BankStore";

export default function MobileRechargeFilled({
  onNavigate, onBack
}: ScreenProps) {
  const bank = useBank();

  return (
    <Page title="Төлем мәліметтері" onBack={onBack}>
      <Heading title="Төлемді тексеру"
        subtitle="Телефон нөмірін және соманы растаңыз." />

      <Card>
        <Detail label="Қызмет" value="Ұялы байланыс" />
        <Detail label="Телефон" value={bank.transfer.recipient} />
        <Detail label="Сома"
          value={`${bank.transfer.amount.toLocaleString("kk-KZ")} ₸`} />
        <Detail label="Комиссия" value="0 ₸" />
      </Card>

      <Button
        title="SMS-код арқылы растау"
        onPress={() => onNavigate("MobileRechargeOTP")}
      />
      <Button
        title="Биометриялық тексеру"
        secondary
        onPress={() => onNavigate("MobileRechargeBiometric")}
      />
      <Button title="Мәліметтерді өзгерту"
        secondary onPress={onBack} />

      <Info text="Нақты төлем жасалмайды. Растау демо режимінде орындалады." />
    </Page>
  );
}