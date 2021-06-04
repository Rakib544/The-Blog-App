import React, { useEffect, useState } from 'react';

import { TouchableOpacity, Image, View, Text, Dimensions, ScrollView } from 'react-native';
import { SharedElement } from 'react-navigation-shared-element';

//icon
import { Feather } from '@expo/vector-icons';
import { addToBookMark } from '../redux/Actions/Actions';
import { useDispatch } from 'react-redux';

const DetailScreen = (props) => {
    const [totalLikes, setTotalLikes] = useState(null)
    const [isLike, setIsLike] = useState(false)
    const dispatch = useDispatch();

    const { data } = props.route.params;
    useEffect(() => {
        setTotalLikes(data.likes)
    }, [])

    const { width, height } = Dimensions.get('window')

    const handleLike = () => {
        if (isLike) {
            setTotalLikes(totalLikes - 1)
        } else {
            setTotalLikes(totalLikes + 1);
        }

        setIsLike(!isLike)
    }
    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>

            <View>

                <SharedElement id={`item.${data.id}.photo`}>
                    <Image source={{ uri: data.image }} style={{ width: '100%', height: height - 450, borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }} resizeMode="cover" />
                </SharedElement>

                <View style={{ flexDirection: 'row', alignItems: 'center', position: 'absolute', bottom: 14, left: 10 }}>

                    <SharedElement id={`item.${data.id}.profilePic`}>
                        <Image
                            source={{ uri: data.profilePic }}
                            style={{ width: 60, height: 60, borderRadius: 10, marginRight: 14 }}
                            resizeMode="cover"
                        />
                    </SharedElement>

                    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingRight: 20 }}>

                        <View>
                            <SharedElement>
                                <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>{data.username}</Text>
                            </SharedElement>
                            <SharedElement>
                                <Text style={{ color: 'white', fontSize: 14, }}>{data.readtime} read</Text>
                            </SharedElement>
                        </View>

                        <TouchableOpacity onPress={() => dispatch(addToBookMark(data))}>
                            <Feather name='bookmark' size={24} color='white' />
                        </TouchableOpacity>

                    </View>

                </View>

            </View>

            <ScrollView style={{ paddingHorizontal: 30, paddingTop: 14 }}>

                <SharedElement id={`item.${data.id}.text`} style={{ width: width - 30, marginBottom: 14 }}>
                    <Text style={{ color: 'black', fontSize: 22, fontWeight: 'bold', lineHeight: 32 }}>{data.title}</Text>
                </SharedElement>

                <Text style={{ fontSize: 14, lineHeight: 28, textAlign: 'justify', opacity: 0.5 }}>
                    {data.description}
                   </Text>

               
                <View style={{ marginVertical: 25, paddingBottom: 20, flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <TouchableOpacity style={{ padding: 12, flexDirection: 'row', alignItems: 'center' }} onPress={handleLike}>
                        <Feather name='heart' size={16} color={isLike? 'deepskyblue': 'black'}/>
                        <Text style={{ fontWeight: 'normal', textAlign: 'center', marginHorizontal: 10 }}>{totalLikes}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ padding: 12, width: 100, backgroundColor: 'orange', borderRadius: 10 }}>
                        <Text style={{ color: 'white', fontWeight: 'bold', textAlign: 'center' }}>Follow</Text>
                    </TouchableOpacity>
                </View>

            </ScrollView>

            <View style={{ position: 'absolute', top: 40, left: 10 }}>

                <TouchableOpacity onPress={() => props.navigation.goBack()}>
                    <Feather name='arrow-left' size={24} color='white' />
                </TouchableOpacity>

            </View>

        </View>
    );
};

export default DetailScreen;