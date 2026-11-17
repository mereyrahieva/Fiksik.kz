import React, { useState } from "react";
import { Text, StyleSheet } from "react-native";
import {
  Page, Heading, Button, Card, Detail,
  Info, ScreenProps, C
} from "../EmeraldUI";

export default function MobileRechargeTouch({
  onNavigate, onBack
}: ScreenProps) {
  const [checked, setChecked] = useState(false);

  return (
    <Page title="Саусақ ізі" onBack={onBack}>
      <Heading
        title="Саусақ ізін тексеру"
        subtitle="Биометриялық интерфейстің демо нұсқасы"
      />

      <Text style={s.fingerprint}>◎</Text>

      <Card>
        <Detail label="Тексеру әдісі" value="Саусақ ізі" />
        <Detail label="Мәртебе"
          value={checked ? "Демо аяқталды" : "Күтілуде"} />
      </Card>

      <Button title="Демо тексеруді бастау"
        onPress={() => setChecked(true)} />

      <Button title="SMS-код арқылы растау"
        onPress={() => onNavigate("MobileRechargeOTP")} />

      <Button title="Артқа қайту" secondary onPress={onBack} />

      <Info text="Құрылғының биометриялық сенсоры қолданылмайды. Төлемді растау үшін демо код қажет." />
    </Page>
  );
}

const s = StyleSheet.create({
  fingerprint: {
    fontSize: 110, color: C.green,
    textAlign: "center", marginVertical: 30
  }
});