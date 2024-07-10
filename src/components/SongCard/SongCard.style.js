import { Image, StyleSheet } from "react-native";



export default StyleSheet.create ({
container :{
    padding : 10,
    flexDirection :'row',

} ,
image:{
 width : 100,
 height : 100,
 borderRadius : 50,
},
inner_container:{
    padding :10,

},
title :{
 fontSize : 20,
 fontWeight : 'bold',
},
info_container:{
    flexDirection : 'row',
    flex : 1,
    justifyContent :'center',

},
year :{
    marginLeft : 10,
    fontSize :12,
    color: 'gray',
    fontWeight : 'bold',

},
soldout_container : {
    borderWidth : 1,
    borderColor : 'red',
    padding : 5,
    borderRadius :5,

},
soldout_title : {
    color:'red',

},

});