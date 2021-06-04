import React from 'react';
import { Image, Text, View, FlatList, TouchableOpacity, ScrollView } from 'react-native'
import { Feather } from '@expo/vector-icons'

const PopularBlogs = ({ data, navigation }) => {
    return (

        <ScrollView>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 30, paddingVertical: 30 }}>
                <Text style={{ fontSize: 22, fontWeight: 'bold' }}>Popular</Text>
                <Text style={{ fontWeight: 'bold', color: 'deepskyblue' }}>Show All</Text>
            </View>

            <FlatList
                data={data}
                keyExtractor={item => item.id}
                renderItem={({ item }) => {

                    return (
                        <TouchableOpacity onPress={() => navigation.push('DetailScreen', { data: item })}>
                            <View style={{ flexDirection: 'row', paddingBottom: 30, paddingLeft: 30, alignItems: 'center' }}>

                                <View style={{ marginRight: 30 }}>
                                    <Image source={{ uri: item.image }} style={{ width: 100, height: 100, borderRadius: 10 }} />
                                </View>

                                <View style={{ width: '60%' }}>

                                    <Text style={{ color: 'deepskyblue', fontWeight: 'bold', marginBottom: 4 }}>{item.topic}</Text>
                                    <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 10 }}>{item.title}</Text>

                                    <View style={{ flexDirection: 'row', alignItems: 'center', opacity: 0.4 }}>

                                        <View style={{ flexDirection: 'row', marginRight: 16, alignItems: 'center' }}

                                        >
                                            <Feather name='book-open' size={14} color='#000' />
                                            <Text style={{ marginHorizontal: 4, fontSize: 12 }}>{item.readtime} Read</Text>
                                        </View>

                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                            <Feather name='thumbs-up' size={14} color='#000' />
                                            <Text style={{ marginHorizontal: 4, fontSize: 12 }}>{item.likes} Likes</Text>
                                        </View>

                                    </View>
                                </View>

                            </View>
                        </TouchableOpacity>
                    )
                }}
            />
        </ScrollView>
    );
};

export default PopularBlogs;