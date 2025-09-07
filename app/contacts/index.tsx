import ListComponent from "@/components/ListComponent";
import { SearchInList } from "@/components/SearchInList";
import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import GuestList from "../event-details/guestList";

const Index = () => {
  return (
    <ScrollView style={{ flex: 1, padding: 16 }}>
      <SafeAreaView>
        <Text style={{ fontSize: 24, fontWeight: "bold" }}>My Contacts</Text>

        <SearchInList />
        <View
          style={{
            backgroundColor: "#fff",
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 6,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
            borderRadius: 16,
            marginTop: 16,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              backgroundColor: "#000000ff",
              height: 200,
              padding: 20,
              borderRadius: 16,
            }}
          >
            <View style={{ flex: 1, gap: 4 }}>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: "regular",
                  color: "#ffffffff",
                }}
              >
                Invites ID
              </Text>
              <Text
                style={{
                  fontSize: 34,
                  fontWeight: "bold",
                  color: "#ffffffff",
                  marginVertical: 12,
                }}
              >
                123 456 789
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: "regular",
                  color: "#fff",
                }}
              >
                Sahibdeep Singh
              </Text>
            </View>

            <View
              style={{
                backgroundColor: "#f88400ff",
                borderRadius: "50%",
                height: 100,
                width: 100,
                justifyContent: "center",
                alignItems: "center",
              }}
            ></View>
          </View>
          <View style={{ padding: 20 }}>
            <Text style={{ fontSize: 16, fontWeight: "medium", color: "#000" }}>
              3 Hosted | 2 Joined
            </Text>
          </View>
        </View>
        <ListComponent
          displayData={[]}
          maxHeight={"100%"}
          listTitle=""
          Component={GuestList}
        />
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({});

export default Index;
