import Main from "./components/main";
import Container1 from "./components/container1";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack =  createStackNavigator();

export default function Navigation(){
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={Main}
          options={{title: 'My notes'}}
        
        />
         <Stack.Screen
          name="Container1"
          component={Container1}
          options={{title: 'My notes'}}
        
        />

      </Stack.Navigator>

    </NavigationContainer>

  )
}