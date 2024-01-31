import React from 'react';
import {View, Text, StyleSheet, Image, Button} from 'react-native';

const HomeScreen = () => {
  return (
    <View style={styles.background}>
      <Text>
        <Text style={styles.text_black}>It's a Great </Text>
        <Text
          style={{
            fontSize: 25,
            color: 'chocolate',
            fontWeight: '500',
          }}>
          Day for Coffee
        </Text>
      </Text>
      <View style={{flexDirection: 'row'}}>
        <Image
          source={require('../../assets/images/espresso.jpg')}
          style={styles.images}
        />
        <Text style={{fontSize: 20}}>Espresso</Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <Image
          source={require('../../assets/images/cappuccino.jpg')}
          style={styles.images}
        />
        <Text style={{fontSize: 20}}>Cappuccino</Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <Image
          source={require('../../assets/images/macchiato.jpg')}
          style={styles.images}
        />
        <Text style={{fontSize: 20}}>Macchiato</Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <Image
          source={require('../../assets/images/mocha.jpg')}
          style={styles.images}
        />
        <Text style={{fontSize: 20}}>Mocha</Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <Image
          source={require('../../assets/images/latte.jpg')}
          style={styles.images}
        />
        <Text style={{fontSize: 20}}>Latte</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: 'antiquewhite',
    paddingHorizontal: 20,
    justifyContent: 'space-evenly',
  },
  text_black: {
    color: 'black',
    fontSize: 25,
    fontWeight: '500',
  },
  images: {
    width: 80,
    height: 80,
    resizeMode: 'cover',
  },
});

export default HomeScreen;
