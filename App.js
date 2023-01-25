import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import Todo from "./.expo/screens/Todo";
import { useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import AddTask from "./.expo/screens/AddTask";

function App() {
  const navigation = useNavigation();
  const [selectedDate, setSelectedDate] = useState("");

  const [todoList, setTodoList] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const addTodo = () => {
    setTodoList([...todoList, newTodo]);
    setNewTodo("");
  };
  // get screen width and height
  const screenWidth = Dimensions.get("window").width;
  const screenHeight = Dimensions.get("window").height;
  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <View style={{ alignSelf: "flex-start", flexDirection: "row" }}>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 40,
            alignSelf: "flex-start",
            top: 100,
            left: 20,
          }}
        >
          Home
        </Text>
      </View>
      <View
        style={{
          height: 0.5,
          width: screenWidth * 0.9,
          backgroundColor: "black",
          top: 115,
        }}
      />
      <Text
        style={{
          alignSelf: "flex-start",
          left: 20,
          top: 130,
          fontSize: 25,
          fontWeight: "600",
        }}
      >
        To-do
      </Text>
      <View>
        <Todo />
        <TouchableOpacity onPress={() => navigation.navigate("Configure Task")}>
          <Text
            style={{
              top: 90,
              left: screenWidth * 0.3,
              color: "#006DAA",
              fontSize: 15,
            }}
          >
            + Add Task
          </Text>
        </TouchableOpacity>
      </View>
      {/* Calendar View */}
      <View style={{ top: 150, paddingLeft: 20 }}>
        {/* <Calendar
          style={{ flex: 1 }}
          onDayPress={(day) => {
            setSelectedDate(day.dateString);
          }}
          markedDates={{ [selectedDate]: { selected: true } }}
        /> */}
      </View>
    </View>
  );
}

// export default App;
const Stack = createNativeStackNavigator();
function Stacks() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="App"
          component={App}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Configure Task" component={AddTask} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default Stacks;

const styles = StyleSheet.create({});
