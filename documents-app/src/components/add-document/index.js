import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import DocumentPicker, {
  DirectoryPickerResponse,
  DocumentPickerResponse,
  isInProgress,
  types,
} from 'react-native-document-picker'

export default function AddDocument() {

    const [result, setResult] = useState();

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

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
            <Text style={styles.labelTitle}>Add document</Text>
            <Icon name="close" size={20} color="black"></Icon>
      </View>
      <View>
          <Text>Document informations</Text>
          <Text>Name</Text>
           <TextInput style={styles.textInput}/>
          <Text>Version</Text>
          <TextInput style={styles.textInput}/>
          <Text>File</Text>
          <TouchableOpacity onPress={() => handleFile()}><Text>Choose file</Text></TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        margin: 20
    },
    titleContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'white'
    },
    labelTitle: {
        fontSize: 16,
        fontWeight: '500'
    },
    textInput: {
        padding: 5,
        borderWidth: 1,
        borderRadius: 5,
        marginVertical: 10
    }
})