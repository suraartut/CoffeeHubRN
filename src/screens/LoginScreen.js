import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, Text, StyleSheet, Image} from 'react-native';

const LoginScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.background}>
      <Image
        style={styles.image}
        source={require('../../assets/images/coffee-cup.png')}
      />
      <Text
        onPress={() => navigation.navigate('Home')}
        style={{
          display: 'flex',
          marginTop: 15,
        }}>
        <Text style={styles.coffee_text}>Coffee </Text>
        <Text
          style={{
            fontSize: 22,
            color: 'chocolate',
            textTransform: 'uppercase',
          }}>
          Hub
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: 'antiquewhite',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 250,
    height: 250,
    resizeMode: 'cover',
  },
  coffee_text: {
    fontSize: 22,
    textTransform: 'uppercase',
    color: 'black',
  },
});

export default LoginScreen;
