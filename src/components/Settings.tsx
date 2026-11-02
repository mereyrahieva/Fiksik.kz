
import React, { useState } from "react";
import {
  View, Text, ScrollView, TouchableOpacity,
  Switch, StyleSheet, Alert
} from "react-native";

type Props = {
  onBack?: () => void;
  onAppInfo?: () => void;
  onChangePassword?: () => void;
  onNext?: () => void;
};

export default function Settings({
  onBack, onAppInfo, onChangePassword, onNext
}: Props) {
  const [notifications, setNotifications] = useState(true);
  const [biometrics, setBiometrics] = useState(false);

  const settings = [
    { title: "Account Information", icon: "👤", action: onAppInfo },
    { title: "Change Password", icon: "🔒", action: onChangePassword },
    { title: "Language", icon: "🌐", action: onNext },
    { title: "Help & Support", icon: "💬", action: () => Alert.alert("Support", "Demo help section") }
  ];

  return (
    <View style={s.page}>
      <View style={s.header}>
        <TouchableOpacity onPress={onBack}><Text style={s.back}>‹</Text></TouchableOpacity>
        <Text style={s.heading}>Settings</Text>
      </View>
      <ScrollView contentContainerStyle={s.body}>
        <View style={s.profile}>
          <View style={s.avatar}><Text style={s.avatarText}>JS</Text></View>
          <View>
            <Text style={s.profileName}>John Smith</Text>
            <Text style={s.muted}>Demo banking account</Text>
          </View>
        </View>
        <Text style={s.section}>General Settings</Text>
        {settings.map(item => (
          <TouchableOpacity key={item.title} style={s.row} onPress={item.action}>
            <Text style={s.icon}>{item.icon}</Text>
            <Text style={s.itemTitle}>{item.title}</Text>
            <Text style={s.arrow}>›</Text>
          </TouchableOpacity>
        ))}
        <Text style={s.section}>Security & Notifications</Text>
        <View style={s.row}>
          <Text style={s.icon}>🔔</Text>
          <Text style={s.itemTitle}>Push Notifications</Text>
          <Switch value={notifications} onValueChange={setNotifications} trackColor={{ true: "#9B92E9" }} />
        </View>
        <View style={s.row}>
          <Text style={s.icon}>◎</Text>
          <Text style={s.itemTitle}>Biometric Login (demo)</Text>
          <Switch value={biometrics} onValueChange={setBiometrics} trackColor={{ true: "#9B92E9" }} />
        </View>
        <TouchableOpacity style={s.logout} onPress={() => Alert.alert("Demo", "Log out action")}>
          <Text style={s.logoutText}>Log out</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const s = StyleSheet.create({
  page: { flex: 1, backgroundColor: "#fff" },
  header: { height: 95, backgroundColor: "#3525B5", flexDirection: "row", alignItems: "center", paddingHorizontal: 23 },
  back: { color: "#fff", fontSize: 31, marginRight: 24 },
  heading: { color: "#fff", fontSize: 20, fontWeight: "bold" },
  body: { padding: 22, paddingBottom: 45 },
  profile: { backgroundColor: "#F3F1FF", borderRadius: 16, padding: 20, flexDirection: "row", alignItems: "center" },
  avatar: { width: 62, height: 62, borderRadius: 31, backgroundColor: "#3525B5", alignItems: "center", justifyContent: "center", marginRight: 15 },
  avatarText: { color: "#fff", fontSize: 21, fontWeight: "bold" },
  profileName: { color: "#3525B5", fontSize: 18, fontWeight: "bold" },
  muted: { color: "#888", fontSize: 12, marginTop: 5 },
  section: { fontSize: 17, fontWeight: "bold", color: "#333", marginTop: 28, marginBottom: 12 },
  row: { minHeight: 65, flexDirection: "row", alignItems: "center", borderBottomWidth: 1, borderColor: "#eee" },
  icon: { fontSize: 22, width: 45, color: "#3525B5" },
  itemTitle: { flex: 1, color: "#333", fontSize: 14 },
  arrow: { fontSize: 25, color: "#aaa" },
  logout: { padding: 17, alignItems: "center", marginTop: 35, borderRadius: 11, backgroundColor: "#FCEEF0" },
  logoutText: { color: "#D5435C", fontWeight: "bold" }
});
