import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.background}>
      <Text>
        <Text style={styles.text_black}>It's a Great </Text>
        <Text
          style={{
            fontSize: 28,
            color: 'chocolate',
            fontWeight: '500',
          }}>
          Day for Coffee
        </Text>
      </Text>
      <View style={styles.categories}>
        <Image
          source={require('../../assets/images/espresso.jpg')}
          style={styles.images}
        />
        <Text style={{fontSize: 20, color: 'black'}}>Espresso</Text>
        <Icon
          name="angle-right"
          size={30}
          color="black"
          onPress={() => navigation.navigate('Product')}
        />
      </View>
      <View style={styles.categories}>
        <Image
          source={require('../../assets/images/cappuccino.jpg')}
          style={styles.images}
        />
        <Text style={{fontSize: 20, color: 'black'}}>Cappuccino</Text>
        <Icon
          name="angle-right"
          size={30}
          color="black"
          onPress={() => navigation.navigate('Product')}
        />
      </View>
      <View style={styles.categories}>
        <Image
          source={require('../../assets/images/macchiato.jpg')}
          style={styles.images}
        />
        <Text style={{fontSize: 20, color: 'black'}}>Macchiato</Text>
        <Icon
          name="angle-right"
          size={30}
          color="black"
          onPress={() => navigation.navigate('Product')}
        />
      </View>
      <View style={styles.categories}>
        <Image
          source={require('../../assets/images/mocha.jpg')}
          style={styles.images}
        />
        <Text style={{fontSize: 20, color: 'black'}}>Mocha</Text>
        <Icon
          name="angle-right"
          size={30}
          color="black"
          onPress={() => navigation.navigate('Product')}
        />
      </View>
      <View style={styles.categories}>
        <Image
          source={require('../../assets/images/latte.jpg')}
          style={styles.images}
        />
        <Text style={{fontSize: 20, color: 'black'}}>Latte</Text>
        <Icon
          name="angle-right"
          size={30}
          color="black"
          onPress={() => navigation.navigate('Product')}
        />
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
    fontSize: 28,
    fontWeight: '500',
  },
  categories: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    textAlign: 'left',
    alignContent: 'flex-start',
  },
  images: {
    width: 80,
    height: 80,
    resizeMode: 'cover',
    borderRadius: 50,
  },
});

export default HomeScreen;
