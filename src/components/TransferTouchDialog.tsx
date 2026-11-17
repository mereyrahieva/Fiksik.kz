
import React from "react";
import { Text } from "react-native";
import {
  Page, Heading, Card, Button,
  Info, ScreenProps, C
} from "./EmeraldUI";

export default function TransferTouchDialog({
  onNavigate, onBack
}: ScreenProps) {
  return (
    <Page title="Биометрия" onBack={onBack}>
      <Heading title="Саусақ ізін пайдалану"
        subtitle="Бұл бөлімде саусақ ізімен растау түсіндіріледі." />

      <Card>
        <Text style={{
          fontSize: 75, color: C.green,
          textAlign: "center", marginVertical: 18
        }}>◎</Text>
        <Text style={{
          color: C.dark, textAlign: "center",
          fontSize: 16, fontWeight: "800"
        }}>Саусағыңызды сенсорға қойыңыз</Text>
      </Card>

      <Button title="Тексеру экранын ашу"
        onPress={() => onNavigate("TransferFingerprint")} />
      <Button title="SMS арқылы растау" secondary
        onPress={() => onNavigate("TransferConfirmOTP")} />
      <Info text="Бұл нақты құрылғы сенсорына қосылған функция емес." />
    </Page>
  );
}
