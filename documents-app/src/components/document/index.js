import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';

export default function DocumentBox({document}) {

  return (
    <View style={styles.container}>
        <View style={styles.titleContainer}>
            <Text style={styles.titleLabel} >{document.Title}</Text> 
            <Text style={styles.versionLabel}>Version {document.Version}</Text> 
        </View>
        <View style={styles.bodyContainer}>
            <View style={styles.column}>
                <View style={styles.contributorsContainerTitle}>
                    <Icon name="group" size={16} color="black" style={styles.icons} ></Icon>
                <Text>Contributors</Text>
                </View>
                
                <View>
                    {document.Contributors && document.Contributors.map((item) => {
                        return ( <Text key={item.ID} style={styles.attachementsText}>{item.Name}</Text>)
                    })}
                </View>
            </View>
            <View style={styles.column}>
                  <View style={styles.attachementsContainerTitle}>
                    <Icon name="file" size={16} color="black" style={styles.icons} ></Icon>
                    <Text>Attachments</Text>
                </View>
               <View>
                    {document.Attachments && document.Attachments.map((item, index) => {
                        return (<View style={{flexDirection: 'row', flexGrow: 1, flex: 1}} key={index}>
                             <Text style={styles.attachementsText} >{item}</Text></View>)
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
        borderRadius: 1,
        width: '90%'

    },
    titleContainer: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    bodyContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    contributorsContainerTitle: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 10,
    }, 
     attachementsContainerTitle: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 10
    },
    attachementsText: {
        color: '#808080',
        flexShrink: 1,
        flexWrap: 'wrap'
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
    },
    column: {
        width: '50%'
    },
    icons: {
        marginRight: 10
    }
})