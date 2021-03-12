import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';


const Product = ({ navigation }) => {
    // console.log({navigation});
    const [isSelected, setSelection] = useState(false);
    return (
        <View style={styles.desc}>
            <View>
                <Text style={{ fontWeight: 'bold', fontSize: 18, marginBottom: 5 }}></Text>
                <Text style={{ color: 'grey', fontSize: 10, marginBottom: 5 }}></Text>
            </View>
            <View style={styles.checkboxContainer}>
                <CheckBox
                    value={isSelected}
                    onValueChange={setSelection}
                    style={styles.checkbox}
                />
                <Text style={styles.label}></Text>

            </View>
            <View style={styles.checkboxContainer}>
                <CheckBox
                    value={isSelected}
                    onValueChange={setSelection}
                    style={styles.checkbox}
                />
                <Text style={styles.label}></Text>
            </View>
            <View style={styles.price}>
                <Text style={{ fontWeight: 'bold', fontSize: 18 }}></Text>
                <Text style={{ position: 'absolute', right: 0 }}></Text>
            </View>
            <View style={styles.buttoncon}>
                <TouchableOpacity
                    style={styles.button}
                // onPress={onPress}
                >
                    <Text style={styles.text}>ДОБАВИТЬ</Text>
                </TouchableOpacity>
            </View>
        </View>)
}

export default Product;

const styles = StyleSheet.create({
    desc: {
        marginHorizontal: 16,
    },
    price: {
        marginTop: 5,
        flexDirection: 'row'
    },
    button: {
        alignItems: "center",
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#F40F00',
        padding: 10,
        borderRadius: 10,
    },
    text: {
        color: '#F40F00',
        fontWeight: 'bold',
        fontSize: 14,
    },

    checkboxContainer: {
        flexDirection: "row",
        marginBottom: 5,
    },
    checkbox: {
        alignSelf: "center",
    },
    label: {
        margin: 8,
    },
});