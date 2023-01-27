import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 15,
  },
  containerOpen: {
    alignItems: 'center',
    height: '100%',
  },
  search: {
    flexDirection: 'row',
    backgroundColor: '#292929',
    height: 50,
    width: '100%',
    borderRadius: 10,
    
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10
  },
  searchInput: {
    height: 50,
    marginLeft: 10,
    width: '79%',
    color: '#c4c4c4'
  },
  buttonSearch: {
    backgroundColor: '#3e3e3e',
    height: 35,
    width: 35,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 7,
    marginLeft: 5
  }
});

export default styles