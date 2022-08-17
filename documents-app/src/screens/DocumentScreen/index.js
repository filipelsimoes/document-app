import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import CustomStatusBar from '../../components/status-bar'
import { SafeAreaView, SafeAreaProvider, useSafeAreaInsets} from 'react-native-safe-area-context';
import DocumentList from '../../components/list';

export default function DocumentScreen() {


    const teste = [
        { title: 'ola',
    version: 'adeus'} ,{ title: 'ola1',
    version: 'adeus'} ,{ title: 'ola2',
    version: 'adeus'} ,{ title: 'ola3',
    version: 'adeus'}
    ]

  return (
      <SafeAreaProvider>
        <CustomStatusBar backgroundColor={'white'}/>
        <View style={styles.header}>
            <Text>Documents</Text>
        </View>

        <View style={styles.body}>
            <DocumentList data={teste}/> 
        </View>
        <TouchableOpacity>
             <View style={styles.addButton}>
                <Text style={styles.addButtonLabel}>Add document</Text>
            </View>
        </TouchableOpacity>
       
      </SafeAreaProvider>
     
  )
}

const styles = StyleSheet.create({
    body: {
        display: 'flex',
        flex: 1,
    },
    header: {
        padding: 20,
        backgroundColor: 'white',
    },
    addButton: {
        // paddingHorizontal: 100,
        paddingVertical: 10, 
        width: '90%',
        position: 'absolute',
        bottom: 30,
        backgroundColor: '#4267B2',
        alignSelf: 'center',
        borderRadius: 5
    },
    addButtonLabel: {
        textAlign: 'center', 
        color: 'white',
        fontWeight: '500'
    }
})