import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  title: {
    color: "white",
    fontSize: 30,
  },
  seeAll: {
    color: "white",
    fontSize: 20,
  },
  genre: {
    fontSize: 14,
    color: "#686868",
    marginBottom: 10,
    textAlign: "center",
  },
  row: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    padding: 10,
    alignItems: "center",
  },
});
