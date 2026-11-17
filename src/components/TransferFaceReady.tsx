
import React from "react";
import {
  Page, Heading, Card, Detail,
  Button, Info, ScreenProps
} from "./EmeraldUI";

export default function TransferFaceReady({
  onNavigate, onBack
}: ScreenProps) {
  return (
    <Page title="Бетті тану" onBack={onBack}>
      <Heading title="Тексеруге дайын"
        subtitle="Демо тексеруді бастауға болады." />

      <Card>
        <Detail label="Әдіс" value="Бетті тану" />
        <Detail label="Камера" value="Демо кескін" />
        <Detail label="Мәртебе" value="Дайын" />
      </Card>

      <Button title="Демо тексеруді бастау"
        onPress={() => onNavigate("TransferFaceProcessing")} />
      <Button title="SMS-кодты таңдау" secondary
        onPress={() => onNavigate("TransferConfirmOTP")} />

      <Info text="Құрылғының нақты камерасы пайдаланылмайды." />
    </Page>
  );
}
