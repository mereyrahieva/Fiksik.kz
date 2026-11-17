
import React from "react";
import { Text } from "react-native";
import {
  Page, Heading, Card, Detail, Menu,
  Button, ScreenProps, C
} from "./EmeraldUI";
import { useBank } from "./BankStore";

export default function Settings({
  onNavigate, onBack
}: ScreenProps) {
  const bank = useBank();

  return (
    <Page title="Баптаулар" onBack={onBack}>
      <Heading title="Жеке кабинет"
        subtitle="Аккаунтыңызды және қолданбаны басқарыңыз." />

      <Card dark>
        <Text style={{
          color: C.white, fontSize: 23, fontWeight: "800",
          marginBottom: 16
        }}>{bank.name}</Text>
        <Text style={{ color: C.light }}>{bank.phone}</Text>
        <Text style={{ color: C.light, marginTop: 5 }}>{bank.email}</Text>
      </Card>

      <Menu icon="👤" title="Менің шоттарым"
        onPress={() => onNavigate("Accounts")} />
      <Menu icon="🔐" title="Құпиясөзді өзгерту"
        onPress={() => onNavigate("ChangePasswordSettings")} />
      <Menu icon="🌐" title="Қолданба тілі"
        onPress={() => onNavigate("Language")} />
      <Menu icon="🔔" title="Хабарламалар"
        onPress={() => onNavigate("Messages")} />
      <Menu icon="ℹ️" title="Қосымша туралы"
        onPress={() => onNavigate("AppInformation")} />
      <Menu icon="📊" title="Қаржы есебі"
        onPress={() => onNavigate("TransactionReportChart")} />

      <Button title="Аккаунттан шығу" secondary
        onPress={() => onNavigate("SignIn")} />
    </Page>
  );
}
