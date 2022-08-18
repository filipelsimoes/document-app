import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import DocumentBox from '../document'

export default function DocumentList({data}) {

    console.log("lenght 2 -> ", data.length);

  return (
    <View style={styles.listContainer}>
                <FlatList 
                    data={data}
                    keyExtractor={(item) => {
                        console.log("item.id -> ", item.ID)
                        return item.ID}}
                    renderItem={({item}) => <DocumentBox document={item} key={item.ID}/>}
                />
    </View> 
)}

const styles = StyleSheet.create({
    listContainer: {
        display: 'flex',
        marginHorizontal: 20,
        width: '90%'
    },
})