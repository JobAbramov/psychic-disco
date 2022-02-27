import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import List from './src/List';
import SelectedItem from './src/SelectedItem';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();
setTimeout(() => SplashScreen.hideAsync(), 3000);

function arrGen()
{
  let arr = [];
  for(let i = 0; i <= 99; i++)
  {
    arr.push({id: i, text: 'element'});
  }
  return arr;
}

export default function App() {
  const [currId,setCurrId] = useState();
  const [list, setList] = useState(arrGen())
  const [bkgColor,setBkg] = useState('#fff')
  const [devH, setH] = useState(Dimensions.get('window').height)
  const [devW, setW] = useState(Dimensions.get('window').width)
 
  useEffect(()=>
  {
    const update = () =>{
      setH(old => old = Dimensions.get('window').height)
      setW(old => old = Dimensions.get('window').width)
    }
    Dimensions.addEventListener("change", update)
    return () =>{
      Dimensions.removeEventListener("change", update)
    }
  })
  
  const onPressRunHandler = () => {
    if(currId % 2 === 0)
      alert("even")
      else
      setBkg(bkgColor => bkgColor = Math.round(Math.random() * 10000000000))
  }
  const onPressElementHandler = (id) => setCurrId(id)

  const onPressCloseHandler = () => setCurrId(null)

  let content = (<List list={list} widthDev={devW} onPressElement={onPressElementHandler} />)  

if (currId)
{
  content = (<SelectedItem onPressClose={onPressCloseHandler} onPressRun={onPressRunHandler} onPressRun={onPressRunHandler} item={list[currId-1]}/>)
}

  return (

  
    <View style={{backgroundColor: bkgColor, width: devW, height: devH}}>
        {content}
        <StatusBar style='auto' />
    </View>
    
  );
}

const styles = StyleSheet.create({

});
