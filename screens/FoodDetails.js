import { View, Text, Image, StyleSheet, Button, Pressable } from 'react-native'
import React from 'react'
import categoriesData from '../utility/dummy_data'

const FoodDetails = ({ route }) => {
  const foodId = route.params.foodId
  const categoryId = route.params.categoryId
  const items = categoriesData.filter(data => data.id == categoryId)[0].items;
  const details = items.filter(item => item.id == foodId)[0]
  const starImage = 'https://pixlok.com/wp-content/uploads/2021/07/Rating-SVG-Icon-s9fd.png'


  return (
    <View style={styles.outerContainer}>
      <Image source={{uri: details.uri}} style={styles.image}/>
      <View style={styles.innerContainer}>
        <Text style={styles.text}>{details.title}</Text>
      
        {/* rating */}
        <View style={styles.starContainer}>
          { new Array(details.rating).fill(1).map(d => <Image source={{uri: starImage} } style={styles.star} key={Math.random()}/>) }
        </View>

        <Text style={{fontSize: 13}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex.
        </Text>

        <Text style={styles.priceText}>
          Price: $40
        </Text>

        {/* <Button title="Like the fruit" /> */}
      </View>
      <Pressable style={styles.button} android_ripple={{color: 'rgb(16, 116, 204)'}}>
          <Text style={styles.buttonText}>Buy the food</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 250,
    resizeMode: 'cover'
  },
  outerContainer: {
    position: 'relative',
    flex: 1,
    height: '100%'
  },
  innerContainer: {
    paddingVertical: 50,
    paddingHorizontal: 40,
    borderRadius: 30,
    backgroundColor: '#fff',
    elevation: 20,
    shadowColor: 'black',
    flex: 1,
    position: 'absolute',
    top: 220,
    width: '100%',
    height: '100%',
  },
  text: {
    fontSize: 25,
    fontWeight: 'bold',
    textTransform: 'capitalize'
  },
  priceText: {
    fontWeight: 'bold',
    marginVertical: 20,
    fontSize: 20,
  },
  star: {
    width: 20,
    height: 20,
  },
  starContainer: {
    flexDirection: 'row',
    marginVertical: 20, 
  },
  button: {
    backgroundColor: 'rgb(35, 140, 232)',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    padding: 20,
  },

  buttonText: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  }

})

export default FoodDetails