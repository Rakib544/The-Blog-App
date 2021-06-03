import React from 'react';
import { View, Text, Image } from 'react-native';

const Header = ({ profile }) => {
    
    return (
        <View style={{ marginTop: 40, marginBottom: 30, paddingHorizontal: 30, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <View>
                <Text style={{ fontSize: 14, fontWeight: '700', color: 'orange', textTransform: 'uppercase' }}>{new Date().toDateString()}</Text>
                <Text style={{ fontSize: 36, fontWeight: 'bold' }}>Blog</Text>
            </View>
            <View>
                <Image source={{ uri: profile.profilePic }} style={{ width: 55, height: 55, borderRadius: 10 }} />
                <View style={{ height: 14, width: 14, borderRadius: 6, position: 'absolute', backgroundColor: 'red', right: -4, top: -4, borderWidth: 2, borderColor: 'white' }}></View>
            </View>
        </View>

    );
};

export default Header;