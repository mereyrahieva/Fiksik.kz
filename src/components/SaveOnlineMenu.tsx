
import React from "react";
import {
  View, Text, ScrollView, TouchableOpacity,
  StyleSheet, Alert
} from "react-native";

type Props = {
  onBack?: () => void;
  onNext?: () => void;
  onCreate?: () => void;
};

const services = [
  { icon: "💰", title: "Open Savings", description: "Create a savings deposit" },
  { icon: "📊", title: "My Savings", description: "View deposit information" },
  { icon: "🔄", title: "Transfer to Savings", description: "Move funds between accounts" }
];

export default function SaveOnlineMenu({
  onBack, onNext, onCreate
}: Props) {
  return (
    <View style={s.page}>
      <View style={s.header}>
        <TouchableOpacity onPress={onBack}>
          <Text style={s.back}>‹</Text>
        </TouchableOpacity>
        <Text style={s.headerTitle}>Save Online</Text>
      </View>

      <ScrollView contentContainerStyle={s.body}>
        <View style={s.banner}>
          <Text style={s.bannerIcon}>🏦</Text>
          <Text style={s.bannerTitle}>Grow Your Savings</Text>
          <Text style={s.bannerText}>
            Manage your savings with a simple mobile experience.
          </Text>
        </View>

        <Text style={s.section}>Savings Services</Text>

        {services.map((service, index) => (
          <TouchableOpacity
            key={service.title}
            style={s.item}
            onPress={() => {
              if (index === 0) (onCreate || onNext)?.();
              else if (onNext) onNext();
              else Alert.alert("Demo", service.title);
            }}
          >
            <View style={s.iconBox}>
              <Text style={s.icon}>{service.icon}</Text>
            </View>
            <View style={s.info}>
              <Text style={s.name}>{service.title}</Text>
              <Text style={s.description}>{service.description}</Text>
            </View>
            <Text style={s.arrow}>›</Text>
          </TouchableOpacity>
        ))}

        <View style={s.infoBox}>
          <Text style={s.infoTitle}>Savings Information</Text>
          <Text style={s.infoText}>
            Explore deposit products, select a savings period,
            and preview an opening request.
          </Text>
        </View>

        <TouchableOpacity
          style={s.button}
          onPress={onCreate || onNext}
        >
          <Text style={s.white}>Open Savings Account</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const s = StyleSheet.create({
  page: { flex: 1, backgroundColor: "#FFF" },
  header: {
    height: 95, backgroundColor: "#3525B5",
    flexDirection: "row", alignItems: "center", paddingHorizontal: 22
  },
  back: { color: "#FFF", fontSize: 31, marginRight: 23 },
  headerTitle: { color: "#FFF", fontSize: 20, fontWeight: "bold" },
  body: { padding: 22, paddingBottom: 50 },
  banner: {
    backgroundColor: "#F0EEFF", padding: 25,
    borderRadius: 18, alignItems: "center"
  },
  bannerIcon: { fontSize: 65 },
  bannerTitle: {
    fontSize: 23, fontWeight: "bold",
    color: "#3525B5", marginTop: 16
  },
  bannerText: {
    color: "#888", textAlign: "center",
    lineHeight: 21, marginTop: 10
  },
  section: {
    color: "#333", fontSize: 18,
    fontWeight: "bold", marginVertical: 26
  },
  item: {
    flexDirection: "row", alignItems: "center",
    paddingVertical: 17, borderBottomWidth: 1, borderColor: "#EEE"
  },
  iconBox: {
    width: 52, height: 52, backgroundColor: "#EEEAFE",
    alignItems: "center", justifyContent: "center", borderRadius: 14
  },
  icon: { fontSize: 26 },
  info: { flex: 1, marginLeft: 13 },
  name: { color: "#333", fontWeight: "bold", fontSize: 15 },
  description: { color: "#999", fontSize: 12, marginTop: 7 },
  arrow: { color: "#AAA", fontSize: 25 },
  infoBox: {
    backgroundColor: "#F7F6FC", padding: 18,
    borderRadius: 13, marginTop: 30
  },
  infoTitle: { color: "#3525B5", fontWeight: "bold" },
  infoText: { color: "#777", lineHeight: 20, marginTop: 9 },
  button: {
    backgroundColor: "#3525B5", padding: 17,
    borderRadius: 11, alignItems: "center", marginTop: 30
  },
  white: { color: "#FFF", fontWeight: "bold" }
});
