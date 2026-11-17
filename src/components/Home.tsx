
import React, { useState } from "react";
import {
  View, Text, TouchableOpacity,
  StyleSheet, Alert
} from "react-native";
import {
  Page, Card, Menu, SectionTitle,
  QuickActions, BottomNav,
  Button, C, money, ScreenProps
} from "./EmeraldUI";
import { useBank } from "./BankStore";

export default function Home({
  onNavigate, onBack
}: ScreenProps) {
  const bank = useBank();
  const [showBalance, setShowBalance] = useState(true);

  return (
    <View style={{ flex: 1, backgroundColor: C.bg }}>
      <View style={{ flex: 1 }}>
        <Page title="Fiksik Bank">
          <View style={s.profile}>
            <View style={s.avatar}>
              <Text style={s.avatarText}>
                {bank.name.charAt(0).toUpperCase()}
              </Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={s.hello}>Қайырлы күн!</Text>
              <Text style={s.name}>{bank.name}</Text>
            </View>
            <TouchableOpacity
              onPress={() => onNavigate("Messages")}
              style={s.headerIcon}
            >
              <Text style={{ fontSize: 24 }}>🔔</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => onNavigate("Settings")}
              style={s.headerIcon}
            >
              <Text style={{ fontSize: 24 }}>⚙️</Text>
            </TouchableOpacity>
          </View>

          <View style={s.balanceCard}>
            <View style={s.cardTop}>
              <Text style={s.cardBank}>✦ FIKSIK BANK</Text>
              <Text style={s.cardType}>VISA</Text>
            </View>

            <Text style={s.balanceLabel}>Қолжетімді баланс</Text>

            <TouchableOpacity onPress={() => setShowBalance(!showBalance)}>
              <Text style={s.balance}>
                {showBalance ? money(bank.balance) : "•••••• ₸"}
              </Text>
            </TouchableOpacity>

            <View style={s.cardBottom}>
              <Text style={s.cardNumber}>
                ••••  ••••  ••••  4589
              </Text>
              <Text style={s.cardHolder}>{bank.name.toUpperCase()}</Text>
            </View>

            <View style={s.cardButtons}>
              <TouchableOpacity
                style={s.cardButton}
                onPress={() => onNavigate("Cards")}
              >
                <Text style={s.cardButtonText}>Карталарым</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={s.cardButton}
                onPress={() => onNavigate("Accounts")}
              >
                <Text style={s.cardButtonText}>Шоттарым</Text>
              </TouchableOpacity>
            </View>
          </View>

          <SectionTitle title="Жылдам әрекеттер" />

          <QuickActions items={[
            {
              icon: "↗️",
              title: "Аудару",
              onPress: () => onNavigate("TransferEmpty")
            },
            {
              icon: "💳",
              title: "Карталар",
              onPress: () => onNavigate("Cards")
            },
            {
              icon: "📱",
              title: "Телефон",
              onPress: () => onNavigate("MobileRechargeEmpty")
            },
            {
              icon: "💡",
              title: "Төлемдер",
              onPress: () => onNavigate("Bills")
            }
          ]} />

          <SectionTitle title="Қызметтер" />

          <View style={s.services}>
            <TouchableOpacity
              style={s.service}
              onPress={() => onNavigate("Deposits")}
            >
              <Text style={s.serviceEmoji}>💰</Text>
              <Text style={s.serviceTitle}>Депозит</Text>
              <Text style={s.serviceDesc}>Ақша жинақтау</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={s.service}
              onPress={() => onNavigate("CreditCardOverview")}
            >
              <Text style={s.serviceEmoji}>💳</Text>
              <Text style={s.serviceTitle}>Несие картасы</Text>
              <Text style={s.serviceDesc}>Лимит пен төлем</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={s.service}
              onPress={() => onNavigate("ExchangeRate")}
            >
              <Text style={s.serviceEmoji}>💱</Text>
              <Text style={s.serviceTitle}>Валюта</Text>
              <Text style={s.serviceDesc}>Айырбастау</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={s.service}
              onPress={() => onNavigate("Branch")}
            >
              <Text style={s.serviceEmoji}>📍</Text>
              <Text style={s.serviceTitle}>Филиалдар</Text>
              <Text style={s.serviceDesc}>Бөлімшелер</Text>
            </TouchableOpacity>
          </View>

          <View style={s.sectionRow}>
            <SectionTitle title="Соңғы операциялар" />
            <TouchableOpacity
              onPress={() => onNavigate("TransactionReportList")}
            >
              <Text style={s.link}>Барлығы ›</Text>
            </TouchableOpacity>
          </View>

          {bank.transactions.slice(0, 4).map(item => (
            <View key={item.id} style={s.transaction}>
              <View style={s.transactionIcon}>
                <Text style={{ fontSize: 22 }}>
                  {item.amount >= 0 ? "↓" : "↑"}
                </Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={s.transactionTitle}>{item.title}</Text>
                <Text style={s.transactionDate}>{item.date}</Text>
              </View>
              <Text style={[
                s.transactionAmount,
                { color: item.amount >= 0 ? C.green : C.dark }
              ]}>
                {item.amount > 0 ? "+" : ""}
                {money(item.amount)}
              </Text>
            </View>
          ))}

          <Button
            title="Операциялар тарихы"
            secondary
            onPress={() => onNavigate("TransactionReportList")}
          />

          <SectionTitle title="Басқа мүмкіндіктер" />

          <Menu icon="📊" title="Шығындар статистикасы"
            onPress={() => onNavigate("TransactionReportChart")} />
          <Menu icon="🔎" title="Іздеу"
            onPress={() => onNavigate("Search")} />
          <Menu icon="💬" title="Хабарламалар"
            onPress={() => onNavigate("Messages")} />
        </Page>
      </View>

      <BottomNav onNavigate={onNavigate} active="Home" />
    </View>
  );
}

const s = StyleSheet.create({
  profile: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 24,
    gap: 11
  },
  avatar: {
    width: 49, height: 49,
    borderRadius: 16,
    backgroundColor: C.light,
    justifyContent: "center",
    alignItems: "center"
  },
  avatarText: {
    fontSize: 24,
    fontWeight: "900",
    color: C.dark
  },
  hello: { color: C.gray, fontSize: 12 },
  name: { color: C.dark, fontSize: 19, fontWeight: "800" },
  headerIcon: { padding: 7 },
  balanceCard: {
    backgroundColor: C.dark,
    borderRadius: 25,
    padding: 23,
    marginBottom: 15
  },
  cardTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 32
  },
  cardBank: {
    color: C.white,
    fontSize: 16,
    fontWeight: "900"
  },
  cardType: {
    color: C.white,
    fontSize: 22,
    fontWeight: "900",
    fontStyle: "italic"
  },
  balanceLabel: { color: C.light, fontSize: 13 },
  balance: {
    color: C.white,
    fontSize: 32,
    fontWeight: "900",
    marginTop: 8,
    marginBottom: 30
  },
  cardBottom: { gap: 8 },
  cardNumber: {
    color: C.light,
    fontSize: 16,
    letterSpacing: 2
  },
  cardHolder: {
    color: C.white,
    fontSize: 11,
    letterSpacing: 1
  },
  cardButtons: {
    flexDirection: "row",
    gap: 10,
    marginTop: 25
  },
  cardButton: {
    flex: 1,
    borderRadius: 12,
    padding: 13,
    alignItems: "center",
    backgroundColor: "#16745A"
  },
  cardButtonText: { color: C.white, fontWeight: "800" },
  services: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: 12
  },
  service: {
    width: "48%",
    backgroundColor: C.white,
    borderRadius: 20,
    padding: 18,
    borderWidth: 1,
    borderColor: C.border
  },
  serviceEmoji: { fontSize: 30, marginBottom: 12 },
  serviceTitle: {
    fontSize: 15,
    fontWeight: "800",
    color: C.dark
  },
  serviceDesc: {
    fontSize: 12,
    color: C.gray,
    marginTop: 5
  },
  sectionRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  link: {
    color: C.green,
    fontWeight: "700"
  },
  transaction: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: C.white,
    borderRadius: 16,
    padding: 15,
    marginBottom: 10,
    gap: 12
  },
  transactionIcon: {
    backgroundColor: C.mint,
    width: 43,
    height: 43,
    borderRadius: 13,
    alignItems: "center",
    justifyContent: "center"
  },
  transactionTitle: {
    color: C.dark,
    fontWeight: "800",
    fontSize: 13
  },
  transactionDate: {
    color: C.gray,
    marginTop: 4,
    fontSize: 11
  },
  transactionAmount: {
    fontSize: 13,
    fontWeight: "800"
  }
});
