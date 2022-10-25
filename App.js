import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

  const [todos, setTodos] = useState([]);

  function setFinished(index){
    setTodos((t) => {
      t.at(index).alreadyFinished = !t.at(index).alreadyFinished;
      return [...t]
    })
  }

  const addTodo = () => {
    setTodos((t) => [...t, {name: write, alreadyFinished: false}]);
  };
  const [write, setWrite] = useState("");


  return (
    <View style={styles.container}>
      <Text>Lista de Compras</Text>
      
      <TextInput value={write} onChangeText={setWrite} style={styles.textInput}></TextInput>
      <button onClick={addTodo}>Adicionar Item</button>

      {
        todos.map((todo, index) => (
          console.log(todo),
          <Text key={index}>
             <input
              type="checkbox" 
              id={index}
              name={todo.name}
              checked = {todo.alreadyFinished}
              onChange={() => setFinished(index)}
              />
            {todo.name}
            </Text>
        ))
      }

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    border: "1px solid black",
    margin: 10,
  }
});