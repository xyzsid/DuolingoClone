import React, { useState } from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import ImageOption from "./src/components/ImageOption";
import Button from "./src/components/Button";

import icon from "./assets/icon.png";
import styles from "./App.styles";
import questions from "./assets/data/imageMultipleChoiceQuestions";

const App = () => {
  const [selected, setSelected] = useState(null);
  const [selectedQuestion, setSelectedQuestion] = useState(questions[0]);

  const onButtonPress = () => {
    console.warn("Pressed");
  };

  return (
    <View style={styles.root}>
      <Text style={styles.title}>{questions.question}</Text>
      <View style={styles.optionsContainer}>
        {questions.options.map((option) => (
          <ImageOption
            key={option.id}
            image={option.image}
            text={option.text}
            isSelected={selected?.id == option.id}
            onPress={() => setSelected(option)}
          />
        ))}
      </View>
      <Button text="Check" onPress={onButtonPress} disabled={!selected} />
    </View>
  );
};

export default App;
