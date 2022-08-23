import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import { colors } from '../../colors';

export default function Notifications({numberOfNotifications, handleClick}) {
  return (
    <TouchableOpacity onPress={() => handleClick()}>
      <View style={styles.container}>
          <View style={styles.containerNumber}>
              <Text style={styles.textNumber}>{numberOfNotifications}</Text>
          </View>
        <Icon name="bell" size={16} color="black"></Icon>
      </View>
    </TouchableOpacity>

  )
}

const styles = StyleSheet.create({
    containerNumber: {
        position: 'absolute',
        right: 5,
        top: 5,
        backgroundColor: colors.blue_facebook,
        borderWidth: 1,
        borderColor: colors.blue_facebook,
        borderRadius: 10,
        width: 14,
        height: 14,
        justifyContent: 'center',
        zIndex: 1,
    },
    textNumber: {
        color: 'white',
        fontSize: 10,
        textAlign: 'center'
    },
    container: {
        borderWidth: 1,
        borderColor: colors.grey_subTitle,
        borderRadius: 10,
        alignSelf: 'center',
        padding: 10,

    }
})