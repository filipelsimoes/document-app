import { StyleSheet, Text, View, StatusBar, FlatList } from 'react-native'
import React from 'react'
import CustomStatusBar from '../../components/status-bar'
import DocumentBox from '../../components/document'
import { SafeAreaView, SafeAreaProvider, useSafeAreaInsets} from 'react-native-safe-area-context';

export default function DocumentScreen() {


    const teste = [
        { title: 'ola',
    version: 'adeus'} ,{ title: 'ola',
    version: 'adeus'} ,{ title: 'ola',
    version: 'adeus'} ,{ title: 'ola',
    version: 'adeus'}
    ]

  return (
      <SafeAreaProvider>
        <CustomStatusBar backgroundColor={'white'}/>
        <View style={styles.header}>
            <Text>Documents</Text>
        </View>

        <View style={styles.body}>
            <View style={styles.listContainer}>
                <FlatList 
                    data={teste}
                    keyExtractor={item => item.title}
                    renderItem={({item}) => <DocumentBox document={item}/>}
                />
            </View>  
        </View>
      </SafeAreaProvider>
     
  )
}

const styles = StyleSheet.create({
    body: {
        display: 'flex',
        flex: 1,
    },
    listContainer: {
        display: 'flex',
        marginHorizontal: 20,
    },
    header: {
        padding: 20,
        backgroundColor: 'white',
    }
})