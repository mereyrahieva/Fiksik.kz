
import React, { useState } from "react";
import { ActivityIndicator, Text } from "react-native";
import {
  Page, Heading, Card, Detail,
  Button, Info, ScreenProps, C
} from "./EmeraldUI";

export default function TransferFaceProcessing({
  onNavigate, onBack
}: ScreenProps) {
  const [finished, setFinished] = useState(false);

  return (
    <Page title="Биометрия нәтижесі" onBack={onBack}>
      <Heading title="Бетті тану"
        subtitle="Демо тексеру барысы" />

      <Card>
        {!finished ? (
          <ActivityIndicator size="large" color={C.green} />
        ) : (
          <Text style={{
            fontSize: 55, textAlign: "center", color: C.green
          }}>✓</Text>
        )}
        <Detail label="Мәртебе"
          value={finished ? "Демо аяқталды" : "Тексеруге дайын"} />
      </Card>

      <Button title="Демо тексеруді аяқтау"
        onPress={() => setFinished(true)} />
      <Button title="SMS арқылы аударымды растау"
        onPress={() => onNavigate("TransferConfirmOTP")} />
      <Info text="Демо тану нәтижесі нақты пайдаланушыны растамайды." />
    </Page>
  );
}
