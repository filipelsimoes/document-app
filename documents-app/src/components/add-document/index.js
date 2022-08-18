import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React, {useState, useEffect} from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import DocumentPicker, {
  DirectoryPickerResponse,
  DocumentPickerResponse,
  isInProgress,
  types,
} from 'react-native-document-picker'

export default function AddDocument({handleClose}) {

    const [result, setResult] = useState();

    const [name, setName] = useState('');
    console.log("name -> ", name);
    const [version, setVersion] = useState('');

    const handleFile = async () => {
         try {
            const pickerResult = await DocumentPicker.pickSingle({
              presentationStyle: 'fullScreen',
              copyTo: 'cachesDirectory',
            })
            setResult([pickerResult])
          } catch (e) {
            handleError(e)
          }
    }

     const handleError = (err) => {
        if (DocumentPicker.isCancel(err)) {
            console.warn('cancelled')
             // User cancelled the picker, exit any dialogs or menus and move on
         } else if (isInProgress(err)) {
            console.warn('multiple pickers were opened, only the last will be considered')
         } else {
            throw err
        }
    }
    useEffect(() => {
        console.log("name 2 -> ", name)
     } , [name]);

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
            <Text style={styles.labelTitle}>Add document</Text>
            <TouchableOpacity onPress={() => handleClose()}>
                <Icon name="close" size={20} color="black"></Icon>
            </TouchableOpacity>
      </View>
      <View>
          <Text style={styles.labelSubTitle}>Document informations</Text>
          <Text>Name</Text>
           <TextInput style={styles.textInput} placeholder="Ex: John Doe" onChangeText={(event) => setName(event)} />
          <Text>Version</Text>
          <TextInput style={styles.textInput} placeholder="version X.X.X" onChangeText={(event) => setName(event)} />
          <Text>File</Text>
          <TouchableOpacity onPress={() => handleFile()}>
              <View style={styles.buttonFile}>
              <Text style={styles.labelButtonFile}>Choose file</Text>
             <Icon name="save" size={20} color="#6495ED" style={{fontWeight: '900'}}></Icon>
              </View>
            </TouchableOpacity>
             <TouchableOpacity onPress={() => handleFile()}>
              <View style={styles.buttonSubmit}>
              <Text style={styles.labelButtonSumbit}>Sumbit</Text>
              </View>
            </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        margin: 20,
        paddingTop: 15
    },
    titleContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'white'
    },
    labelTitle: {
        fontSize: 24,
        fontWeight: '500',
        marginBottom: 10
    },
    labelSubTitle: {
        fontSize: 16,
        fontWeight: '500',
        marginBottom: 10
    },
    textInput: {
        padding: 5,
        borderWidth: 1,
        borderColor: "#cccccc",
        borderRadius: 5,
        marginVertical: 10
    },
    buttonFile: {
        padding: 10,
        width: '33%',
        backgroundColor: 'white',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#6495ED',
        flexDirection: 'row', 
        justifyContent: 'space-between',
        marginTop: 10
    }, 
    labelButtonFile: {
        color: '#6495ED',
        fontWeight: '900',
        fontSize: 12,
        alignSelf: 'center'
    } ,
    buttonSubmit: {
        padding: 10,
        width: '100%',
        backgroundColor: '#6495ED',
        borderRadius: 10,
        flexDirection: 'row', 
        justifyContent: 'center',
        marginTop: 10
    }, 
    labelButtonSumbit: {
        color: 'white',
        fontWeight: '400'
    }
})