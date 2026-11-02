import React, { useState } from "react";
import {
  View, Text, TextInput, ScrollView,
  TouchableOpacity, StyleSheet, Alert
} from "react-native";

type Props = {
  onBack?: () => void;
  onElectric?: () => void;
  onInternet?: () => void;
  onNext?: () => void;
};

const billTypes = [
  { id: 1, icon: "💡", title: "Electric Bill", sub: "Pay your electricity" },
  { id: 2, icon: "🌐", title: "Internet Bill", sub: "Broadband and internet" },
  { id: 3, icon: "💧", title: "Water Bill", sub: "Water utility" },
  { id: 4, icon: "📱", title: "Mobile Bill", sub: "Mobile services" },
  { id: 5, icon: "🏠", title: "Other Bills", sub: "Other services" }
];

export default function Bills({
  onBack, onElectric, onInternet, onNext
}: Props) {
  const [query, setQuery] = useState("");

  const openBill = (id: number) => {
    if (id === 1 && onElectric) return onElectric();
    if (id === 2 && onInternet) return onInternet();
    if (onNext) return onNext();
    Alert.alert("Demo", "This billing category is not connected.");
  };

  return (
    <View style={s.page}>
      <View style={s.header}>
        <TouchableOpacity onPress={onBack}>
          <Text style={s.back}>‹</Text>
        </TouchableOpacity>
        <Text style={s.headerText}>Pay Bills</Text>
      </View>

      <ScrollView contentContainerStyle={s.content}>
        <Text style={s.title}>Bill Payments</Text>
        <Text style={s.subtitle}>Choose a service to pay your bills</Text>

        <TextInput
          style={s.search}
          placeholder="Search bill services"
          value={query} onChangeText={setQuery}
        />

        <Text style={s.section}>Available Services</Text>

        {billTypes
          .filter(item => item.title.toLowerCase().includes(query.toLowerCase()))
          .map(item => (
            <TouchableOpacity key={item.id} style={s.item}
              onPress={() => openBill(item.id)}>
              <View style={s.iconBox}>
                <Text style={s.icon}>{item.icon}</Text>
              </View>
              <View style={s.details}>
                <Text style={s.name}>{item.title}</Text>
                <Text style={s.muted}>{item.sub}</Text>
              </View>
              <Text style={s.arrow}>›</Text>
            </TouchableOpacity>
          ))}

        <View style={s.info}>
          <Text style={s.infoTitle}>Easy & Secure Payments</Text>
          <Text style={s.infoText}>
            Manage different bills from one place.
            This version uses demonstration data.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const s = StyleSheet.create({
  page: { flex: 1, backgroundColor: "#fff" },
  header: { height: 95, flexDirection: "row", alignItems: "center", backgroundColor: "#3525B5", paddingHorizontal: 22 },
  back: { color: "#fff", fontSize: 31, marginRight: 22 },
  headerText: { color: "#fff", fontSize: 20, fontWeight: "bold" },
  content: { padding: 22, paddingBottom: 45 },
  title: { color: "#3525B5", fontSize: 25, fontWeight: "bold" },
  subtitle: { color: "#888", marginTop: 9 },
  search: { backgroundColor: "#F4F4F9", height: 52, borderRadius: 11, paddingHorizontal: 15, marginTop: 26 },
  section: { fontSize: 18, fontWeight: "bold", color: "#333", marginTop: 29, marginBottom: 14 },
  item: { flexDirection: "row", alignItems: "center", paddingVertical: 16, borderBottomWidth: 1, borderColor: "#eee" },
  iconBox: { width: 51, height: 51, backgroundColor: "#F0EEFF", borderRadius: 13, alignItems: "center", justifyContent: "center" },
  icon: { fontSize: 25 },
  details: { flex: 1, marginLeft: 14 },
  name: { color: "#333", fontSize: 15, fontWeight: "bold" },
  muted: { fontSize: 12, color: "#999", marginTop: 6 },
  arrow: { color: "#aaa", fontSize: 25 },
  info: { padding: 18, backgroundColor: "#F5F3FF", borderRadius: 13, marginTop: 30 },
  infoTitle: { color: "#3525B5", fontWeight: "bold" },
  infoText: { color: "#888", lineHeight: 20, marginTop: 9, fontSize: 12 }
});