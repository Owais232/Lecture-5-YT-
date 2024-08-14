import { StyleSheet, Text, View } from "react-native";



const App=()=>{
  return(
    <View style={Style.container}>
      <View style={Style.upperscreen}>
        <View style={Style.upperfirst}>

        </View>
        <View style={Style.uppersecond}>
          <View style={Style.one}></View>
          <View style={Style.two}></View>

        </View>

      </View>
      <View style={Style.lowerscreen}>

      </View>

    </View>
  );
};

const Style=StyleSheet.create({
  container:{
    flex:1,
  },
  upperscreen:{
    flex:1,
    backgroundColor:'red',
    flexDirection:'row'
  },
  lowerscreen:{
    flex:1,
    backgroundColor:'blue',
    margin:5
  },
  upperfirst:{
    flex:1,
    backgroundColor:'yellow',
    margin:5
  },
  uppersecond:{
    flex:1,
    backgroundColor:'grey'
  },
  one:{
    flex:1,
    backgroundColor:'green',
    margin:5
  },
  two:{
    flex:1,
    backgroundColor:'purple',
    margin:5
  }
})


export default App;