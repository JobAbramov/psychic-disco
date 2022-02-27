import React from 'react';
import { View, Text, FlatList, StyleSheet, Dimensions } from 'react-native';
import ItemBox from './ItemBox';

const List = ({list, widthDev, onPressElement}) =>
(
    <View style={{alignItems:'flex-start',paddingLeft: widthDev * 0.035}}>
      <FlatList contentContainerStyle={styles.list} data={list} renderItem={(item) =><ItemBox style={{...styles.item, width:widthDev - widthDev*0.5}} item={item.item} onPress={onPressElement}/>} />
    </View>
);

const styles = StyleSheet.create({
  item:{ 
    backgroundColor:'#ada',
    margin: 5,
    alignItems: 'center',
    paddingVertical: 20,
    borderRadius: 10,
  },
  list:{
    alignItems:'center',
    paddingRight: 0
  }
})

export default List;