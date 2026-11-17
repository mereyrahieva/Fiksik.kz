
import React, { useState } from "react";
import {
  View, Text, ScrollView,
  TouchableOpacity, StyleSheet, Alert
} from "react-native";
import {
  C, Menu, ScreenProps, common
} from "./EmeraldUI";
import { useBank } from "./BankStore";

const actions = [
  { icon: "⇄", title: "Ақша аудару", route: "TransferEmpty" },
  { icon: "💱", title: "Айырбастау", route: "ExchangeEmpty" },
  { icon: "🏦", title: "Шоттар", route: "Accounts" },
  { icon: "💳", title: "Карталар", route: "Cards" }
];

const transactions = [
  { title: "Дүкендегі төлем", date: "Бүгін", amount: "-8 500 ₸" },
  { title: "Шотты толықтыру", date: "Кеше", amount: "+50 000 ₸" },
  { title: "Интернет төлемі", date: "12 қараша", amount: "-12 500 ₸" }
];

export default function Home({
  onNavigate
}: ScreenProps) {
  const bank = useBank();
  const [visible, setVisible] = useState(true);

  return (
    <View style={s.page}>
      <ScrollView contentContainerStyle={s.content}>
        <View style={s.top}>
          <View style={common.row}>
            <Text style={s.brand}>✦ Fiksik Bank</Text>
            <TouchableOpacity onPress={() => onNavigate("Messages")}>
              <Text style={s.bell}>♧</Text>
            </TouchableOpacity>
          </View>

          <Text style={s.greeting}>Қайырлы күн, {bank.name}!</Text>
          <Text style={s.welcome}>Қаржыңызды оңай басқарыңыз</Text>

          <View style={s.bankCard}>
            <View style={common.row}>
              <Text style={s.cardLabel}>Жалпы баланс</Text>
              <TouchableOpacity onPress={() => setVisible(!visible)}>
                <Text style={s.show}>{visible ? "Жасыру" : "Көрсету"}</Text>
              </TouchableOpacity>
            </View>

            <Text style={s.balance}>
              {visible
                ? `${bank.balance.toLocaleString("kk-KZ")} ₸`
                : "•••••• ₸"}
            </Text>

            <View style={common.row}>
              <Text style={s.cardLabel}>•••• •••• •••• 4589</Text>
              <Text style={s.visa}>VISA</Text>
            </View>
          </View>
        </View>

        <View style={s.body}>
          <Text style={common.section}>Жылдам қызметтер</Text>

          <View style={s.actions}>
            {actions.map(item => (
              <TouchableOpacity
                key={item.title}
                style={s.action}
                onPress={() => onNavigate(item.route)}
              >
                <View style={s.actionCircle}>
                  <Text style={s.actionIcon}>{item.icon}</Text>
                </View>
                <Text style={s.actionTitle}>{item.title}</Text>
              </TouchableOpacity>
            ))}
          </View>

          <Text style={common.section}>Қызметтер</Text>

          <Menu icon="📱" title="Ұялы байланыс"
            onPress={() => onNavigate("MobileTopUp")} />
          <Menu icon="🧾" title="Коммуналдық төлемдер"
            onPress={() => onNavigate("Bills")} />
          <Menu icon="💰" title="Депозиттер"
            onPress={() => onNavigate("Deposits")} />
          <Menu icon="📈" title="Валюта бағамдары"
            onPress={() => onNavigate("ExchangeRate")} />
          <Menu icon="⚙️" title="Баптаулар"
            onPress={() => onNavigate("Settings")} />

          <View style={common.row}>
            <Text style={common.section}>Соңғы операциялар</Text>
            <TouchableOpacity
              onPress={() => onNavigate("TransactionReportList")}
            >
              <Text style={common.link}>Барлығы</Text>
            </TouchableOpacity>
          </View>

          {transactions.map(item => (
            <TouchableOpacity
              style={s.transaction}
              key={item.title}
              onPress={() => Alert.alert(
                item.title,
                `${item.date}\n${item.amount}\n\nДемо операция`
              )}
            >
              <View style={s.txIcon}>
                <Text style={{ color: C.green, fontSize: 20 }}>⇄</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={s.txTitle}>{item.title}</Text>
                <Text style={s.txDate}>{item.date}</Text>
              </View>
              <Text style={s.txAmount}>{item.amount}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      <View style={s.bottomNav}>
        {[
          { icon: "⌂", title: "Басты бет", route: "Home" },
          { icon: "⇄", title: "Аударым", route: "TransferEmpty" },
          { icon: "▣", title: "Карталар", route: "Cards" },
          { icon: "⚙", title: "Баптаулар", route: "Settings" }
        ].map((item, index) => (
          <TouchableOpacity
            key={item.title}
            style={s.navItem}
            onPress={() => onNavigate(item.route)}
          >
            <Text style={[
              s.navIcon,
              index === 0 && { color: C.green }
            ]}>
              {item.icon}
            </Text>
            <Text style={[
              s.navText,
              index === 0 && { color: C.green }
            ]}>
              {item.title}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const s = StyleSheet.create({
  page: { flex: 1, backgroundColor: C.bg },
  content: { paddingBottom: 35 },
  top: {
    backgroundColor: C.dark,
    paddingHorizontal: 21,
    paddingTop: 30,
    paddingBottom: 28,
    borderBottomLeftRadius: 27,
    borderBottomRightRadius: 27
  },
  brand: { color: "#FFF", fontSize: 20, fontWeight: "800" },
  bell: { color: "#FFF", fontSize: 29 },
  greeting: { color: "#A7F3D0", marginTop: 27, fontSize: 13 },
  welcome: {
    color: "#FFF", fontSize: 22,
    fontWeight: "800", marginTop: 7
  },
  bankCard: {
    backgroundColor: C.green,
    padding: 21, borderRadius: 20,
    marginTop: 24, minHeight: 170,
    justifyContent: "space-between"
  },
  cardLabel: { color: "#D1FAE5", fontSize: 12 },
  show: { color: "#FFF", fontSize: 12, fontWeight: "700" },
  balance: {
    color: "#FFF", fontSize: 29,
    fontWeight: "800", marginVertical: 17
  },
  visa: { color: "#FFF", fontSize: 19, fontWeight: "800" },
  body: { paddingHorizontal: 20 },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  action: { width: "24%", alignItems: "center" },
  actionCircle: {
    width: 59, height: 59,
    borderRadius: 17, backgroundColor: C.light,
    justifyContent: "center", alignItems: "center"
  },
  actionIcon: { color: C.green, fontSize: 27 },
  actionTitle: {
    color: C.text, fontSize: 11,
    marginTop: 9, textAlign: "center"
  },
  transaction: {
    flexDirection: "row", alignItems: "center",
    backgroundColor: C.white, padding: 13,
    marginBottom: 9, borderRadius: 14
  },
  txIcon: {
    width: 42, height: 42, borderRadius: 12,
    backgroundColor: C.light, alignItems: "center",
    justifyContent: "center", marginRight: 12
  },
  txTitle: { color: C.text, fontWeight: "700", fontSize: 13 },
  txDate: { color: C.muted, fontSize: 11, marginTop: 5 },
  txAmount: { color: C.dark, fontWeight: "700", fontSize: 12 },
  bottomNav: {
    backgroundColor: C.white,
    flexDirection: "row",
    paddingTop: 10, paddingBottom: 15,
    borderTopWidth: 1, borderColor: C.border
  },
  navItem: { flex: 1, alignItems: "center" },
  navIcon: { fontSize: 24, color: "#91A39A" },
  navText: { fontSize: 10, color: "#91A39A", marginTop: 4 }
});
