import { View, StyleSheet } from 'react-native'
import categoriesData from '../utility/dummy_data';
import FoodListItem from '../components/FoodListItem';
import { FlatList } from 'react-native-gesture-handler';

function FoodList({ route }) {
  const categoryId = route.params.categoryId;
  const foods = categoriesData.filter((item) => item.id == categoryId)[0].items;
  
  return (
    <View style={styles.container}>
        <FlatList 
          data={foods}
          keyExtractor={food => `${parseInt(Math.random()*100)}${food.id}`}
          renderItem={(food) => <FoodListItem data={food.item} categoryId={categoryId} />}
        />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
  }
})

export default FoodList