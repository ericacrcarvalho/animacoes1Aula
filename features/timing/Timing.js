import React, { useState } from 'react';
import { Animated, StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';

// Animated.timing(): realiza a movimentação em um determinado intervalo de tempo.

const Timing = () => {

    const [largura] = useState(new Animated.Value(50));
    const [tamanho] = useState(new Animated.Value(12));
    const [altura] = useState(new Animated.Value(80));
    const [transladar] = useState(new Animated.Value(0));
    const [opacidade] = useState(new Animated.Value(1));
    const [minhaAltura] = useState(new Animated.Value(20));
    const [minhaLargura] = useState(new Animated.Value(20));

    Animated.timing(largura, {toValue: 150, duration: 2000}).start();
    Animated.timing(tamanho, {toValue: 24, delay:2000, duration: 1000}).start();
    Animated.timing(altura, {toValue: 160, duration: 5000}).start();
    Animated.timing(transladar, {toValue: -60, duration: 3000}).start();
    
    const esconder = () => {
      Animated.timing(opacidade, {toValue: 0, duration: 2000}).start();
    }

    Animated.spring(minhaAltura, {toValue:100, velocity:30, bounciness: 50}).start();

    Animated.decay(minhaLargura, {velocity: 0.4, deceleration:0.996}).start();

    return (
        <View style={styles.container}>
            <Text 
                style={styles.text}>Timing</Text>
            <Animated.View
              style={{width: largura, height: 100, backgroundColor: 'gray'}}
            />
            <Animated.Text 
              style={{fontSize: tamanho, fontWeight:'bold'}}
            > Texto qualquer</Animated.Text>
            <Animated.Image
              style={{width: 100, height: 100, 
                transform: [{translateX:transladar}]}}
              source={require('../../images/ball.jpg')}
            />
            <Animated.View
              style={{width: 300, height: 100, backgroundColor: 'lightblue', opacity:opacidade}}
            />
            <Button
              mode="contained"
              onPress={esconder}
            >
              Esconder
            </Button>
            <Animated.View
              style={{width: 100, height: minhaAltura, backgroundColor: 'red', margin: 4}}
            />
            <Animated.View
              style={{width: minhaLargura, height: 50, backgroundColor: 'orange', margin: 4}}
            />
        </View>
    )
};
export default Timing;

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
    },
    buttons:{
      backgroundColor: 'blue',
      margin: 4,
    }, 
  });
  