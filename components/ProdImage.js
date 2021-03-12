import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image
} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons'

const ProdImage = (props) => {
    const { rating, image } = props
    return (
        <View style={styles.image} >
            <Image
                source={image}
                style={styles.foodimg}
            />
            <Text style={styles.badge}>{rating}</Text>
            <FontAwesomeIcon style={styles.info} color={'white'} size={25} icon={faExclamationCircle} />
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
        width: '15%',
        height: '15%',
        shadowColor: '#30C1DD',
        shadowRadius: 20,
        shadowOpacity: 0.6,
        elevation: 8,
        shadowOffset: {
            width: 0,
            height: 4
        }
    },
});