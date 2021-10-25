import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import ImageOption from "./src/components/ImageOption";

import icon from "./assets/icon.png";
import styles from "./App.styles";
import question from "./assets/data/oneQuestionWithOption";

const App = () => {
  const status = "ok";

  return (
    <View style={styles.root}>
      <Text style={styles.title}>{question.question}</Text>
      <View style={styles.optionsContainer}>
        {question.options.map((option) => (
          <ImageOption
            key={option.id}
            image={option.image}
            text={option.text}
          />
        ))}
      </View>
    </View>
  );
};

export default App;
