import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native'
import React, {useState, useEffect, useRef} from 'react'

export default function LogoScreen({navigation}) {

    const [notifications, setNotifications] = useState([]);
 
    const [isPaused, setPause] = useState(false);
    const ws = useRef(null);

    useEffect(() => {
        ws.current = new WebSocket("ws://localhost:8080/notifications");
        ws.current.onopen = () => console.log("WebSocket connection open ...");
        ws.current.onclose = () => console.log("WebSocket connection closed ...");

        const wsCurrent = ws.current;

        return () => {
            wsCurrent.close();
        };
    }, []);

    useEffect(() => {
        if (!ws.current) return;

        let aux = [];
        ws.current.onmessage = e => {
            if (isPaused) return;
            const message = JSON.parse(e.data);
            aux.push(message);
            setNotifications(aux);
        };
    }, [isPaused]);

    const handleNextPage = () => {
        navigation.navigate('DocumentScreen', {notifications: notifications});
        setPause(!isPaused);
    }

  return (
    <SafeAreaView>
        <TouchableOpacity onPress={() => handleNextPage()}>
            <View style={styles.container}>
             <Text style={styles.title}>Documents App</Text>
            </View>
           
              
        </TouchableOpacity>
    
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontWeight: '900',
        color: 'red',
        fontSize: 30
    }
})