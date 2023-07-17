import { useNavigation } from "@react-navigation/native"
import { View, Text, Image, StyleSheet, Button } from "react-native"

function FoodListItem({data, categoryId }) {
  const starImage = 'https://pixlok.com/wp-content/uploads/2021/07/Rating-SVG-Icon-s9fd.png'
  const navigation = useNavigation();
  
  const handleNavigation = () => {
    navigation.navigate('FoodDetails', {
      foodId: data.id,
      categoryId: categoryId,
    })
  }

  return (
    <View style={styles.container} key={Math.random()}>
        <Image 
          style={styles.img}
          source={{uri: (data.uri)}}/>
        <Text style={styles.text}>{data.title}</Text>

        <View style={styles.starContainer}>
          {
            new Array(data.rating).fill(1).map(a => <Image source={{uri: starImage}} style={styles.star}/>)
          }
        </View>
        <Button title="Food Details" onPress={handleNavigation}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    width: '70%',
    height: 230,
    backgroundColor: '#fff',
    elevation: 10,
    shadowColor: '#888',
    margin: 7,
    marginVertical: 20,
    borderRadius: 10,
    overflow: 'hidden',
  },

  img: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },

  text: {
    textTransform: 'capitalize',
    textAlign: 'center',
    paddingTop: 10,
    fontSize: 16,
  },

  star: {
    width: 30,
    height: 30,
  },

  starContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginVertical: 10,
  }
})

export default FoodListItem