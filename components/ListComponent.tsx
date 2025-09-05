import { FlatList, Text, View } from "react-native";
import { JSX } from "react/jsx-runtime";

const ListComponent = ({
  displayData,
  listTitle,
  Component,
  maxHeight = 400,
}: {
  displayData: any[];
  listTitle: string;
  Component: (item: any) => JSX.Element;
  maxHeight?: number | "100%";
}) => {
  return (
    <View
      style={{
        marginTop: 24,
        flex: 1,
        backgroundColor: "#fff",
        padding: 16,
        paddingVertical: 24,
        borderRadius: 16,
        minHeight: 200,
        maxHeight: maxHeight,
      }}
    >
      <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 8 }}>
        {listTitle}
      </Text>
      <FlatList
        data={displayData}
        renderItem={({ item }) => {
          return <Component {...item} />;
        }}
      />
    </View>
  );
};

export default ListComponent;
