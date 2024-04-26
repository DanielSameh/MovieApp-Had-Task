import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    width: '100%',
    height: 400,
    justifyContent: 'flex-end',
  },
  image: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',

  },
  gradient: {
    width: '100%',
    height: '40%',
    justifyContent: 'flex-end',
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
    marginBottom: 10,
  },
  descriptionText: {
    fontSize: 16,
    textAlign: 'center',
    color: 'yellow',
  },
  row: {
    display:"flex",
    flexDirection:"row",
    width:"100%",
    justifyContent:"center",
    paddingBottom:20
  }
});
