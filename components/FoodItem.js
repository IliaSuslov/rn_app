import React from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';
import ProdImage from '../components/ProdImage';


const FoodItem = (props) => {
    const { rating, image, price, mass, name } = props
    return (
        <View style={styles.container}>
            <ProdImage image={image} rating={rating} />
            <Text style={{ fontSize: 18,  marginHorizontal: 10 }}>{name}</Text>
            <View style={styles.price}>
                <Text style={{ fontWeight: 'bold', fontSize: 18 }}>{price}</Text>
                <Text style={{ position: 'absolute', right: 0, marginTop: 5 }}>{mass}</Text>
            </View>
        </View>
    )
}
export default FoodItem

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    price: {
        margin: 5,
        flexDirection: 'row',
        marginHorizontal: 10
    },
});