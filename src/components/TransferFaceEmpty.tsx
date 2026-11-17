
import React from "react";
import {
  Page, Heading, Card, Detail,
  Button, Info, ScreenProps
} from "../EmeraldUI";

export default function TransferFaceEmpty({
  onNavigate, onBack
}: ScreenProps) {
  return (
    <Page title="Бет-әлпетті тану" onBack={onBack}>
      <Heading
        title="Бет-әлпетті тексеру"
        subtitle="Биометриялық тексерудің үлгі интерфейсі"
      />

      <Card>
        <Detail label="Тексеру тәсілі" value="Бет-әлпетті тану" />
        <Detail label="Мәртебе" value="Дайындық" />
      </Card>

      <Button
        title="Тексеруге дайындалу"
        onPress={() => onNavigate("TransferFaceReady")}
      />

      <Button
        title="SMS арқылы растау"
        secondary
        onPress={() => onNavigate("TransferConfirmOTP")}
      />

      <Info text="Камера іске қосылмайды және бет-әлпет деректері сақталмайды." />
    </Page>
  );
}
