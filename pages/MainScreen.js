import React from 'react'
import { View, Dimensions } from 'react-native'

// Packages
import { SharedElement } from 'react-navigation-shared-element';
// import TouchableScale from 'react-native-touchable-scale';

//Sample Data
import { data, profile, popular } from '../data'

import Header from '../components/Header/Header';
// import SharedBlogs from '../components/SharedBlogs/SharedBlogs';
import PopularBlogs from '../components/PopularBlogs/PopularBlogs';


const MainScreen = ({ navigation }) => {

  // const { width, height } = Dimensions.get('window')

  return (
    <View style={{ flex: 1 }}>

      <Header profile={profile} />

      {/* <SharedBlogs data={data} /> */}

      <PopularBlogs popular={popular} navigation={navigation} />

    </View>
  );
}

export default MainScreen;