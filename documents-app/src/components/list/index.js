import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import DocumentBox from '../document'

export default function DocumentList({data}) {
  return (
    <View style={styles.listContainer}>
                <FlatList 
                    data={data}
                    keyExtractor={item => item.title}
                    renderItem={({item}) => <DocumentBox document={item} key={item.title}/>}
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