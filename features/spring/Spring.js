import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// Animated.spring(): cria um movimento oscilatório inspirado em uma mola.
// toValue -> requerido

const Spring = () => {
  
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Spring</Text>
        </View>
    )
};
export default Spring;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
    },
    views: {
      flex: 0.5,
      flexDirection:'row',
      justifyContent: 'center',
      alignItems: 'center',
      margin: 4,
    },
    text: {
      fontSize: 20,
      fontWeight: 'bold',
      margin: 2,
    }
  });
  