import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
} from 'react-native';
import ProdImage from './ProdImage';
import { connect } from 'react-redux'

const FoodItem = (props) => {
    const { rating, image, price, mass, name, id } = props
    const item = { image, rating }
    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => props.setItem(id)}
            >
                <ProdImage item={item} rating={rating} />
            </TouchableOpacity>
            <Text style={{ fontSize: 18, fontWeight: 'bold', marginHorizontal: 10 }}>{name}</Text>
            <View style={styles.price}>
                <Text style={{ fontWeight: 'bold', fontSize: 18 }}>{price}</Text>
                <Text style={{ position: 'absolute', right: 0, marginTop: 5 }}>{mass}</Text>
            </View>
        </View >
    )
}

const mapStateToProps = (state, props) => {
    return { ...props, ...state }
}
const mapDispatch = {
    setItem: key => ({ type: 'SET_ITEM', payload: key }),
}

export default connect(mapStateToProps, mapDispatch)(FoodItem)

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