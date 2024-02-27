import {FlatList, SafeAreaView, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Text} from 'react-native';
import Title from './components/Title/Title';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEnvelope} from '@fortawesome/free-regular-svg-icons';
import globalStyles from './assets/styles/globalStyles';
import UserStory from './components/UserStory/UserStory';

const App = () => {
  const useStories = [
    {
      fistName: 'Triv',
      id: 1,
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      fistName: 'Simen',
      id: 2,
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      fistName: 'SupeNova',
      id: 3,
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      fistName: 'Romario',
      id: 4,
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      fistName: 'Deepak',
      id: 5,
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      fistName: 'Antonio',
      id: 6,
      profileImage: require('./assets/images/default_profile.png'),
    },
  ];
  return (
    <SafeAreaView>
      <View style={globalStyles.header}>
        <Title title={"Let's Explore"} />
        <TouchableOpacity style={globalStyles.messageIcon}>
          <FontAwesomeIcon icon={faEnvelope} size={20} />
          <View style={globalStyles.messageNumberContainer}>
            <Text style={globalStyles.messageNumber}>3</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={globalStyles.userContainer}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          data={useStories}
          renderItem={({item}) => (
            <UserStory
              fistName={item.fistName}
              profileImage={item.profileImage}
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default App;
