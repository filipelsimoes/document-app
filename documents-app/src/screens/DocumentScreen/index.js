import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, {useState, useRef, useEffect} from 'react'
import CustomStatusBar from '../../components/status-bar'
import { SafeAreaProvider} from 'react-native-safe-area-context';
import DocumentList from '../../components/list';
import Icon from 'react-native-vector-icons/FontAwesome';
import RBSheet from "react-native-raw-bottom-sheet";
import AddDocument from '../../components/add-document';
import Toast from 'react-native-toast-message';
import notifee from '@notifee/react-native';
import Notifications from '../../components/notifications';
import { colors } from '../../colors';

const axios = require('axios').default;

export default function DocumentScreen(props) {

    const refRBSheet = useRef();

    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const [documents, setDocuments] = useState([]);

    const [numberOfNotifications, setNumberOfNotifications] = useState(props.route.params.notifications.length);

    const handleClose = () => {
        refRBSheet.current.close();
        setIsDrawerOpen(false);
    }

    const handleOpen = () => {
        refRBSheet.current.open();
        setIsDrawerOpen(true);
    }

    const getDocuments = async () => {
        setIsLoading(true)
        await axios.get('http://localhost:8080/documents')
            .then((response) => {
                setDocuments(response.data);
                setIsLoading(false);
            })
            .catch((error) => {
                console.log(error);
        })
    }

    const handleAddDocument = (name, version, files) => {
        setDocuments(documents => [ {Title: name, Version: version, Attachments: files}, ...documents]);
        handleClose();
        showToast();
        onDisplayNotification(name, version);
        setNumberOfNotifications(numberOfNotifications + 1);
    }

    async function onDisplayNotification(name, version) {
        await notifee.requestPermission()

        await notifee.displayNotification({
        title: 'Document created',
        body: 'Document ' + name + ' created with version ' + version,
        });
    }

    const handleClickNotifications = async () => {
        await notifee.requestPermission()

        props.route.params.notifications.forEach( async (notification) => {
             await notifee.displayNotification({
                title: 'Document created - ' + notification.DocumentTitle,
                body: 'Created at ' + handleDate(notification.Timestamp) + ' min' + ' by ' + notification.UserName,
                });
        })
    }

    const handleDate = (timestamp) => {
        let howLong = Math.abs(new Date() - new Date(timestamp));
        return Math.round(howLong/1000/60);
    }

    const showToast = () => {
        Toast.show({
            type: 'success',
            text1: 'Document created!',
            text2: 'Check the document on the top of the list',
            position: 'bottom'
        });
    }

    const wait = (timeout) => {
        return new Promise(resolve => setTimeout(resolve, timeout));
    }

    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        wait(2000).then(() => {
            getDocuments();
            setRefreshing(false)});
    }, []);

    useEffect(() => {
        getDocuments();

    }, [])

  return (
      <SafeAreaProvider>
        <CustomStatusBar backgroundColor={colors.white}/>
        <View style={styles.header}>
            <Text style={styles.labelTitle}>Documents</Text>
            <Notifications  numberOfNotifications={numberOfNotifications} handleClick={handleClickNotifications} />
        </View>

        <View style={[styles.body, isDrawerOpen ? {opacity: 0.5} : {opacity: 1}]}>
            {!isLoading ? 
                <DocumentList data={documents} refreshing={refreshing} onRefresh={onRefresh}/>  : <Text>Loading</Text>
            }
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
            container: {
                borderTopLeftRadius: 70,
                borderTopRightRadius: 70,
                borderWidth: 0
            }
            }}
        >
         <AddDocument handleClose={handleClose} handleAddDocument={handleAddDocument}/>
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
        backgroundColor: colors.white,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    addButton: {
        paddingVertical: 10, 
        width: '90%',
        position: 'absolute',
        bottom: 30,
        backgroundColor: colors.blue_facebook,
        alignSelf: 'center',
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent:'center'
    },
    addButtonLabel: {
        textAlign: 'center', 
        color: colors.white,
        fontWeight: '500',
        marginLeft: 5
    },
    labelTitle: {
        fontSize: 28,
        fontWeight: '500'
    }
})