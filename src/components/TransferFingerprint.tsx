
import React, { useState } from "react";
import { Text } from "react-native";
import {
  Page, Heading, Card, Detail, Button,
  Info, ScreenProps, C
} from "./EmeraldUI";

export default function TransferFingerprint({
  onNavigate, onBack
}: ScreenProps) {
  const [scanned, setScanned] = useState(false);

  return (
    <Page title="Саусақ ізі" onBack={onBack}>
      <Heading title="Саусақ ізін тексеру"
        subtitle="Қауіпсіздік интерфейсінің демо нұсқасы" />

      <Text style={{
        fontSize: 110,
        color: C.green,
        textAlign: "center",
        marginVertical: 30
      }}>◎</Text>

      <Card>
        <Detail label="Тексеру"
          value={scanned ? "Демо аяқталды" : "Күтілуде"} />
        <Detail label="Қауіпсіздік" value="Расталмаған" />
      </Card>

      <Button title="Демо сканерлеу"
        onPress={() => setScanned(true)} />
      <Button title="SMS-код арқылы жалғастыру"
        onPress={() => onNavigate("TransferConfirmOTP")} />
      <Info text="Демо сканерлеу нақты биометриялық растау емес. Аударым SMS-код экранында аяқталады." />
    </Page>
  );
}
