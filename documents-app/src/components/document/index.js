import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function DocumentBox({document}) {
  return (
    <View style={styles.container}>
        <View style={styles.titleContainer}>
            <Text>{document.title}</Text> 
            <Text>{document.version}</Text> 
        </View>
        <View style={styles.contributorsContainer}>
            <View>
                <Text>Contributors</Text>
                <View>
                    <Text>Name of persons</Text>
                </View>
            </View>
            <View>
                <Text>Attachements</Text>
                <View>
                    <Text>...</Text>
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
        justifyContent: 'space-between'
    },
    contributorsContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10
    }
})