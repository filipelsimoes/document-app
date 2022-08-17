import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';

export default function DocumentBox({document}) {

    console.log("Document -> ", document);
  return (
    <View style={styles.container}>
        <View style={styles.titleContainer}>
            <Text style={styles.titleLabel} >{document.Title}</Text> 
            <Text style={styles.versionLabel}>Version {document.Version}</Text> 
        </View>
        <View style={styles.contributorsContainer}>
            <View>
                <View style={styles.contributorsContainerTitle}>
                    <Icon name="group" size={16} color="black"></Icon>
                <Text>Contributors</Text>
                </View>
                
                <View>
                    {document.Contributors.map((item) => {
                        return ( <Text>{item.Name}</Text>)
                    })}
                </View>
            </View>
            <View>
                  <View style={styles.contributorsContainerTitle}>
                    <Icon name="file" size={16} color="black"></Icon>
                <Text>Attachments</Text>
                </View>
               <View>
                    {document.Attachments.map((item) => {
                        return ( <Text>{item}</Text>)
                    })}
                </View>
            </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.3,
        shadowRadius: 1,
        elevation: 5,
        padding: 10,
        backgroundColor: 'white',
        marginTop: 20,
        borderRadius: 1

    },
    titleContainer: {
        display: 'flex',
        flexDirection: 'row',
    },
    contributorsContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10
    },
    contributorsContainerTitle: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 10,
        justifyContent: 'space-evenly',
        width: '60%',
        marginBottom: 10
    },
    titleLabel: {
        fontWeight: '600',
        marginRight: 5
    }, 
    versionLabel: {
        fontWeight: '600',
        marginRight: 5,
        color: '#808080',
        fontSize: 12,
        alignSelf: 'center'
    }
})