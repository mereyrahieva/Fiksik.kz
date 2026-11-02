
import React, { useState } from "react";
import {
  View, Text, TextInput, ScrollView,
  TouchableOpacity, StyleSheet, Alert
} from "react-native";

type Props = { onBack?: () => void };

const branches = [
  { name: "Central Branch", address: "Almaty, Abay Avenue", hours: "09:00 – 18:00" },
  { name: "City Branch", address: "Almaty, Dostyk Avenue", hours: "09:00 – 18:00" },
  { name: "Business Center Branch", address: "Astana, Republic Avenue", hours: "10:00 – 19:00" }
];

export default function Branch({ onBack }: Props) {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <View style={s.page}>
      <View style={s.header}>
        <TouchableOpacity onPress={onBack}>
          <Text style={s.back}>‹</Text>
        </TouchableOpacity>
        <Text style={s.headerText}>Branch</Text>
      </View>
      <ScrollView contentContainerStyle={s.body}>
        <Text style={s.title}>Find a branch</Text>
        <Text style={s.subtitle}>Choose a convenient bank branch</Text>
        <TextInput
          style={s.input}
          placeholder="Search by city or address"
          value={search} onChangeText={setSearch}
        />
        <View style={s.map}>
          <Text style={s.mapIcon}>📍</Text>
          <Text style={s.mapText}>Branch locations</Text>
          <Text style={s.mapNote}>Demo directory — no live map connected</Text>
        </View>
        <Text style={s.heading}>Nearby Branches</Text>
        {branches.filter(b =>
          `${b.name} ${b.address}`.toLowerCase().includes(search.toLowerCase())
        ).map(branch => (
          <TouchableOpacity
            key={branch.name}
            style={[s.card, selected === branch.name && s.selected]}
            onPress={() => setSelected(branch.name)}
          >
            <Text style={s.name}>📍 {branch.name}</Text>
            <Text style={s.detail}>{branch.address}</Text>
            <Text style={s.detail}>Open hours: {branch.hours}</Text>
            <TouchableOpacity
              onPress={() => Alert.alert(branch.name, branch.address)}
            >
              <Text style={s.link}>View details  ›</Text>
            </TouchableOpacity>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const s = StyleSheet.create({
  page: { flex: 1, backgroundColor: "#fff" },
  header: { backgroundColor: "#3525B5", flexDirection: "row", height: 95, alignItems: "center", paddingHorizontal: 22 },
  back: { color: "#fff", fontSize: 30, marginRight: 25 },
  headerText: { color: "#fff", fontSize: 20, fontWeight: "bold" },
  body: { padding: 22, paddingBottom: 45 },
  title: { fontSize: 24, fontWeight: "bold", color: "#3525B5" },
  subtitle: { color: "#888", marginTop: 7, marginBottom: 22 },
  input: { height: 50, borderWidth: 1, borderColor: "#ddd", paddingHorizontal: 14, borderRadius: 11 },
  map: { backgroundColor: "#EDEBFA", borderRadius: 18, height: 185, alignItems: "center", justifyContent: "center", marginTop: 20 },
  mapIcon: { fontSize: 45 },
  mapText: { fontSize: 17, fontWeight: "bold", color: "#3525B5" },
  mapNote: { fontSize: 11, color: "#777", marginTop: 8 },
  heading: { fontSize: 18, fontWeight: "bold", marginTop: 27, marginBottom: 15 },
  card: { padding: 17, borderWidth: 1, borderColor: "#eee", borderRadius: 13, marginBottom: 12 },
  selected: { borderColor: "#3525B5", backgroundColor: "#F8F7FF" },
  name: { color: "#3525B5", fontWeight: "bold", fontSize: 15 },
  detail: { color: "#777", marginTop: 9, fontSize: 12 },
  link: { color: "#3525B5", marginTop: 13, fontWeight: "bold" }
});
