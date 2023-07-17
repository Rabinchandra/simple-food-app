import { StyleSheet, View } from 'react-native';
import CategoryItem from '../components/CategoryItem';
import categoriesData from '../utility/dummy_data';

function Categories() { 

  return (
    <View style={styles.container}>
        {categoriesData.map((data) => <CategoryItem data={data} key={data.id}/>)}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(240, 240, 240)',
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    paddingTop: 12,
  },
});

export default Categories