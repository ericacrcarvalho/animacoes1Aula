import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// Animated.decay(): o movimento começa com uma certa velocidade que diminui até parar.
// velocity -> requerida

const Decay = () => {

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Decay</Text>
        </View>
    )
};
export default Decay;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
    },
    text: {
      fontSize: 20,
      fontWeight: 'bold',
      margin: 2,
    }
  });
  