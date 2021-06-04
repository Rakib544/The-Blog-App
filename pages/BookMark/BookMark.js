import React from 'react';
import { Text, View, ScrollView, FlatList, TouchableOpacity, Image } from 'react-native';
import { useSelector } from 'react-redux';
import { Feather } from '@expo/vector-icons'

const BookMark = ({ navigation }) => {
    const bookMarkBlogs = useSelector(state => state.bookmarkBlogs)
    return (
        <ScrollView>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 30, paddingVertical: 30 }}>
                <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Your Bookmark Blog List</Text>
            </View>

            <FlatList
                data={bookMarkBlogs}
                keyExtractor={item => item.id}
                renderItem={({ item }) => {

                    return (
                        <TouchableOpacity onPress={() => navigation.push('DetailScreen', { data: item })}>
                            <View style={{ flexDirection: 'row', paddingBottom: 30, paddingLeft: 30, alignItems: 'center' }}>

                                <View style={{ marginRight: 30 }}>
                                    <Image source={{ uri: item.image }} style={{ width: 100, height: 100, borderRadius: 10 }} />
                                </View>

                                <View style={{ width: '60%' }}>

                                    <Text style={{ color: 'orange', fontWeight: 'bold', marginBottom: 4 }}>{item.topic}</Text>
                                    <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>{item.title}</Text>

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

export default BookMark;