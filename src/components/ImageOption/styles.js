import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  optionContainer: {
    borderWidth: 2,
    borderBottomWidth: 4,
    borderColor: "lightgrey",
    borderRadius: 10,

    width: "48%",
    height: "49%",

    padding: 10,

    alignItems: "center",
  },
  selectedContainer: {
    backgroundColor: "#DDF4FE",
    borderColor: "#81D5FE",
  },

  optionImage: {
    width: "100%",
    height: 100,
    flex: 1,
  },

  optionText: {
    fontWeight: "bold",
  },
  selectedText: {
    color: "#40BEF7",
    fontWeight: "bold",
  },
});

export default styles;
