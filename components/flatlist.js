import { ActivityIndicator, FlatList, Pressable, RefreshControl } from 'react-native';
import { SafeAreaView, ScrollView, StyleSheet, Text, View, Button, Alert } from 'react-native';

let flatListData = [
  { id: 1, title: 'Элемент 1',  },
  { id: 2, title: 'Элемент 2',  },
  { id: 3, title: 'Элемент 3',  },
  { id: 4, title: 'Элемент 4',  },
  { id: 5, title: 'Элемент 5', },
  { id: 6, title: 'Элемент 6',  },
  { id: 7, title: 'Элемент 7', },
  { id: 8, title: 'Элемент 8', },
  { id: 9, title: 'Элемент 9',  },
  { id: 10, title: 'Элемент 10',  },

]

function FlatListItem({ item }) {
  return (
    <Pressable onPress={() => console.log('click on' + item.id)}>
      <View style={{ marginTop: 20, padding: 10,  }}>
        <View style={{ height: 40, padding: 10, justifyContent: 'center', width:'200' }}>
          <View style={{ flexDirection: 'row', }}>

            <View>
              <Text style={{ fontSize: 15 }}>{item.title}</Text>

            </View>

          </View>
        </View>
      </View>

    </Pressable>

  )

}





export default function Flat() {
  return (
    <SafeAreaView>
      <View style={{ }}>
        <FlatList
          data={flatListData}
          renderItem={({ item }) => <FlatListItem key={item.id} item={item} />
          }
         
        />

      </View>

      
      

    </SafeAreaView>

  )
}
const styles = StyleSheet.create({

  separator: {
    marginVertical: 8,

    borderBottomWidth: StyleSheet.hairlineWidth,
  },

})