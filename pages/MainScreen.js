import React from 'react'
import { View, Dimensions } from 'react-native';

//Sample Data
import { data, profile, popular } from '../data'

import Header from '../components/Header/Header';
import SharedBlogs from '../components/SharedBlogs/SharedBlogs';
import PopularBlogs from '../components/PopularBlogs/PopularBlogs';
import Testing from '../components/Testing/Testing';


const MainScreen = ({ navigation }) => {

  return (
    <View style={{ flex: 1 }}>

      <Header profile={profile} />

      {/* <SharedBlogs data={data} /> */}
      <Testing />

      <PopularBlogs popular={popular} navigation={navigation} />

    </View>
  );
}

export default MainScreen;