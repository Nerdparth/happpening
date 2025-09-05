import ListComponent from "@/components/ListComponent";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

const displayData = [
  { name: "Guest 1", hasAccepted: true },
  { name: "Guest 2", hasAccepted: false },
  { name: "Guest 3", hasAccepted: true },
  { name: "Guest 4", hasAccepted: false },
  { name: "Guest 5", hasAccepted: true },
  { name: "Guest 6", hasAccepted: false },
  { name: "Guest 7", hasAccepted: false },
  { name: "Guest 8", hasAccepted: false },
];

const GuestList = () => {
  return (
    <ScrollView
      style={{ backgroundColor: "#fafafa", flex: 1, flexGrow: 1, padding: 16 }}
    >
      <SafeAreaView
        style={{
          flex: 1,
        }}
      >
        <Text style={{ fontSize: 24, fontWeight: "bold" }}>Guest List</Text>
        <Text style={{ fontSize: 16, color: "#666" }}>
          People you invited for the event will appear here.
        </Text>
        <SearchInList />
        <ListComponent
          listTitle="Invited Guests"
          Component={GuestItem}
          displayData={displayData}
        />
        <ListComponent
          listTitle="Contacts & Friends"
          Component={ContactsItem}
          displayData={displayData}
        />
      </SafeAreaView>
    </ScrollView>
  );
};

const SearchInList = () => {
  return (
    <TextInput
      placeholder="Search guests..."
      placeholderTextColor={"#999"}
      style={{
        backgroundColor: "#F2F2F7",
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8,
        padding: 8,
        paddingVertical: 14,
        color: "#000",
        marginTop: 16,
        fontSize: 16,
      }}
    />
  );
};

const GuestItem = ({
  name,
  hasAccepted = false,
}: {
  name: string;
  hasAccepted: boolean;
}) => {
  return (
    <View
      style={{
        paddingVertical: 16,
        borderBottomWidth: 1,
        borderColor: "#eee",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 18, fontWeight: "regular" }}>{name}</Text>
      <View style={{ flexDirection: "row", gap: 16 }}>
        <FontAwesome name="trash-o" size={26} color="#ff3d00" />
        {hasAccepted ? (
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 4,
              backgroundColor: "#d0ffd1ff",
              padding: 4,
              borderRadius: 24,
              paddingHorizontal: 8,
            }}
          >
            <Text style={{ color: "#119c14ff" }}>Accepted</Text>
            <FontAwesome name="check-circle" size={26} color="#119c14ff" />
          </View>
        ) : hasAccepted === false ? (
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 4,
              backgroundColor: "#ffe6e1",
              padding: 4,
              borderRadius: 24,
              paddingHorizontal: 8,
            }}
          >
            <Text style={{ color: "#ff3d00" }}>Declined</Text>
            <FontAwesome name="times-circle" size={26} color="#ff3d00" />
          </View>
        ) : (
          <Text>Pending</Text>
        )}
      </View>
    </View>
  );
};

const ContactsItem = ({
  name,
  isInvited = false,
}: {
  name: string;
  isInvited: boolean;
}) => {
  return (
    <View
      style={{
        paddingVertical: 16,
        borderBottomWidth: 1,
        borderColor: "#eee",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 18, fontWeight: "regular" }}>{name}</Text>
      <View>
        <FontAwesome name="plus-circle" size={26} color="#119c14ff" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default GuestList;
