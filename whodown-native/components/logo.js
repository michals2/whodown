import React from "react";
import { StyleSheet, Text, View } from "react-native";

const logo = () =>
  <View style={styles.container}>
    <Text style={styles.title1}>who</Text>
    <Text style={styles.title2}>down</Text>
    <Text style={styles.title3}>?</Text>
  </View>;

const styles = StyleSheet.create({
  title1: {
    color: "#f7c106"
  },
  title2: {
    color: "#ff00fe"
  },
  title3: {
    color: "#6fee26"
  }
});

export default logo;
