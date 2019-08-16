import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isCross: false,
      winMessage: ""
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Tic Tac Toe</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
