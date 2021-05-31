import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import CardLayout from '../../components/CardLayout';
import Images from '../../constants/Images';

/**
 * @function
 */

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.Header}>
          <Text style={styles.HeaderText}>Home</Text>
          <View style={styles.VoteButton}>
            <TouchableOpacity style={styles.MarginBox}>
              <Image style={styles.Icon} source={Images.vote_button} />
              <Text style={styles.VoteText}>7/15 votes</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <CardLayout
            Image={Images.current_challange}
            Icon={Images.currentChallange_Icon}
            challanges="Current Challenges"
            status="2 Ongoing"
          />
          <CardLayout
            Image={Images.upcoming_challange}
            Icon={Images.upcoming_icon}
            challanges="Upcoming Challenges"
            status="2 Upcoming"
          />
          <CardLayout
            Image={Images.hall_of_fame}
            Icon={Images.fame_icon}
            challanges="Hall Of Fame"
            status="View Winners"
          />
        </View>
      </View>
    );
  }
}
export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  Header: {
    width: '100%',
    height: 75,
    backgroundColor: '#ff9803',
    shadowColor: 'rgba(32, 169, 149, 0.38)',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowRadius: 5,
    shadowOpacity: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  HeaderText: {
    fontSize: 17,
    fontWeight: '600',
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'left',
    color: 'white',
    marginTop: 30,
  },
  VoteButton: {
    width: 80,
    height: 26,
    borderRadius: 6,
    backgroundColor: 'white',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'white',
    position: 'absolute',
    right: 10,
    top: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Icon: {
    width: 15,
    height: 15,
  },
  VoteText: {
    fontSize: 11,
    fontWeight: 'normal',
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'left',
    color: '#000000',
    marginLeft: 5,
  },
  MarginBox: {
    flexDirection: 'row',
  },
});
