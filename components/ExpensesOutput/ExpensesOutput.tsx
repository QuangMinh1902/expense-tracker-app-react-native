import { View } from "react-native";
import ExpensesList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";

export default function ExpensesOutput() {
  return (
    <View>
      <ExpensesSummary />
      <ExpensesList />
    </View>
  );
}
