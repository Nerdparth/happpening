import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";

export default function RootLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="home" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="create-event/index"
        options={{
          title: "Create",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <FontAwesome name="calendar-plus-o" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="contacts/index"
        options={{
          title: "Contacts",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <FontAwesome name="address-book" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="settings/index"
        options={{
          title: "Settings",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <FontAwesome name="cog" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="event-details/guestList"
        options={{ href: null, headerShown: false }}
      />
    </Tabs>
  );
}
