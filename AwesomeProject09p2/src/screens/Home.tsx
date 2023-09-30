import {FlatList, Pressable, StyleSheet, View} from 'react-native';
import React from 'react';

//React Navigation
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../App';
import {ProductItems} from '../components/index';
import {Seperators} from '../components/index';

import {PRODUCTS_LIST} from '../data/constants';

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

const Home = ({navigation}: HomeProps) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={PRODUCTS_LIST}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={Seperators}
        renderItem={({item}) => (
          <Pressable
            onPress={() => {
              navigation.navigate('Details', {product: item});
            }}>
            <ProductItems product={item} />
          </Pressable>
        )}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',

    padding: 12,
    backgroundColor: '#FFFFFF',
  },
});
