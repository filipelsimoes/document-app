import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import DocumentBox from '../document'

export default function DocumentList({data}) {

  return (
    <View style={styles.listContainer}>
        {data.length !== 0 && 
                <FlatList 
                    data={data}
                    renderItem={({item}) => {
                        return (<DocumentBox document={item} key={item.ID}/>)}}
                    bounces={false}
                />
        }
    </View> 
)}

const styles = StyleSheet.create({
    listContainer: {
        display: 'flex',
        marginHorizontal: 20,
        width: '100%',
        marginBottom: 100
    },
})