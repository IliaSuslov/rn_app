import React from 'react';
import {
    StyleSheet,
    View,
    ScrollView
} from 'react-native';
import TopNav from '../components/TopNavigatoin';
import TopMenu from '../components/TopMenu';
import FoodItem from '../components/FoodListItem';
import Item from '../screens/food/Item';
import { connect } from 'react-redux'

const Home = (props) => {
    const { food, navi } = props;
    return (
        <View>
            { navi.item !== -1 ? <Item {...navi} item={food.items.filter(v=>v.id===navi.item)[0]} />
                : (<View>
                    <View style={{ marginVertical: 10, marginHorizontal: 10 }}>
                        <TopMenu {...food} />
                        <TopNav />
                    </View>
                    <ScrollView style={{ marginBottom: '60%' }}>
                        {food.items.filter(v => food.group ? food.group === v.tag : true).map(v => <View key={`item-${v.id}`}><FoodItem id={v.id} {...v} /></View>)}
                    </ScrollView>
                </View>)
            }
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