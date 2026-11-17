
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import {
  Page, Heading, Button,
  Info, ScreenProps, C
} from "../EmeraldUI";

export default function TransferFaceReady({
  onNavigate, onBack
}: ScreenProps) {
  return (
    <Page title="Тексеруге дайындық" onBack={onBack}>
      <Heading
        title="Тексеруге дайынсыз ба?"
        subtitle="Бет-әлпетті тану экранының үлгісі"
      />

      <View style={s.preview}>
        <View style={s.circle}>
          <Text style={s.face}>🙂</Text>
        </View>
        <Text style={s.label}>Бетіңізді орналастыру аймағы</Text>
      </View>

      <Button
        title="Демо тексеруді бастау"
        onPress={() => onNavigate("TransferFaceProcessing")}
      />

      <Button title="Артқа қайту" secondary onPress={onBack} />

      <Info text="Бұл камерадан алынған сурет емес. Тек дизайн үлгісі." />
    </Page>
  );
}

const s = StyleSheet.create({
  preview: {
    backgroundColor: C.light,
    borderRadius: 20,
    padding: 30,
    alignItems: "center",
    marginVertical: 25
  },
  circle: {
    height: 210,
    width: 170,
    borderWidth: 3,
    borderColor: C.green,
    borderStyle: "dashed",
    borderRadius: 85,
    alignItems: "center",
    justifyContent: "center"
  },
  face: { fontSize: 100 },
  label: {
    color: C.dark,
    fontWeight: "600",
    marginTop: 22
  }
});
