import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import logo from './assets/logo.png';  

const LoginMobileScreen = ({ navigation }) => {
  const [mobileNumber, setMobileNumber] = useState('');

  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image source={logo} style={styles.logo} />
      
      {/* Title */}
      <Text style={styles.title}>Please Sign-in to continue</Text>

      {/* Tabs */}
      <View style={styles.tabContainer}>
        <TouchableOpacity style={[styles.tab, styles.activeTab]}>
          <Text style={styles.tabText}>User</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          <Text style={styles.tabText2}>Caregiver</Text>
        </TouchableOpacity>
      </View>

      {/* Mobile Number Label */}
      <Text style={styles.mobileNum2}>Mobile number</Text>

      {/* Mobile Number Input */}
      <View style={styles.inputContainer}>
        <TextInput 
          placeholder="+91" 
          editable={false} 
          style={[styles.input, styles.countryCode]} 
        />
        <TextInput
          placeholder="9876543210"
          keyboardType="phone-pad"
          value={mobileNumber}
          onChangeText={setMobileNumber}
          style={[styles.input, styles.mobileInput]}
        />
      </View>

      {/* Verify Account Button */}
      <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigation.navigate('OTPVerification')}
      >
        <Text style={styles.buttonText}>Verify Account</Text>
      </TouchableOpacity>

      {/* Sign-up Link */}
      <TouchableOpacity onPress={() => alert('Sign-up functionality')}>
        <Text style={styles.signup}>
          New user? <Text style={styles.signupLink}>Sign-up</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 50,
    backgroundColor: '#F9FAFB',
    alignItems: 'center',
    marginTop : 60
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  title: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 30,
    marginTop: -30,
    color: '#4B5563',
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
    width: '100%',
    borderRadius: 5,
  },
  tab: {
    flexGrow: 1,
    paddingVertical: 10,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#ccc',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    fontSize: 14,
  },
  activeTab: {
    backgroundColor: '#1E64AC',
  },
  tabText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  tabText2: {
    color: '#9CA3AF',
    fontWeight: 'bold',
  },
  mobileNum2: {
    fontSize: 14,
    marginTop: -5,
    marginBottom: 10,
    width: '100%',
    color: "#374151",
    textAlign: 'left',
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    width: '100%',
  },
  input: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    height: 40,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  countryCode: {
    width: 50,
    textAlign: 'center',
    // fontWeight: 'bold',
    color: '#6B7280',
  },
  mobileInput: {
    flex: 1,
    marginLeft: 10,
    color: '#6B7280',
  },
  button: {
    backgroundColor: "#1E64AC",
    padding: 12,
    paddingHorizontal: 40,  
    marginTop: 70,
    borderRadius: 5,
    alignItems: 'center',
    width: '100%',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 14,
     
  },
  signup: {
    marginTop: 10,
    color: '#4B5563',
    fontSize: 14,
  },
  signupLink: {
    color: '#000000',
     
  },
});

export default LoginMobileScreen;
