import React from 'react'
import { View } from 'react-native';

//Sample Data
import { data, profile } from '../data'

import Header from '../components/Header/Header';
import PopularBlogs from '../components/PopularBlogs/PopularBlogs';


const MainScreen = ({ navigation }) => {

  return (
    <View style={{ flex: 1 }}>

      <Header profile={profile} />

      <PopularBlogs data={data} navigation={navigation} />

    </View>
  );
}

export default MainScreen;