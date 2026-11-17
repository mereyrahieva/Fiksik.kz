
import React from "react";
import { Text } from "react-native";
import {
  Page, Heading, Card, Button,
  Info, ScreenProps, C
} from "./EmeraldUI";

export default function TransferFaceEmpty({
  onNavigate, onBack
}: ScreenProps) {
  return (
    <Page title="Бетті тану" onBack={onBack}>
      <Heading title="Face ID"
        subtitle="Биометриялық растау экраны" />

      <Card>
        <Text style={{
          color: C.green, fontSize: 85,
          textAlign: "center", marginVertical: 18
        }}>☺</Text>
        <Text style={{
          color: C.dark, fontSize: 16,
          textAlign: "center", fontWeight: "700"
        }}>Бетіңізді камера жақтауына орналастырыңыз</Text>
      </Card>

      <Button title="Жалғастыру"
        onPress={() => onNavigate("TransferFaceReady")} />
      <Button title="Басқа әдіс" secondary
        onPress={() => onNavigate("TransferConfirmBiometric")} />
      <Info text="Нақты камера іске қосылмайды." />
    </Page>
  );
}
