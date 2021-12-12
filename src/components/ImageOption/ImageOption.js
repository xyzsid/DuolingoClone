import React from "react";
import { Text, View, Image, Pressable } from "react-native";
import PropTypes, { string } from "prop-types";
import styles from "./styles";

const ImageOption = ({ image, text, isSelected, onPress }) => {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.optionContainer,
        isSelected ? styles.selectedContainer : {},
      ]}
    >
      <Image
        source={{ uri: image }}
        style={styles.optionImage}
        resizeMode="contain"
      />
      <Text style={isSelected ? styles.selectedText : styles.optionText}>
        {text}
      </Text>
    </Pressable>
  );
};

ImageOption.propTypes = {
  image: PropTypes.string.isRequired,
  text: PropTypes.string,
  isSelected: PropTypes.bool,
};

ImageOption.defaultProps = {
  text: "Default",
  isSelected: false,
};

export default ImageOption;
