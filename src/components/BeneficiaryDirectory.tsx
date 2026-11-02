
import React, { useState } from "react";
import {
  View, Text, TextInput, ScrollView,
  TouchableOpacity, StyleSheet
} from "react-native";

type Props = {
  onBack?: () => void;
  onNext?: () => void;
  onDetails?: () => void;
};

const contacts = [
  { id: 1, name: "Emma Wilson", bank: "Halyk Bank", number: "•••• 4589" },
  { id: 2, name: "Alex Johnson", bank: "Kaspi Bank", number: "•••• 7812" },
  { id: 3, name: "Sarah Miller", bank: "ForteBank", number: "•••• 9034" },
  { id: 4, name: "David Brown", bank: "Freedom Bank", number: "•••• 6741" }
];

export default function BeneficiaryDirectory({
  onBack, onNext, onDetails
}: Props) {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <View style={s.page}>
      <View style={s.header}>
        <TouchableOpacity onPress={onBack}><Text style={s.back}>‹</Text></TouchableOpacity>
        <Text style={s.headerTitle}>Beneficiary</Text>
      </View>
      <ScrollView contentContainerStyle={s.body}>
        <Text style={s.title}>My Beneficiaries</Text>
        <Text style={s.subtitle}>Manage saved recipients</Text>
        <TextInput style={s.search} placeholder="Search beneficiary"
          value={query} onChangeText={setQuery} />
        <Text style={s.section}>Saved Beneficiaries</Text>
        {contacts.filter(item =>
          `${item.name} ${item.bank}`.toLowerCase().includes(query.toLowerCase())
        ).map(item => (
          <TouchableOpacity
            key={item.id}
            style={[s.row, selected === item.id && s.active]}
            onPress={() => setSelected(item.id)}
          >
            <View style={s.avatar}>
              <Text style={s.initial}>{item.name.charAt(0)}</Text>
            </View>
            <View style={s.info}>
              <Text style={s.name}>{item.name}</Text>
              <Text style={s.muted}>{item.bank} • {item.number}</Text>
            </View>
            <TouchableOpacity onPress={onDetails || onNext}>
              <Text style={s.arrow}>›</Text>
            </TouchableOpacity>
          </TouchableOpacity>
        ))}
        <TouchableOpacity style={s.button} onPress={onNext}>
          <Text style={s.white}>+ Add Beneficiary</Text>
        </TouchableOpacity>
        <Text style={s.note}>Contacts are demonstration data.</Text>
      </ScrollView>
    </View>
  );
}

const s = StyleSheet.create({
  page: { flex: 1, backgroundColor: "#FFF" },
  header: { height: 95, backgroundColor: "#3525B5", flexDirection: "row", alignItems: "center", paddingHorizontal: 22 },
  back: { color: "#FFF", fontSize: 31, marginRight: 22 },
  headerTitle: { color: "#FFF", fontSize: 19, fontWeight: "bold" },
  body: { padding: 22, paddingBottom: 50 },
  title: { fontSize: 25, fontWeight: "bold", color: "#3525B5" },
  subtitle: { color: "#888", marginTop: 8 },
  search: { height: 52, paddingHorizontal: 15, borderRadius: 12, backgroundColor: "#F4F4FA", marginTop: 25 },
  section: { color: "#333", fontWeight: "bold", fontSize: 18, marginTop: 27, marginBottom: 13 },
  row: { flexDirection: "row", alignItems: "center", borderBottomWidth: 1, borderColor: "#EEE", paddingVertical: 15, paddingHorizontal: 6 },
  active: { backgroundColor: "#F7F5FF" },
  avatar: { width: 50, height: 50, borderRadius: 25, backgroundColor: "#EEEAFE", alignItems: "center", justifyContent: "center" },
  initial: { color: "#3525B5", fontSize: 23, fontWeight: "bold" },
  info: { flex: 1, marginLeft: 13 },
  name: { color: "#333", fontWeight: "bold" },
  muted: { color: "#999", fontSize: 12, marginTop: 6 },
  arrow: { color: "#3525B5", fontSize: 27, paddingHorizontal: 8 },
  button: { backgroundColor: "#3525B5", padding: 17, borderRadius: 11, alignItems: "center", marginTop: 29 },
  white: { color: "#FFF", fontWeight: "bold" },
  note: { color: "#AAA", textAlign: "center", marginTop: 16, fontSize: 11 }
});
