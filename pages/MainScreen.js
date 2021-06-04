import React from 'react'
import { View } from 'react-native';

//Sample Data
import { data, profile, popular } from '../data'

import Header from '../components/Header/Header';
import PopularBlogs from '../components/PopularBlogs/PopularBlogs';


const MainScreen = ({ navigation }) => {

  return (
    <View style={{ flex: 1 }}>

      <Header profile={profile} />

      <PopularBlogs popular={popular} navigation={navigation} />

    </View>
  );
}

export default MainScreen;