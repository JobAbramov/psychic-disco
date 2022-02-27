import React from "react";
import {View, Text, Button, StyleSheet,TouchableOpacity, Dimensions} from 'react-native';
import ItemBox from "./ItemBox";
import { AntDesign } from '@expo/vector-icons';

export default SelectedItem = ({onPressClose, onPressRun, style, item}) =>
(
    <View style={styles.container}>
        <View style={{marginBottom:  Dimensions.get('window').height * 0.35}}>
            <TouchableOpacity onPress={onPressClose}>
                <View style={styles.btnClose}>
                <AntDesign name="back" size={24} color="black">
                </AntDesign>
                </View>
            </TouchableOpacity>
        </View>
        <View style={{alignSelf: 'center', marginBottom: Dimensions.get('window').height}}>
            <TouchableOpacity onPress={onPressRun}>
                <View style={styles.btnRun}>
                    <AntDesign name="playcircleo" size={24} color="black" />
                </View>
            </TouchableOpacity>
        </View>
    </View>
   
)

const styles = StyleSheet.create({
    container:{
        alignItems:'flex-start',
    },
    lftBtn:{
       
    },
    rghtBtn:{
        

    },
   btnClose:{
        backgroundColor: '#ada',
        paddingHorizontal: 30,
        paddingVertical: 10,
        borderRadius: 10,
        elevation: 10

   },
   btnRun:{
    backgroundColor: '#ada',
    paddingHorizontal: 50,
    paddingVertical: 10,
    borderRadius: 10,
    elevation: 10

   }
})