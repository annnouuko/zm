import { StyleSheet, Text, View, Button, TouchableOpacity, SafeAreaView, ScrollView, Pressable, Image } from "react-native";


export default function Main({ navigation }) {

  const loadScene = () => {
    navigation.navigate('Container1');

  }
  return (
    <ScrollView>
      <SafeAreaView style={styles.Main}>

        <View style={styles.Main}>
          <View style={styles.textContainer}>
            <Text style={styles.titleText}>Заметки</Text>


            <Pressable onPress={() => { }}>

            </Pressable>

          </View>
          <Pressable style={styles.button} onPress={loadScene}>
            <Text>Папки</Text>


          </Pressable>











        </View>
      </SafeAreaView>

      <View style={styles.footer}></View>




      
    </ScrollView>


  );
}

const styles = StyleSheet.create({


  Main: {

    justifyContent: 'center',
    paddingHorizontal: 10,




  },

  button: {
    marginTop: 15,
    backgroundColor: '#DDDDDD',
    padding: 10,
    borderRadius: 10,
  },
  textContainer: {
    marginTop: 30,
    alignItems: 'right',
    padding: 10,

  },
  titleText: {
    fontSize: 28,
    marginTop: 30,


  },
  footer: {

    marginTop: 530,
    height: 80,

    backgroundColor: '#fff',
    borderTopColor: '#777',


  }




})