
import React from "react";
import { Text } from "react-native";
import {
  Page, Heading, Card, Detail,
  Button, ScreenProps, C
} from "./EmeraldUI";

export default function MessageThread({
  onNavigate, onBack
}: ScreenProps) {
  return (
    <Page title="Хабарлама" onBack={onBack}>
      <Heading title="Fiksik Bank қолдау қызметі"
        subtitle="Ақпараттық хабарламалар" />
      <Card>
        <Detail label="Жіберуші" value="Fiksik Bank" />
        <Detail label="Түрі" value="Жүйелік хабарлама" />
      </Card>
      <Card>
        <Text style={{ color: C.dark, lineHeight: 23 }}>
          Сәлеметсіз бе! Fiksik Bank мобильді қосымшасының
          демонстрациялық нұсқасына қош келдіңіз.
          Мұнда карталарды, төлемдерді және аударымдарды көре аласыз.
        </Text>
      </Card>
      <Button title="Жауап жазу"
        onPress={() => onNavigate("MessageReply")} />
      <Button title="Барлық хабарламалар" secondary
        onPress={() => onNavigate("Messages")} />
    </Page>
  );
}
