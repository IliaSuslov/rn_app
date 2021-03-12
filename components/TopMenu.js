import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faSearch, faFilter, faChevronDown } from '@fortawesome/free-solid-svg-icons'

const TopMenu = (props) => {
    const { address } = props
    return (
        <View style={styles.topcon}>
            <View>
                <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Доставка <FontAwesomeIcon icon={faChevronDown} size={10} /></Text>
                <Text style={{ fontSize: 10, color: 'grey' }}>{address}</Text>
            </View>
            <View style={styles.topbut}>
                <TouchableOpacity
                    style={{ backgroundColor: 'lightgrey', borderRadius: 10, width: 50, height: 50, marginVertical: 5, marginRight: 5 }}
                // onPress={onPress}
                >
                    <FontAwesomeIcon icon={faFilter} size={25} style={styles.icon} />
                </TouchableOpacity>
                <TouchableOpacity
                    // onPress={onPress}
                    style={{ backgroundColor: 'lightgrey', borderRadius: 10, width: 50, height: 50, marginVertical: 5, marginRight: 10 }}
                >
                    <FontAwesomeIcon icon={faSearch} size={25} style={styles.icon} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default TopMenu;

const styles = StyleSheet.create({
    topbut: {
        flex: 1,
        flexDirection: 'row',
        position: 'absolute',
        right: 0
    },
    topcon: {
        flex: 1,
        flexDirection: 'row',
    },
    icon: {
        alignSelf: 'center',
        marginVertical: 12
    }
});