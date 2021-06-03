import * as React from 'react' 
import {Image, Text, View, FlatList, Dimensions, StyleSheet} from 'react-native'

// Packages
import { SharedElement } from 'react-navigation-shared-element';
import TouchableScale from 'react-native-touchable-scale';

//Sample Data
import {data, profile, popular} from '../data' 

// Icons
import {Feather} from '@expo/vector-icons'


const MainScreen = ({navigation}) => {

    const {width,height} = Dimensions.get('window')

    return (
      <View style={{flex: 1}}>

      {/* Header */}

      <View style={{marginTop: 40, marginBottom: 30,paddingHorizontal: 30, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
      <View>
      <Text style={{fontSize: 14,fontWeight: '700', color: 'orange', textTransform: 'uppercase'}}>{profile.date}</Text>
        <Text style={{fontSize: 36, fontWeight: 'bold'}}>Blog</Text>
      </View>
      <View>
        <Image source={{uri: profile.profilePic}} style={{width: 55, height: 55, borderRadius: 10}} />
        <View style={{height: 14, width: 14, borderRadius: 6, position: 'absolute', backgroundColor: 'red', right: -4, top: -4, borderWidth: 2, borderColor: 'white'}}></View>
      </View>
      </View>

      {/* Header End */}

      
      </View>
    );
}

export default MainScreen;