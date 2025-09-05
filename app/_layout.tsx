import { Stack, Tabs } from "expo-router";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';


export default function RootLayout() {
  return <Tabs>
    <Tabs.Screen  name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
        }} />
    <Tabs.Screen  name="createEvent"
        options={{
          title: 'Create',
          tabBarIcon: ({ color }) => <MaterialIcons name="event" size={24} color="black" />,
        }} />
  </Tabs>;
}
