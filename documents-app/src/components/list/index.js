import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import DocumentBox from '../document'



export default function DocumentList({data, refreshing, onRefresh}) {



  return (
    <View style={styles.listContainer}>
        {data.length !== 0 && 
                <FlatList 
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                    data={data}
                    contentContainerStyle={{ alignItems: 'center'}}
                    renderItem={({item}) => <DocumentBox document={item} key={item.ID}/>}      
                />
        }
    </View> 
)}

const styles = StyleSheet.create({
    listContainer: {
        marginBottom: 100,
    },
})