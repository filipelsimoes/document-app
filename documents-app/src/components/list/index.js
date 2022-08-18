import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import DocumentBox from '../document'

export default function DocumentList({data}) {

    console.log("length 2 -> ", data.length);

  return (
    <View style={styles.listContainer}>
                <FlatList 
                    data={data}
                    keyExtractor={(item, index) => {
                        console.log("item.id -> ", item.ID)
                        return index}}
                    renderItem={({item, index}) => <DocumentBox document={item} key={index}/>}
                />
    </View> 
)}

const styles = StyleSheet.create({
    listContainer: {
        display: 'flex',
        marginHorizontal: 20,
        width: '100%'
    },
})