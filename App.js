import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import Addtodo from './components/Addtodo';
import Header from './components/Header';
import Items from './components/Items';

export default function App() {

  const [todo, setTodo] = useState([
    { text: "buy coffee", key: 1 },
    { text: "create an app", key: 2 },
    { text: "play music and video", key: 3 },
  ]);


  const pressHandler=(key)=>{
      setTodo((prevTodos)=>{
          return prevTodos.filter((todo)=>todo.key!=key);
      })
  };

  const submitHandler=(key)=>{

    setTodo((prevTodos)=>{
      return [
        {text:key,key:Math.random().toString()},
        ...prevTodos
      ]
    })
        
  }


  return (
    <View style={styles.container}>
      <Header/>
      <View style={styles.content}>
        <Addtodo submitHandler={submitHandler}/>
        <View style={styles.list}>
          <FlatList data={todo}
            renderItem={({ item }) => (
              <Items value={item} pressHandler={pressHandler}/>
            )}

          />
        </View>

      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
  content: {
    padding: 20,
    flex:1
  },
  list: {
    marginTop: 20,
    flex:1,
  }

});
