import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button
} from 'react-native';
import ProdImage from '../../components/ProdImage';
import Product from '../../components/Product';
import { connect } from 'react-redux'

const Item = (props) => {
  const { item } = props
  console.log(item);
  return (
    <View>
      <Button
        onPress={() => props.goBack()}
        title=' Назад'
      />
      <ProdImage {...props} />
      <Product {...item} />
    </View>
  )
}
const mapStateToProps = (state, props) => {
  return { ...props, ...state }
}
const mapDispatch = {
  goBack: () => ({ type: 'SET_ITEM_CLEAR' }),
}

export default connect(mapStateToProps, mapDispatch)(Item)



const styles = StyleSheet.create({

});