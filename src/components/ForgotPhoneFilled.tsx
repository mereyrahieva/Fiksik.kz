
import React from "react";
import {
  Page, Heading, Card, Detail,
  Button, Info, ScreenProps
} from "./EmeraldUI";

export default function ForgotPhoneFilled({
  onNavigate, onBack
}: ScreenProps) {
  return (
    <Page title="Телефонды тексеру" onBack={onBack}>
      <Heading
        title="Нөмірді растау"
        subtitle="Құпиясөзді қалпына келтіру үшін тексеруден өтіңіз."
      />

      <Card>
        <Detail label="Тексеру түрі" value="SMS-код" />
        <Detail label="Код ұзындығы" value="6 сан" />
        <Detail label="Тексеру режимі" value="Демо" />
      </Card>

      <Button
        title="Код енгізу"
        onPress={() => onNavigate("ForgotCodeEmpty")}
      />

      <Button
        title="Телефонды өзгерту"
        secondary
        onPress={() => onNavigate("ForgotPhoneEmpty")}
      />

      <Info text="Келесі экрандағы демонстрациялық код: 123456." />
    </Page>
  );
}
