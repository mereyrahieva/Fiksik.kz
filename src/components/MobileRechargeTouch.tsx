import React, { useState } from "react";
import { Text } from "react-native";
import {
  Page, Heading, Card, Detail,
  Button, Info, ScreenProps, C
} from "./EmeraldUI";

export default function MobileRechargeTouch({
  onNavigate, onBack
}: ScreenProps) {
  const [scanned, setScanned] = useState(false);

  return (
    <Page title="Саусақ ізі" onBack={onBack}>
      <Heading title="Сенсорды тексеру"
        subtitle="Биометриялық интерфейстің демо нұсқасы" />
      <Text style={{
        fontSize: 110, textAlign: "center",
        color: C.green, marginVertical: 30
      }}>◎</Text>
      <Card>
        <Detail label="Мәртебе"
          value={scanned ? "Демо аяқталды" : "Күтілуде"} />
      </Card>
      <Button title="Демо сканерлеу"
        onPress={() => setScanned(true)} />
      <Button title="SMS-кодпен растау"
        onPress={() => onNavigate("MobileRechargeOTP")} />
      <Info text="Сенсор арқылы нақты тұлға расталмайды." />
    </Page>
  );
}