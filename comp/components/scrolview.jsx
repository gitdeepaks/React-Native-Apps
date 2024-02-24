import {Image, ScrollView, Text, View} from 'react-native';
import React from 'react';

const ScrolView = () => {
  return (
    <View>
      <ScrollView
        showsVerticalScrollIndicator={true}
        horizontal={true}
        showsHorizontalScrollIndicator={true}>
        <Image
          style={{width: 1500, height: 1500}}
          source={{
            uri: 'https://images.pexels.com/photos/18262756/pexels-photo-18262756/free-photo-of-smiling-woman-carrying-basket-on-back-with-flowers.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          }}
        />
        <Image
          style={{width: 1500, height: 1500}}
          source={{
            uri: 'https://images.pexels.com/photos/18262756/pexels-photo-18262756/free-photo-of-smiling-woman-carrying-basket-on-back-with-flowers.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          }}
        />
        <Image
          style={{width: 1500, height: 1500}}
          source={{
            uri: 'https://images.pexels.com/photos/18262756/pexels-photo-18262756/free-photo-of-smiling-woman-carrying-basket-on-back-with-flowers.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          }}
        />
      </ScrollView>
    </View>
  );
};

export default ScrolView;
