import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, {useState, useRef} from 'react'
import CustomStatusBar from '../../components/status-bar'
import { SafeAreaView, SafeAreaProvider, useSafeAreaInsets} from 'react-native-safe-area-context';
import DocumentList from '../../components/list';
import Icon from 'react-native-vector-icons/FontAwesome';
import RBSheet from "react-native-raw-bottom-sheet";
import AddDocument from '../../components/add-document';

export default function DocumentScreen() {

    const refRBSheet = useRef();

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
        <TouchableOpacity onPress={() => refRBSheet.current.open()}>
             <View style={styles.addButton}>
                 <Icon name="plus" size={20} color="white"></Icon>
                <Text style={styles.addButtonLabel}>Add document</Text>
            </View>
        </TouchableOpacity>

        <RBSheet
            ref={refRBSheet}
            height={450}
            closeOnDragDown={true}
            closeOnPressMask={false}
            customStyles={{
            wrapper: {
                backgroundColor: "transparent"
            },
            draggableIcon: {
                backgroundColor: "#000"
            }
            }}
        >
         <AddDocument />
        </RBSheet>
      
 
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
        paddingVertical: 10, 
        width: '90%',
        position: 'absolute',
        bottom: 30,
        backgroundColor: '#4267B2',
        alignSelf: 'center',
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent:'center'
    },
    addButtonLabel: {
        textAlign: 'center', 
        color: 'white',
        fontWeight: '500',
        marginLeft: 5
    }
})