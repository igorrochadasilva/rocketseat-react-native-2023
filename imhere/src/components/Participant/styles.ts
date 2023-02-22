import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#1f1e25",
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  name: {
    color: "#FFF",
    fontSize: 16,
    flex: 1,
    marginLeft: 16,
  },
  buttonText: {
    color: "#fff",
    fontSize: 24,
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: "#e23c44",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default styles;
