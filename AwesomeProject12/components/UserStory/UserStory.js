import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';
import {getFontFamity} from '../../assets/fonts/helper';
import UserProfileIMage from '../UserProfileImage/UserProfileIMage';

const UserStory = props => {
  return (
    <View style={styles.storyContainer}>
      <UserProfileIMage profileImage={props.profileImage} />
      <Text style={styles.frstName}>{props.fistName}</Text>
    </View>
  );
};

UserStory.propTypes = {
  fistName: PropTypes.string.isRequired,
  profileImage: PropTypes.any.isRequired,
};

export default UserStory;

const styles = StyleSheet.create({
  storyContainer: {
    marginRight: 20,
    alignItems: 'center',
  },
  frstName: {
    fontFamily: getFontFamity('Inter', '400'),
    fontSize: 14,
    color: '#1E1F28',
    marginTop: 8,
    textAlign: 'center',
  },
  userImageCont: {
    borderColor: '#F35BAC',
    borderWidth: 1,
    padding: 2,
    borderRadius: 100,
  },
  image: {
    width: 65,
    height: 65,
  },
});
