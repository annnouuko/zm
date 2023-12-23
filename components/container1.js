import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import FlatList from "./flatlist";





export default function Container1() {
  return (

    
      <SafeAreaView style={styles.Container1}>

        <View style={styles.Container1}>
          <View style={styles.textContainer1}>
            <Text style={styles.titleText2}>Заметки</Text>
            <View style={{ flex: 1, width: '100%' }}>
              <FlatList />


            </View>

          </View>




        </View>
        



      </SafeAreaView>



    










  )
}

const styles = StyleSheet.create({
  Container1: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,




  },

  textContainer1: {
    flex: 1,
    marginTop: 30,
    alignItems: 'right',
    padding: 10,


  },

  titleText2: {

    fontSize: 28,
    marginTop: 30,
  },

  footer: {
   
    marginTop:530,
    height:80,
    
    backgroundColor:'#fff',
    borderTopColor:'#777',
    
    
  }





})