import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1d1d1d',
    height: '100%',
    width: '100%',
    paddingTop: 30,
    paddingLeft: 10,
    paddingRight: 10,
    alignItems: 'center'
  },
  viewProfile: {
    backgroundColor: '#161616',
    height: 190,
    width: '100%',
    borderRadius: 30,
    paddingLeft: 15,
    paddingRight: 15,
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 10
  },
  userIcon: {
    height: 55,
    width: 55,
    backgroundColor: '#d0d0d0',
    borderRadius: 100
  },
  textApresent: {
    marginLeft: 10,
    color: '#838383',
    fontSize: 18
  },
  textUsername: {
    marginTop: 10,
    color: '#ececec',
    fontWeight: 'bold'
  },
  viewButtonsHeader: {
    alignItems: 'center',
    flexDirection: 'row',
    position: 'absolute',
    left: 270,
    top: -20,
  },
  buttonHeader: {
    height: 45,
    width: 45,
    borderRadius: 100,
    backgroundColor: '#2e2e2e',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
  },
  buttonHeaderText: {
    color: '#dddddd'
  },
  boxCommunity: {
    marginBottom: 20,
    width: 400
  },
  headerBox: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center'
  },
  titleBox: {
    color: '#c2c2c2',
    fontWeight: 'bold',
    fontSize: 18
  },
  resultBox: {
    backgroundColor: '#181818',
    width: '100%',
    height: 250,
    borderRadius: 15,
    marginTop: 5
  }
});

export default styles