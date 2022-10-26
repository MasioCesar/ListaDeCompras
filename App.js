import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Switch, Text, TextInput, View } from 'react-native';
import getUsers from './filter';

export default function App() {

  const [todos, setTodos] = useState([]);

  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  function setFinished(index){
    setTodos((t) => {
      t.at(index).alreadyFinished = !t.at(index).alreadyFinished;
      return [...t]
    })
  }

  //Add item na lista
  const addTodo = () => {
    setTodos((t) => [...t, {name: write, alreadyFinished: false}]);
  };

  const [write, setWrite] = useState("");

  return (
    <View style={styles.container}>
      <View style={{display:"flex", alignItems:"center", padding:30}} >
        <Text>Lista de Compras</Text>
        
        <TextInput value={write} onChangeText={setWrite} style={styles.textInput}></TextInput>
        <button onClick={addTodo}>Adicionar Item</button>
      
      </View>
      <View>
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
      </View>   
      
      <View style={{display:"flex", alignItems:"center", padding:30, }}>
        
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />

      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e3dede',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:"row",
  },
  textInput: {
    border: "1px solid black",
    margin: 10,
  }
});