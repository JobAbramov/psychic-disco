import React from "react";
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const ItemBox = ({item, style, onPress}) => (
    <TouchableOpacity onPress={() => onPress(item.id+1)}>
        <View style={style}>
        <Text>{item.text} {item.id+1}</Text>
        </View>
        
    </TouchableOpacity>
)

export default ItemBox
