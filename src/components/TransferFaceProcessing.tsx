
import React, { useState } from "react";
import {
  Page, Heading, Card, Detail,
  Button, Info, ScreenProps
} from "../EmeraldUI";

export default function TransferFaceProcessing({
  onNavigate, onBack
}: ScreenProps) {
  const [complete, setComplete] = useState(false);

  return (
    <Page title="Тексеру нәтижесі" onBack={onBack}>
      <Heading
        title="Биометриялық тексеру"
        subtitle="Бет-әлпетті тану кезеңі"
      />

      <Card>
        <Detail label="Тексеру тәсілі" value="Бет-әлпетті тану" />
        <Detail
          label="Нәтиже"
          value={complete ? "Демо аяқталды" : "Тексерілмеген"}
        />
      </Card>

      <Button
        title="Демо тексеруді орындау"
        onPress={() => setComplete(true)}
      />

      <Button
        title="SMS-код арқылы жалғастыру"
        onPress={() => onNavigate("TransferConfirmOTP")}
      />

      <Info text="Бұл нәтиже жеке басты растамайды. Нақты банк аударымы жасалмайды." />
    </Page>
  );
}
