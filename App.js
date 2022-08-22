import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Routes } from './documents-app/src/navigation';
import Toast from 'react-native-toast-message';


export default function App() {
  return (
    <>
    <Routes />
    <Toast />
    </>
  );
}
