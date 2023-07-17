import { useNavigation } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native'
import { View, Text, Image, StyleSheet, Pressable } from 'react-native'
import { toSentenceCase } from '../utility/utilityFunctions';


function CategoryItem({ data }) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('FoodList', {
        categoryId: data.id,
    })}>
        <Image 
            style={styles.img}
            source={{uri: (data.uri) }}
            />
        <View>
            <Text style={styles.text}>{toSentenceCase(data.categoryName)} Category</Text>
        </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container: {
        width: '45%',
        height: 200,
        backgroundColor: '#fff',
        elevation: 10,
        shadowColor: '#888',
        margin: 7,
        borderRadius: 10,
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
        padding: 10,
        fontSize: 16,
        textAlign: 'center'
    }
})

export default CategoryItem