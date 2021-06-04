import React from 'react';
import { View, Text, Image } from 'react-native';

const Header = ({ profile }) => {
    
    return (
        <View style={{ marginTop: 30, marginBottom: 30, paddingHorizontal: 30, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <View>
                <Text style={{ fontSize: 14, fontWeight: '700', color: 'deepskyblue', textTransform: 'uppercase' }}>{new Date().toDateString()}</Text>
                <Text style={{ fontSize: 32, fontWeight: 'bold' }}>Blog</Text>
            </View>
            <View>
                <Image source={{ uri: profile.profilePic }} style={{ width: 30, height: 30, borderRadius: 50 }} />
                <View style={{ height: 14, width: 14, borderRadius: 6, position: 'absolute', backgroundColor: 'green', right: -4, top: -4, borderWidth: 2, borderColor: 'white' }}></View>
            </View>
        </View>

    );
};

export default Header;