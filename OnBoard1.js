import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Onboard1 from "./assets/onboard1.png";
import logo from "./assets/logo.png";
import BottomNavigation from "./components/BottomNavigation"


const OnboardScreen1 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        {/* Logo */}
        <Image source={logo} style={styles.logo} />

        {/* Header Image */}
        <Image source={Onboard1} style={styles.headerImage} />

        {/* Title and Description */}
        <Text style={styles.title}>Welcome to Cuore! Your everyday health companion</Text>
        <Text style={styles.description}>
          Help us personalize your experience by sharing your health and wellness background.
        </Text>

        {/* Progress Counter */}
        <View style={styles.progressCounterContainer}>
          <Text style={styles.progressCounter}>1 of 7</Text>
        </View>

        {/* Progress Indicator */}
        <View style={styles.progressContainer}>
          <View style={[styles.progressBar, { width: '14%' }]} />
          <View style={styles.progressBarInactive} />
        </View>

        {/* Instructions */}
        <View style={styles.instructionsContainer}>
          {/* Info Box */}
          <View style={[styles.infoBox, { backgroundColor: '#F3F4F6' }]}>
            <Ionicons name="information-circle" size={20} color="#374151" />
            <Text style={[styles.infoBoxText, { color: '#374151' }]}>
              Please have a weighing scale and measuring tape ready.
            </Text>
          </View>

          {/* Warning Box */}
          <View style={styles.warningBox}>
            <Ionicons name="alert-circle" size={20} color="#B91C1C" />
            <Text style={styles.warningText}>
              Do not use your profile for assessing others, it will affect your recommendations.
            </Text>
          </View>

          {/* Disclaimer */}
          <Text style={styles.disclaimer}>
            Disclaimer: This assessment is not a substitute for professional medical advice, diagnosis, or treatment.
            Always seek the advice of your physician before starting any new therapy or treatment.
          </Text>
        </View>

        {/* Get Started Button */}
        <TouchableOpacity
          onPress={() => navigation.navigate('Onboard2')}
          style={styles.getStartedButton}
        >
          <Text style={styles.getStartedButtonText}>Get Started</Text>
        </TouchableOpacity>
      </ScrollView>

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
    paddingVertical: 30,
  },
  logo: {
    width: 120,
    height: 40,
    resizeMode: 'contain',
  },
  headerImage: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#111827',
    marginVertical: 10,
  },
  description: {
    fontSize: 14,
    textAlign: 'center',
    color: '#4B5563',
    marginBottom: 20,
  },
  progressCounterContainer: {
    alignSelf: 'flex-end', // Aligning progress count to the right
  },
  progressCounter: {
    fontSize: 14,
    color: '#6B7280',
  },
  progressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  progressBar: {
    height: 4,
    backgroundColor: '#1E64AC',
    borderRadius: 2,
  },
  progressBarInactive: {
    height: 4,
    backgroundColor: '#E5E7EB',
    borderRadius: 2,
    flex: 1,
  },
  instructionsContainer: {
    marginBottom: 20,
  },
  infoBox: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    marginBottom: 10,
  },
  infoBoxText: {
    fontSize: 14,
    marginLeft: 10,
    lineHeight: 20,
    flexShrink: 1,
  },
  warningBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FEF3C7',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    marginBottom: 10,
    borderLeftWidth: 4,
    borderLeftColor: '#F59E0B',
  },
  warningText: {
    fontSize: 14,
    color: '#92400E',
    marginLeft: 10,
    flexShrink: 1, // Ensures text wraps inside the box
  },
  disclaimer: {
    fontSize: 12,
    color: '#6B7280',
    textAlign: 'center',
    marginTop: 10,
  },
  getStartedButton: {
    backgroundColor: '#1E64AC',
    paddingVertical: 12,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  getStartedButtonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },
  
  
});

export default OnboardScreen1;
