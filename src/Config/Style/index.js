import { StyleSheet } from 'react-native'
import primaryTheme from 'primaryTheme'
export  default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center'   ,
    backgroundColor: "#FFFFFF",
    margin: 0 ,height:'100%' 
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10
  },
  transparent:{backgroundColor: "#00000000" },
   title: {
    textAlign: 'center',
    fontSize: 14,
    marginTop: 0,
    width: "100%",
  },
  header: {
      backgroundColor: primaryTheme.color.primary,
    },
  boady:{
    backgroundColor: primaryTheme.color.secondary
  },
    errorText:{
      fontSize: 12,
      color:primaryTheme.color.error
    },
})