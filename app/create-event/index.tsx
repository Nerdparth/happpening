import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import DateTimePicker from "@react-native-community/datetimepicker";
import { BlurView } from "expo-blur";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { useRef, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";

const styles = StyleSheet.create({
  editBackground: {
    justifyContent: "center",
    alignItems: "center",
    width: 150,
    height: 35,
    marginBottom: 20,
    borderRadius: 20,
    backgroundColor: "rgba(0, 0, 0, 0.51)",
    overflow: "hidden",
    position: "relative",
    borderWidth: 1,
    borderColor: "#d0d0d0",
  },
  eventDetails: {
    // justifyContent: "center",
    // alignItems: "center",
    width: "100%",
    borderRadius: 24,
    marginBottom: 100,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    overflow: "hidden",
    position: "relative",
    borderWidth: 1,
    borderColor: "#d0d0d0",
  },
});

export default function CreateEvent() {
  const refRBSheet = useRef<any>(null);
  const { height } = useWindowDimensions();
  const [date, setDate] = useState(new Date());

  const onChange = (_event: any, selectedDate?: Date) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
  };

  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      contentContainerStyle={{ flexGrow: 1 }}
    >
      <LinearGradient
        colors={["#6632ba", "#9b5de5", "#f15bb5"]} // pick your gradient colors
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{
          flex: 1,
          justifyContent: "flex-end",
          alignItems: "center",
          height: height,
          paddingHorizontal: 16,
        }}
      >
        <TouchableOpacity
          style={{
            position: "absolute",
            top: 60,
            left: 10,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={() => router.back()}
        >
          <FontAwesome name="chevron-left" size={24} color="#fff" />
          <Text
            style={{
              color: "#fff",
              fontSize: 16,
              marginLeft: 8,
            }}
          >
            Back
          </Text>
        </TouchableOpacity>
        <BlurView intensity={50} tint="light" style={styles.editBackground}>
          <TouchableOpacity>
            <Text style={{ color: "#fff" }}>Edit Background</Text>
          </TouchableOpacity>
        </BlurView>

        <BlurView intensity={50} tint="light" style={styles.eventDetails}>
          <TouchableOpacity
            style={{
              borderBottomWidth: 1,
              width: "100%",
              borderColor: "#ccc",
              alignItems: "center",
            }}
            onPress={() => refRBSheet.current.open()}
          >
            <Text
              style={{
                fontSize: 29,
                color: "#ffffff86",
                fontWeight: 600,
                textAlign: "center",
                paddingVertical: 20,
              }}
            >
              Event Title
            </Text>
          </TouchableOpacity>

          <View
            style={{
              flexDirection: "column",
              justifyContent: "space-between",
              borderBottomWidth: 1,
              borderColor: "#ccc",
              padding: 0,
              paddingVertical: 14,
              width: "100%",
              alignItems: "center",
            }}
          >
            <TouchableOpacity style={{ alignItems: "center" }}>
              <FontAwesome name="calendar" size={16} color="#fff" />
              <Text
                style={{
                  color: "#fff",
                  fontSize: 17,
                  marginTop: 8,
                }}
              >
                Date and Time
              </Text>
            </TouchableOpacity>
            {false && (
              <DateTimePicker
                value={date}
                is24Hour={true}
                display="default"
                onChange={onChange}
              />
            )}
          </View>

          <TouchableOpacity
            style={{ alignItems: "center", paddingVertical: 14 }}
          >
            <Entypo name="location-pin" size={30} color="#fff" />
            <Text style={{ color: "#f0f0f0ff", fontSize: 17, fontWeight: 600 }}>
              Location
            </Text>
          </TouchableOpacity>
        </BlurView>
        <RBSheet
          ref={refRBSheet}
          height={300}
          customStyles={{
            wrapper: {
              backgroundColor: "rgba(0,0,0,0.5)",
            },
            draggableIcon: {
              backgroundColor: "#000",
            },
            container: {
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
              padding: 20,
            },
          }}
        >
          <Text style={{ fontSize: 25, marginBottom: 15 }}>
            What{"'"}s your event called?
          </Text>
          <TextInput
            placeholder="Product Launch"
            placeholderTextColor={"#999"}
            style={{
              backgroundColor: "#F2F2F7",
              borderWidth: 1,
              borderColor: "#ccc",
              borderRadius: 8,
              padding: 8,
              paddingVertical: 14,
              color: "#000",
              fontSize: 16,
              width: "100%",
            }}
          />
        </RBSheet>
      </LinearGradient>
    </ScrollView>
  );
}
