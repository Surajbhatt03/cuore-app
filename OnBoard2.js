import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';
import BottomNavigation from "./components/BottomNavigation";

const OnboardScreen2 = ({ navigation }) => {
  const [gender, setGender] = useState("");

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{ flex: 1 }}>
        <ScrollView 
          contentContainerStyle={styles.scrollContainer}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          
          {/* Back Button */}
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <Ionicons name="arrow-back" size={24} color="#374151" />
          </TouchableOpacity>

          {/* Header Image */}
          <Image source={require("./assets/onboard2.png")} style={styles.headerImage} />

          {/* Title and Description */}
          <Text style={styles.title}>Basic Information</Text>
          <Text style={styles.description}>Fill in your details below:</Text>

          {/* Progress Counter */}
          <View style={styles.progressCounterContainer}>
            <Text style={styles.progressCounter}>2 of 7</Text>
          </View>

          {/* Progress Indicator */}
          <View style={styles.progressContainer}>
            <View style={[styles.progressBar, { width: '28%' }]} />
            <View style={styles.progressBarInactive} />
          </View>

          {/* Input Fields */}
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Age</Text>
            <TextInput placeholder="Enter your age" placeholderTextColor="#9CA3AF" style={styles.input} keyboardType="numeric" />
            
            <Text style={styles.label}>Gender</Text>
            <View style={styles.pickerContainer}>
              <Picker selectedValue={gender} onValueChange={(itemValue) => setGender(itemValue)} style={styles.picker}>
                <Picker.Item label="Choose gender" value="" />
                <Picker.Item label="Male" value="male" />
                <Picker.Item label="Female" value="female" />
                <Picker.Item label="Other" value="other" />
              </Picker>
            </View>

            <Text style={styles.label}>Height (cm)</Text>
            <TextInput placeholder="Enter your height" placeholderTextColor="#9CA3AF" style={styles.input} keyboardType="numeric" />
            
            <Text style={styles.label}>Weight (kg)</Text>
            <TextInput placeholder="Morning, empty stomach weight" placeholderTextColor="#9CA3AF" style={styles.input} keyboardType="numeric" />
            
            <Text style={styles.label}>Waist (cm)</Text>
            <TextInput placeholder="Measured just above your belly button" placeholderTextColor="#9CA3AF" style={styles.input} keyboardType="numeric" />
          </View>

          {/* Next Button */}
          <TouchableOpacity onPress={() => navigation.navigate('Onboard3')} style={styles.nextButton}>
            <Text style={styles.nextButtonText}>Next</Text>
          </TouchableOpacity>

        </ScrollView>
      </KeyboardAvoidingView>

      {/* Bottom Navigation */}
      <BottomNavigation />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
    paddingHorizontal: 20,
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 80,  
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    zIndex: 10,
  },
  headerImage: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
    marginTop: 60,
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    // textAlign: 'center',
    color: '#111827',
    marginVertical: 10,
  },
  description: {
    fontSize: 14,
    // textAlign: 'center',
    color: '#6B7280',
    marginBottom: 20,
  },
  progressCounterContainer: {
    alignSelf: 'flex-end',
    marginBottom: 5,
  },
  progressCounter: {
    fontSize: 14,
    color: '#6B7280',
  },
  progressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 4,
    backgroundColor: '#E5E7EB',
    borderRadius: 2,
    marginBottom: 20,
    width: '100%',
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#1E64AC',
    borderRadius: 2,
  },
  progressBarInactive: {
    flex: 1,
    backgroundColor: '#E5E7EB',
  },
  inputContainer: {
    marginVertical: 20,
  },
  label: {
    fontSize: 14,
    color: '#374151',
    marginBottom: 5,
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: '#D1D5DB',
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderRadius: 5,
    backgroundColor: '#FFFFFF',
    fontSize: 14,
    color: '#374151',
    marginBottom: 15,
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 5,
    backgroundColor: '#FFFFFF',
    marginBottom: 15,
    overflow: 'hidden',
  },
  picker: {
    height: 50,
    width: '100%',
  },
  nextButton: {
    backgroundColor: '#1E64AC',
    paddingVertical: 14,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  nextButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default OnboardScreen2;
