import React from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import music_data from './music-data.json';
import SongCard from "./components/SongCard";



const App = () => {

  const renderSong = ({item}) =>  <SongCard  song ={item} />
  const renderSeparator = ({}) => <View style={styles.separator} />
  return(
<SafeAreaView style={styles.container}>
   <Text> Oktay kuzu</Text>
   <FlatList keyExtractor={item => item.id}  data={music_data} renderItem={renderSong} ItemSeparatorComponent={renderSeparator}/>
</SafeAreaView>
  );
}



const styles = StyleSheet.create({
   container :{ flex : 1,},
   separator :{ borderWidth : 1,
    borderColor : '#e0e0e0',
   },


})
export default App;