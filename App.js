import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import ImageOption from './src/components/ImageOption';

const App = () => {
  return (
    <View style={styles.root}>
      <Text style={styles.title}>Which of these is the "glass"?</Text>
      <View style={styles.optionsContainer}>
        <ImageOption
          image="https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/cup.png" 
          text="cup"
        />
        <ImageOption 
          image="https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/glass.png" 
          text="glass"
        />
        <ImageOption 
          image="https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/cup.png" 
          text="cup"
        />
        <ImageOption 
          image="https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/cup.png" 
          text="cup"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    paddingTop: 60,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    alignSelf: "stretch",
  },
  optionsContainer: {
    width: "100%",
    flex: 1,

    flexDirection: 'row',
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignContent: "space-between",
  },
})

export default App;