import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingTop: 30,
    alignItems: 'center'
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    position: 'relative',
    left: -58
  },
  headerTitle: {
    color: "#161616",
    fontWeight: "bold",
    fontSize: 30,
    marginLeft: 110,
  },
  barsHorizontal: {
    width: "96%",
    height: 2,
    backgroundColor: "#c7c7c7b8",
    marginTop: 10,
    marginBottom: 20,
  },
  containerAlertBox: {
    alignItems: 'center'
  },
  alertBox: {
    backgroundColor: "#181818",
    height: 250,
    width: 380,
    marginBottom: 20,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  iconAlertBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  userIcon: {
    height: 45,
    width: 45,
    borderRadius: 100
  },
  alertBoxHeader: {
    flexDirection: 'row'
  },
  dataText: {
    color: '#626262'
  },
  headerRight: {
    width:  270,
    alignItems: 'flex-end'
  },
  alertBoxTitle: {
    color: '#fff',
    fontWeight: 'bold',
    marginTop: 10,
    fontSize: 20
  },
  alertBoxMessage: {
    marginTop: 10,
    color: '#b6b6b6'
  },
  userName: {
    color: '#fff',
    fontWeight: 'bold',
    marginLeft: 10,
    fontSize: 17
  },
  boxFlags: {
    backgroundColor: '#282828',
    height: 20,
    width: 60,
    borderRadius: 5,
    position: 'absolute',
    left: 300,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default styles;
