
import React, { useState } from "react";
import {
  View, Text, ScrollView, TouchableOpacity,
  StyleSheet, Alert
} from "react-native";

type Props = { onBack?: () => void; onNext?: () => void };

export default function BeneficiaryDetails({ onBack, onNext }: Props) {
  const [favorite, setFavorite] = useState(false);
  const [removed, setRemoved] = useState(false);

  const information = [
    ["Full Name", "Emma Wilson"],
    ["Bank", "Halyk Bank"],
    ["Account Number", "KZ12 •••• •••• 5678"],
    ["Nickname", "Emma"],
    ["Currency", "KZT"]
  ];

  function remove() {
    Alert.alert("Remove Beneficiary", "Remove this demo recipient?", [
      { text: "Cancel", style: "cancel" },
      { text: "Remove", style: "destructive", onPress: () => setRemoved(true) }
    ]);
  }

  return (
    <View style={s.page}>
      <View style={s.header}>
        <TouchableOpacity onPress={onBack}><Text style={s.back}>‹</Text></TouchableOpacity>
        <Text style={s.headerText}>Beneficiary Details</Text>
      </View>
      <ScrollView contentContainerStyle={s.body}>
        {removed ? (
          <View style={s.empty}>
            <Text style={s.emptyIcon}>✓</Text>
            <Text style={s.title}>Beneficiary Removed</Text>
            <Text style={s.muted}>Removed from demo view.</Text>
            <TouchableOpacity style={s.button} onPress={onBack}>
              <Text style={s.white}>Back</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <>
            <View style={s.profile}>
              <View style={s.avatar}><Text style={s.initial}>EW</Text></View>
              <Text style={s.title}>Emma Wilson</Text>
              <Text style={s.muted}>Saved Beneficiary</Text>
            </View>
            <View style={s.card}>
              {information.map(([label, value]) => (
                <View style={s.row} key={label}>
                  <Text style={s.label}>{label}</Text>
                  <Text style={s.value}>{value}</Text>
                </View>
              ))}
            </View>
            <TouchableOpacity style={s.favorite} onPress={() => setFavorite(!favorite)}>
              <Text style={s.favoriteText}>
                {favorite ? "★ Remove from Favorites" : "☆ Add to Favorites"}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={s.button} onPress={onNext}>
              <Text style={s.white}>Transfer Money</Text>
            </TouchableOpacity>
            <TouchableOpacity style={s.remove} onPress={remove}>
              <Text style={s.removeText}>Remove Beneficiary</Text>
            </TouchableOpacity>
          </>
        )}
      </ScrollView>
    </View>
  );
}

const s = StyleSheet.create({
  page: { flex: 1, backgroundColor: "#FFF" },
  header: { height: 95, backgroundColor: "#3525B5", flexDirection: "row", alignItems: "center", paddingHorizontal: 22 },
  back: { color: "#FFF", fontSize: 31, marginRight: 22 },
  headerText: { color: "#FFF", fontSize: 19, fontWeight: "bold" },
  body: { padding: 23, paddingBottom: 50 },
  profile: { alignItems: "center", marginVertical: 30 },
  avatar: { width: 100, height: 100, borderRadius: 50, backgroundColor: "#EEEAFE", alignItems: "center", justifyContent: "center" },
  initial: { color: "#3525B5", fontSize: 35, fontWeight: "bold" },
  title: { color: "#3525B5", fontSize: 24, fontWeight: "bold", marginTop: 17 },
  muted: { color: "#999", fontSize: 12, marginTop: 8 },
  card: { backgroundColor: "#F7F6FC", borderRadius: 14, padding: 18 },
  row: { flexDirection: "row", justifyContent: "space-between", paddingVertical: 15, borderBottomWidth: 1, borderColor: "#E7E5EF" },
  label: { flex: 1, color: "#888", fontSize: 12 },
  value: { flex: 1, color: "#333", fontWeight: "bold", textAlign: "right", fontSize: 12 },
  favorite: { padding: 17, alignItems: "center", marginTop: 22 },
  favoriteText: { color: "#3525B5", fontWeight: "bold" },
  button: { backgroundColor: "#3525B5", borderRadius: 11, padding: 17, alignItems: "center", marginTop: 15 },
  white: { color: "#FFF", fontWeight: "bold" },
  remove: { backgroundColor: "#FFF0F1", borderRadius: 11, padding: 17, alignItems: "center", marginTop: 13 },
  removeText: { color: "#D64155", fontWeight: "bold" },
  empty: { alignItems: "center", marginTop: 120 },
  emptyIcon: { fontSize: 75, color: "#28A77A" }
});
