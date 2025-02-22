import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';

const NewAccountScreen = ({ navigation }) => {
  const [state, setState] = useState('');

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'padding'}
      style={{ flex: 1 }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView 
          contentContainerStyle={styles.scrollContainer}
          keyboardShouldPersistTaps="handled"
          scrollEnabled={true}
        >
          <View style={styles.container}>
            {/* Title */}
            <Text style={styles.title}>Create New Account</Text>
            <Text style={styles.subtitle}>Please fill in your information below</Text>

            {/* Input Fields */}
            <Text style={styles.label}>Name</Text>
            <TextInput 
              placeholder="Enter your full name" 
              style={styles.input} 
              textAlignVertical="top" 
            />

            <Text style={styles.label}>Mobile Number</Text>
            <TextInput 
              placeholder="Enter your mobile number" 
              keyboardType="numeric" 
              style={styles.input} 
              textAlignVertical="top"
            />

            {/* State Dropdown - Fixed Issue */}
            <Text style={styles.label}>State</Text>
            <View style={styles.dropdownContainer}>
              <Picker
                selectedValue={state}
                onValueChange={(itemValue) => setState(itemValue)}
                style={Platform.OS === 'web' ? styles.dropdownWeb : styles.dropdown,{ color: '#000' }}
                mode="dropdown" // Ensures better visibility
              >
                <Picker.Item label="Select your state" value="" />
                <Picker.Item label="Andhra Pradesh" value="andhra_pradesh" />
                <Picker.Item label="Assam" value="assam" />
                <Picker.Item label="Bihar" value="bihar" />
                <Picker.Item label="Chhattisgarh" value="chhattisgarh" />
                <Picker.Item label="Delhi" value="delhi" />
                <Picker.Item label="Goa" value="goa" />
                <Picker.Item label="Gujarat" value="gujarat" />
                <Picker.Item label="Haryana" value="haryana" />
                <Picker.Item label="Himachal Pradesh" value="himachal_pradesh" />
                <Picker.Item label="Jharkhand" value="jharkhand" />
                <Picker.Item label="Karnataka" value="karnataka" />
                <Picker.Item label="Kerala" value="kerala" />
                <Picker.Item label="Madhya Pradesh" value="madhya_pradesh" />
                <Picker.Item label="Maharashtra" value="maharashtra" />
                <Picker.Item label="Manipur" value="manipur" />
                <Picker.Item label="Meghalaya" value="meghalaya" />
                <Picker.Item label="Mizoram" value="mizoram" />
                <Picker.Item label="Nagaland" value="nagaland" />
                <Picker.Item label="Odisha" value="odisha" />
                <Picker.Item label="Punjab" value="punjab" />
                <Picker.Item label="Rajasthan" value="rajasthan" />
                <Picker.Item label="Sikkim" value="sikkim" />
                <Picker.Item label="Tamil Nadu" value="tamil_nadu" />
                <Picker.Item label="Telangana" value="telangana" />
                <Picker.Item label="Tripura" value="tripura" />
                <Picker.Item label="Uttar Pradesh" value="uttar_pradesh" />
                <Picker.Item label="Uttarakhand" value="uttarakhand" />
                <Picker.Item label="West Bengal" value="west_bengal" />
              </Picker>
            </View>

            <Text style={styles.label}>Caregiver Name</Text>
            <TextInput 
              placeholder="Family member who can see your Cuore plan." 
              style={styles.input} 
              textAlignVertical="top"
            />

            <Text style={styles.label}>Caregiver Mobile Number</Text>
            <TextInput 
              placeholder="Enter caregiver mobile number" 
              keyboardType="numeric" 
              style={styles.input} 
              textAlignVertical="top"
            />

            <Text style={styles.label}>Doctor's Code</Text>
            <TextInput 
              placeholder="Enter your doctor's code" 
              style={styles.input} 
              textAlignVertical="top"
            />
            <Text style={styles.helperText}>
              Entering a participating doctor's code provides your doctor access to your records for monitoring
            </Text>

            <Text style={styles.label}>Corporate Code</Text>
            <TextInput 
              placeholder="Enter shared code to access corporate plan" 
              style={styles.input} 
              textAlignVertical="top"
            />

            <Text style={styles.label}>Referral Code</Text>
            <TextInput 
              placeholder="Enter referral code if you have been referred" 
              style={styles.input} 
              textAlignVertical="top"
            />

            {/* Verify Account Button */}
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate("Onboard1")} // Replace with actual functionality
            >
              <Text style={styles.buttonText}>Verify Account</Text>
            </TouchableOpacity>

            {/* Sign-in Link */}
            <TouchableOpacity onPress={() => navigation.navigate('LoginMobile')}>
              <Text style={styles.signIn}>
                Already have an account? <Text style={styles.signInLink}>Sign in</Text>
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 20,  
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 30,
    backgroundColor: '#F9FAFB',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    color: '#111827',
    marginTop: 10
  },
  subtitle: {
    fontSize: 14,
    textAlign: 'center',
    color: '#4B5563',
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    height: 40,
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  dropdownContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: '#fff',
    marginBottom: 15,
    overflow: 'hidden',
     height: 50,  
  justifyContent: 'center',  
  },
  dropdown: {
    height: 50,   
  paddingHorizontal: 10,
  fontSize: 16,  
  },
  dropdownWeb: {
    height: 40,
    paddingHorizontal: 10,
    width: '100%',  
  },
  helperText: {
    fontSize: 12,
    color: '#666',
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#1E64AC',
    paddingVertical: 12,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  signIn: {
    textAlign: 'center',
    color: '#4B5563',
  },
  signInLink: {
    color: '#000000',
    fontWeight: 'bold',
  },
});

export default NewAccountScreen;
