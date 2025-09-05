import Button from "@/components/Button";
import { BlurView } from "expo-blur";
import { router } from "expo-router";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";

const styles = StyleSheet.create({
  editBackground: {
    justifyContent: "center",
    alignItems: "center",
    width: 150,
    height: 35,
    marginBottom: 50,
    borderRadius: 20,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    overflow: "hidden",
    position: "relative",
  },
  eventDetails: {
    justifyContent: "center",
    alignItems: "center",
    width: 330,
    height: 250,
    borderRadius: 20,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    overflow: "hidden",
    position: "relative",
    padding: 20,
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    padding: 10,
    fontSize: 20,
    textAlign: "center",
    justifyContent: "center",
  },
});

export default function CreateEvent() {
  const { height } = useWindowDimensions();

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            minHeight: height,
          }}
        >
          <BlurView intensity={50} tint="light" style={styles.editBackground}>
            <TouchableOpacity>
              <Text style={{ color: "#fff" }}>Edit Background</Text>
            </TouchableOpacity>
          </BlurView>

          <BlurView intensity={50} tint="light" style={styles.eventDetails}>
            <TextInput
              style={styles.input}
              placeholder="Event Title"
              placeholderTextColor="#666"
            />
            <Button
              title="Add Guests"
              onPress={() => {
                router.push("/event-details/guestList");
              }}
              bgColor="#007AFF"
              textColor="#fff"
            />
          </BlurView>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
