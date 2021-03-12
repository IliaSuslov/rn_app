import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { getFood } from '../store/actions/food';
import { SET_GROUP } from '../store/actions/types';

import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

import { Button } from 'react-native-paper';

const TopNav = (props) => {
    const { food, navigation } = props;
    return (
        <View style={styles.topnav}>
            {food.groups.map((v, i) =>
                <Button key={`group-${i}`}
                    onPress={() => { props.setGroup(v) }}
                    compact
                    color={food.group === v ? 'green' : 'gray'}
                    mode={food.group === v ? 'contained' : 'text'}
                    style={styles.button}
                    labelStyle={{ fontSize: 9 }}
                >{v}</Button>
            )}
        </View >
    )
}

const mapStateToProps = (state, props) => {
    return { ...props, ...state }
}
const mapDispatch = {
    setGroup: key => ({ type: 'SET_GROUP', payload: key }),
}



export default connect(mapStateToProps, mapDispatch)(TopNav);



const styles = StyleSheet.create({
    button: {
        borderRadius: 50,
        color: '#3EB94B'
    },
    topnav: {
        marginTop: '17%',
        flexDirection: 'row',

    },
});