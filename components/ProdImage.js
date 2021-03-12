import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image
} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons'
import { getImage } from "../store/reducers/Food"

const ProdImage = (props) => {
    const {item={}}=props;
    const { image, rating } = item
    return (
        <View style={styles.image} >
            <Image
                source={getImage(image)}
                style={styles.foodimg}
            />
            <Text style={styles.badge}>{rating}</Text>
            <FontAwesomeIcon style={styles.info} color={'#20C845'} size={5} icon={faExclamationCircle} />
        </View>
    )
}

export default ProdImage;

const styles = StyleSheet.create({
    badge: {
        alignSelf: 'flex-end',
        position: 'absolute',
        marginTop: 5,
        backgroundColor: '#20C845',
        width: '15%',
        height: '15%',
        color: 'white',
        textAlign: 'center',
        textAlignVertical: 'center',
        borderBottomLeftRadius: 10
    },
    foodimg: {
        marginTop: 5,
        width: "100%",
        height: 200
    },
    info: {
        alignSelf: 'flex-end',
        position: 'absolute',
        bottom: 0,
        marginRight: '20%',
        marginBottom: '10%',
    },
});