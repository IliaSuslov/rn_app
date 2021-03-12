import React from 'react';
import {
    StyleSheet,
    View,
    ScrollView
} from 'react-native';
import TopNav from '../components/TopNavigatoin';
import TopMenu from '../components/TopMenu';
import FoodItem from '../components/FoodItem';
import { connect } from 'react-redux'
import { SET_ITEM } from '../store/actions/types';


const Home = (props) => {
    // console.log(props.food);
    const { food } = props;
    return (
        <View>
            <View style={{ marginVertical: 10, marginHorizontal: 10 }}>
                <TopMenu {...food}/>
                <TopNav navigation={props.navigation} />
            </View>
            <ScrollView style={{marginBottom: '30%'}}>
                {food.pizza.map((v, i) => <View key={`item-${i}`}><FoodItem {...v}/></View>)}
            </ScrollView>
        </View>
    )
}

const mapStateToProps = (state, props) => {
    return { ...props, ...state }
}
const mapDispatch = {
    setItem: key => ({ type: 'SET_ITEM', payload: key }),
}


export default connect(mapStateToProps, mapDispatch)(Home);

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});