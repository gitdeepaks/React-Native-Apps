import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';
import {getFontFamity} from '../../assets/fonts/helper';

const UserProfileIMage = props => {
  return (
    <View style={styles.userImageCont}>
      <Image source={props.profileImage} style={styles.image} />
    </View>
  );
};

UserProfileIMage.propTypes = {
  profileImage: PropTypes.any.isRequired,
};

export default UserProfileIMage;

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
