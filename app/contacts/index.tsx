import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text } from "react-native";

const Index = () => {
  return (
    <ScrollView style={{ flex: 1, padding: 16 }}>
      <SafeAreaView>
        <Text style={{ fontSize: 24, fontWeight: "bold" }}>My Contacts</Text>
        <Text style={{ fontSize: 14, marginTop: 8, color: "#666" }}>
          Find all your guests here and manage their details.
        </Text>
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({});

export default Index;
