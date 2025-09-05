import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { BlurView } from "expo-blur";
import { useWindowDimensions } from "react-native";

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
    fontSize:20,
    textAlign:"center",
    justifyContent:"center"
  },
});

export default function CreateEvent() {
  const { height } = useWindowDimensions();

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"} // important!
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
          </BlurView>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
