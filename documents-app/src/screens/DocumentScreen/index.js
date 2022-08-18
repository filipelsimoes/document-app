import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, {useState, useRef, useEffect} from 'react'
import CustomStatusBar from '../../components/status-bar'
import { SafeAreaView, SafeAreaProvider, useSafeAreaInsets} from 'react-native-safe-area-context';
import DocumentList from '../../components/list';
import Icon from 'react-native-vector-icons/FontAwesome';
import RBSheet from "react-native-raw-bottom-sheet";
import AddDocument from '../../components/add-document';

const axios = require('axios').default;

export default function DocumentScreen() {

    const refRBSheet = useRef();

    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const [documents, setDocuments] = useState();

    const handleClose = () => {
        refRBSheet.current.close();
        setIsDrawerOpen(false);
    }

    const handleOpen = () => {
        refRBSheet.current.open();
        setIsDrawerOpen(true);
    }

    const getDocuments = () => {
        axios.get('http://localhost:8080/documents')
            .then(function (response) {
                // handle success
                setDocuments(response.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
  })
    }

    useEffect(() => {
        getDocuments();
    }, [])

  return (
      <SafeAreaProvider>
        <CustomStatusBar backgroundColor={'white'}/>
        <View style={styles.header}>
            <Text style={styles.labelTitle}>Documents</Text>
        </View>

        <View style={[styles.body, isDrawerOpen ? {opacity: 0.5} : {opacity: 1}]}>
            <DocumentList data={documents}/> 
        </View>
        <TouchableOpacity onPress={() => handleOpen()}>
             <View style={styles.addButton}>
                 <Icon name="plus" size={20} color="white"></Icon>
                <Text style={styles.addButtonLabel}>Add document</Text>
            </View>
        </TouchableOpacity>

        <RBSheet
            ref={refRBSheet}
            height={450}
            closeOnDragDown={false}
            closeOnPressMask={false}
            customStyles={{
            wrapper: {
                backgroundColor: "transparent"
            },
            draggableIcon: {
                backgroundColor: "#000"
            },
            container: {
                borderTopLeftRadius: 70,
                borderTopRightRadius: 70,
                borderWidth: 0
            }
            }}
        >
         <AddDocument handleClose={handleClose}/>
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
    },
    labelTitle: {
        fontSize: 28,
        fontWeight: '500'
    }
})