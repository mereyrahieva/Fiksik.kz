
import React from "react";
import { Text } from "react-native";
import {
  Page, Heading, Card, Button,
  Info, ScreenProps, C
} from "../EmeraldUI";

export default function MessageThread({
  onNavigate, onBack
}: ScreenProps) {
  return (
    <Page title="Хабарламаны оқу" onBack={onBack}>
      <Heading
        title="Қауіпсіздік туралы ақпарат"
        subtitle="Банк хабарламасының үлгісі"
      />

      <Card>
        <Text style={{
          color: C.dark,
          fontWeight: "700",
          fontSize: 16,
          marginBottom: 15
        }}>
          Құрметті пайдаланушы!
        </Text>

        <Text style={{
          color: C.text,
          fontSize: 14,
          lineHeight: 24
        }}>
          Аккаунтыңыздың қауіпсіздігіне назар аударыңыз.
          {"\n\n"}
          Құпиясөзіңізді ешкімге бермеңіз.
          {"\n\n"}
          SMS-кодтарды бөтен адамдарға айтпаңыз.
          {"\n\n"}
          Белгісіз сілтемелерді ашпаңыз.
          {"\n\n"}
          Көмек қажет болса, қолдау қызметіне хабарласыңыз.
        </Text>
      </Card>

      <Button
        title="Жауап жазу"
        onPress={() => onNavigate("MessageReply")}
      />

      <Button
        title="Хабарламаларға оралу"
        secondary
        onPress={onBack}
      />

      <Info text="Бұл нақты банктен келген хабарлама емес." />
    </Page>
  );
}
