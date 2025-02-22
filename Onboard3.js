import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Onboard3 from "./assets/onboard3.png";
import BottomNavigation from "./components/BottomNavigation";

const OnboardScreen3 = ({ navigation }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [illnessDetails, setIllnessDetails] = useState(["Heart Attack", "", ""]);

  const toggleOption = (option) => {
    setSelectedOptions((prevOptions) =>
      prevOptions.includes(option)
        ? prevOptions.filter((item) => item !== option)
        : [...prevOptions, option]
    );
  };

  const handleIllnessChange = (text, index) => {
    const updatedDetails = [...illnessDetails];
    updatedDetails[index] = text;
    setIllnessDetails(updatedDetails);
  };

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{ flex: 1 }}>
        <ScrollView 
          contentContainerStyle={styles.scrollContainer}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <Ionicons name="arrow-back" size={24} color="#374151" />
          </TouchableOpacity>

          {/* Header Image */}
          <Image source={Onboard3} style={styles.headerImage} />

          {/* Title and Description */}
          <Text style={styles.title}>Health History</Text>
          <Text style={styles.description}>
            Please select details about your family’s health history or symptoms you’ve experienced.
          </Text>

          {/* Progress Counter */}
          <View style={styles.progressCounterContainer}>
            <Text style={styles.progressCounter}>3 of 7</Text>
          </View>

          {/* Progress Bar - Now correctly visible */}
          <View style={styles.progressContainer}>
            <View style={styles.progressBar} />
          </View>

          {/* Checklist */}
          <View style={styles.checklistContainer}>
            {[
              "One of my parents was diagnosed with diabetes before the age of 60",
              "One of my parents had a heart attack before the age of 60",
              "I have Hypertension (High blood pressure)",
              "I have Diabetes (High blood sugar)",
              "I feel short of breath or experience chest discomfort during light activity",
              "I've noticed an increase in hunger, thirst, or the need to urinate frequently"
            ].map((option, index) => (
              <TouchableOpacity key={index} style={styles.checkboxContainer} onPress={() => toggleOption(option)}>
                <Ionicons 
                  name={selectedOptions.includes(option) ? "checkbox" : "square-outline"} 
                  size={20} 
                  color={selectedOptions.includes(option) ? "#1E64AC" : "#6B7280"} 
                />
                <Text style={styles.checkboxText}>{option}</Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* Illness Input Fields */}
          <Text style={styles.illnessPrompt}>Mention any major illnesses or surgeries.</Text>
          <View style={styles.illnessInputContainer}>
            {illnessDetails.map((text, index) => (
              <TextInput
                key={index}
                placeholder={index === 0 ? "Heart Attack" : "....."}
                placeholderTextColor="#9CA3AF"
                value={text}
                onChangeText={(t) => handleIllnessChange(t, index)}
                style={styles.input}
              />
            ))}
          </View>

          {/* Next Button */}
          <TouchableOpacity onPress={() => navigation.navigate('Onboard4')} style={styles.nextButton}>
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
    paddingTop: 30,
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 80,
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 15,
    zIndex: 10,
  },
  headerImage: {
    width: '100%',
    height: 220,
    resizeMode: 'contain',
    marginTop: 15,
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 15,
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
    width: '100%',
    height: 6,
    backgroundColor: '#E5E7EB',
    borderRadius: 3,
    marginBottom: 15,
    overflow: 'hidden',
  },
  progressBar: {
    width: '43%',
    height: '100%',
    backgroundColor: '#1E64AC',
  },
  checklistContainer: {
    marginVertical: 10,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
    backgroundColor: '#fff',
    marginBottom: 8,
    elevation: 1,
  },
  checkboxText: {
    fontSize: 14,
    marginLeft: 10,
    color: '#374151',
  },
  illnessPrompt: {
    fontSize: 14,
    color: '#374151',
    marginBottom: 8,
  },
  illnessInputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 8,
    padding: 10,
    fontSize: 14,
    color: '#111827',
    backgroundColor: '#fff',
    marginHorizontal: 5,
  },
  nextButton: {
    backgroundColor: '#1E64AC',
    paddingVertical: 14,
    borderRadius: 5,
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 10,
  },
  nextButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default OnboardScreen3;
