
import React from "react";
import { Text } from "react-native";
import {
  Page, Heading, Card, Detail,
  Button, Info, ScreenProps, C
} from "../EmeraldUI";

export default function AppInformation({
  onNavigate, onBack
}: ScreenProps) {
  return (
    <Page title="Қосымша туралы" onBack={onBack}>
      <Heading
        title="Fiksik Bank"
        subtitle="Мобильді банкинг қосымшасы"
      />

      <Card>
        <Detail label="Қосымша" value="Fiksik Bank" />
        <Detail label="Нұсқа" value="1.0.0" />
        <Detail label="Технология" value="React Native" />
        <Detail label="Интерфейс" value="Қазақша" />
        <Detail label="Жұмыс режимі" value="Демо" />
      </Card>

      <Text style={{
        color: C.text,
        lineHeight: 24,
        marginVertical: 20
      }}>
        Fiksik Bank — банк операцияларының интерфейсін
        үйренуге арналған мобильді қосымша.
        {"\n\n"}
        Қосымшада ақша аудару, валютаны айырбастау,
        карталарды қарау, хабарламалар және қаржы
        есептері сияқты бөлімдер қарастырылған.
      </Text>

      <Button
        title="Қолдау қызметі"
        onPress={() => onNavigate("MessageReply")}
      />

      <Button
        title="Баптауларға оралу"
        secondary
        onPress={onBack}
      />

      <Info text="Fiksik Bank — оқу жобасы, нақты банк емес." />
    </Page>
  );
}
