import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity, FlatList, } from 'react-native';
import Login from './pages/auth';
import Home from './pages/home';






export default function App() {
  const [page, setPage] = useState("auth")


  return (
    <>
      { page === "auth" && <Login navigate={ setPage } /> }
      { page === "home" && <Home navigate={ setPage } /> }

    </>
  );
}


