import React from 'react';
import { Text, View } from 'react-native';
import { useSelector } from 'react-redux';

const BookMark = () => {
    const bookMarkBlogs = useSelector(state => state.bookmarkBlogs)
    return (
        <View>
            <Text>Hello This is bookmark page</Text>
            {
                bookMarkBlogs?.map(blog => <Text key={blog.id}>{blog.title}</Text>)
            }
        </View>
    );
};

export default BookMark;