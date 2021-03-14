import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    userContainer: {
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      paddingBottom: 2
    },
    linearGradientUser: {
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
     },
    linearGradient: {
      alignItems: 'center',
      justifyContent: 'center',
      height: 160,
      width: '100%',
      },
    header: {
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 55,
      height: 160,
    },
    textHeading: {
      textAlign: 'center',
      marginTop: 20,
      color: 'white',
      fontSize: 24,
      fontWeight: 'bold',
      textShadowColor: 'rgba(0, 0, 0, 0.75)',
      textShadowOffset: {width: -1, height: 1},
      textShadowRadius: 10    
    },
    textUser: {
      fontSize: 20,
      color: 'white',
      paddingBottom: 6
    },
    list: {
      width: 500,
      height: 25,
      marginLeft: 0,
      marginRight: 0,
      backgroundColor: '#ffffe0'
    },
    listText: {
      fontSize: 20,
      color: '#323232',
      fontSize: 24,
      fontWeight: '300',
      textShadowColor: 'rgba(0, 0, 0, 0.75)',
      textShadowOffset: {width: -1, height: 1},
      textShadowRadius: 10,
      paddingLeft: 10,
      textTransform: 'uppercase'
    },
    errorView: {
      alignItems: 'center',
      textAlign: 'center',
      marginTop: 200,
    },
    errorText: {
        fontSize: 20
    },
    listContainer: {
        height: 600,
        backgroundColor: '#ffffe0'
    },
    noteContainer: {
      height: 75,
    },
    linearGradientNote: {
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 5,
      height: 80,
      width: '100%',
    },
    noteText: {
      textAlign: 'center',
      color: 'white',
      fontSize: 24,
      fontWeight: 'bold',
      textShadowColor: 'rgba(0, 0, 0, 0.75)',
      textShadowOffset: {width: -1, height: 1},
      textShadowRadius: 10    
    }
  });

  export default styles;