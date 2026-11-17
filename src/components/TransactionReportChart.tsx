
import React, { useState } from "react";
import {
  View, Text, TouchableOpacity, StyleSheet
} from "react-native";
import {
  Page, Heading, Card, Detail, Button,
  Info, ScreenProps, C
} from "../EmeraldUI";

const months = [
  { name: "Қаңтар", income: 260000, expense: 140000 },
  { name: "Ақпан", income: 320000, expense: 185000 },
  { name: "Наурыз", income: 280000, expense: 165000 },
  { name: "Сәуір", income: 350000, expense: 200000 }
];

export default function TransactionReportChart({
  onNavigate, onBack
}: ScreenProps) {
  const [selected, setSelected] = useState(3);
  const current = months[selected];

  return (
    <Page title="Қаржы есебі" onBack={onBack}>
      <Heading
        title="Кірістер мен шығыстар"
        subtitle="Айлық қаржы есебінің үлгісі"
      />

      <View style={s.chart}>
        {months.map((month, index) => (
          <TouchableOpacity
            key={month.name}
            style={s.column}
            onPress={() => setSelected(index)}
          >
            <View style={s.bars}>
              <View
                style={[
                  s.bar,
                  {
                    height: month.income / 2000,
                    backgroundColor: C.green
                  }
                ]}
              />
              <View
                style={[
                  s.bar,
                  {
                    height: month.expense / 2000,
                    backgroundColor: "#A7F3D0"
                  }
                ]}
              />
            </View>

            <Text style={[
              s.month,
              selected === index && { color: C.dark, fontWeight: "700" }
            ]}>
              {month.name.slice(0, 3)}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={s.legend}>
        <Text style={{ color: C.green }}>● Кіріс</Text>
        <Text style={{ color: C.dark }}>● Шығыс</Text>
      </View>

      <Card>
        <Detail label="Ай" value={current.name} />
        <Detail
          label="Кіріс"
          value={`${current.income.toLocaleString("kk-KZ")} ₸`}
        />
        <Detail
          label="Шығыс"
          value={`${current.expense.toLocaleString("kk-KZ")} ₸`}
        />
        <Detail
          label="Айырма"
          value={`${(current.income - current.expense).toLocaleString("kk-KZ")} ₸`}
        />
      </Card>

      <Button
        title="Операциялар тізімі"
        onPress={() => onNavigate("TransactionReportList")}
      />

      <Info text="Диаграмма үлгі деректер негізінде жасалған." />
    </Page>
  );
}

const s = StyleSheet.create({
  chart: {
    height: 235,
    backgroundColor: "#FFFFFF",
    borderRadius: 17,
    padding: 15,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "flex-end"
  },
  column: { flex: 1, alignItems: "center" },
  bars: {
    height: 185,
    flexDirection: "row",
    alignItems: "flex-end",
    gap: 5
  },
  bar: {
    width: 18,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6
  },
  month: {
    color: C.muted,
    marginTop: 10,
    fontSize: 12
  },
  legend: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 25,
    marginVertical: 20
  }
});
