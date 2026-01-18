import React, { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function App() {
  const [count, setCount] = useState(0);

  const increment = () => setCount((value) => value + 1);
  const reset = () => setCount(0);

  return (
    <View style={styles.container}>
      <Text style={styles.count}>{count}</Text>
      <View style={styles.buttons}>
        <Pressable onPress={increment} style={[styles.button, styles.plus]}>
          <Text style={styles.buttonText}>+</Text>
        </Pressable>
        <Pressable onPress={reset} style={[styles.button, styles.reset]}>
          <Text style={styles.buttonText}>Сброс</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffffff",
    padding: 24,
  },
  count: {
    fontSize: 64,
    fontWeight: "700",
    marginBottom: 32,
    textAlign: "center",
  },
  buttons: {
    width: "100%",
    gap: 16,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 16,
    paddingVertical: 16,
  },
  plus: {
    backgroundColor: "#1d9bf0",
  },
  reset: {
    backgroundColor: "#111827",
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "600",
  },
});
