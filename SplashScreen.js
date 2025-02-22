import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import logo from './assets/logo.png';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('LoginMobile');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={logo} style={styles.logo} />
      </View>
      <Text style={styles.title}>Your Personal Health Companion</Text>
      <Text style={styles.subtitle}>Empowering you to take control of your health</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#F5F5F5' },
  logoContainer: { width: 120, height: 120, borderRadius: 60, backgroundColor: '#FFFFFF', justifyContent: 'center', alignItems: 'center', elevation: 5 },
  logo: { width: 80, height: 80, resizeMode: 'contain' },
  title: { fontSize: 18, fontWeight: 'bold', marginTop: 20, textAlign: 'center' },
  subtitle: { fontSize: 14, color: 'gray', marginTop: 5, textAlign: 'center' },
});

export default SplashScreen;
