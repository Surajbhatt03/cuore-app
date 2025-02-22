import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Onboard4 from "./assets/onboard4.png";  
import BottomNavigation from "./components/BottomNavigation";  

const OnboardScreen4 = ({ navigation }) => {
  const [tobaccoUsage, setTobaccoUsage] = useState(null);
  const [alcoholConsumption, setAlcoholConsumption] = useState(null);

  const renderOption = (value, selectedValue, setSelectedValue) => (
    <TouchableOpacity
      style={[styles.radioOption, selectedValue === value && styles.radioOptionSelected]}
      onPress={() => setSelectedValue(value)}
    >
      <Ionicons
        name={selectedValue === value ? "radio-button-on" : "radio-button-off"}
        size={20}
        color={selectedValue === value ? "#1E64AC" : "#6B7280"}
      />
      <Text style={styles.radioText}>{value}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>

      <ScrollView contentContainerStyle={styles.scrollContent} 
      keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
      >

      {/* Back Button Positioned Outside ScrollView */}
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Ionicons name="arrow-back" size={24} color="#374151" />
      </TouchableOpacity>


        {/* Header Image */}
        <Image source={Onboard4} style={styles.headerImage} />

        {/* Title and Description */}
        <Text style={styles.title}>Lifestyle</Text>
        <Text style={styles.description}>
          Your lifestyle choices significantly impact your overall health.
        </Text>

        {/* Progress Counter */}
        <View style={styles.progressCounterContainer}>
          <Text style={styles.progressCounter}>4 of 7</Text>
        </View>

        {/* Progress Indicator */}
        <View style={styles.progressContainer}>
          <View style={[styles.progressBar, { width: "56%" }]} />
          <View style={styles.progressBarInactive} />
        </View>

        {/* Questions */}
        <View style={styles.questionContainer}>
          {/* Tobacco Usage Question */}
          <Text style={styles.questionTitle}>
            In the last one year, how often have you used tobacco products?
          </Text>
          {["Never", "Quit >6 months ago", "Occasionally", "Daily"].map((option) =>
            renderOption(option, tobaccoUsage, setTobaccoUsage)
          )}

          {/* Alcohol Consumption Question */}
          <Text style={[styles.questionTitle, { marginTop: 20 }]}>
            How much alcohol do you drink?
            {"\n"}
            {"\n"}
            <Text style={styles.subtext}>(1 drink = 1 pint beer, 45ml hard liquor, or 150ml wine)</Text>
          </Text>
          {[
            "Never",
            "Quit >6 months ago",
            "1-2 drinks occasionally",
            "2 or more drinks at least twice per week",
          ].map((option) => renderOption(option, alcoholConsumption, setAlcoholConsumption))}
        </View>

        {/* Next Button */}
        <TouchableOpacity onPress={() => navigation.navigate("NextOnboardScreen")} style={styles.nextButton}>
          <Text style={styles.nextButtonText}>Next</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Bottom Navigation */}
      <BottomNavigation />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    flex: 1,
    backgroundColor: "#F9FAFB",
    paddingHorizontal: 20,
    paddingTop: 30,  
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: 80,  
  },
  backButton: {
    position: "absolute",
    top: 10,
    left: 15,
    marginBottom: 10,
    zIndex: 10,
  },
  headerImage: {
    width: "100%",
    height: 200,
    resizeMode: "contain",
    marginBottom: 20,
    marginTop: 15
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#111827",
    marginVertical: 10,
  },
  description: {
    fontSize: 14,
    color: "#6B7280",
    marginBottom: 20,
  },
  progressCounterContainer: {
    alignSelf: "flex-end",
  },
  progressCounter: {
    fontSize: 14,
    color: "#6B7280",
  },
  progressContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  progressBar: {
    height: 4,
    backgroundColor: "#1E64AC",
    borderRadius: 2,
  },
  progressBarInactive: {
    height: 4,
    backgroundColor: "#E5E7EB",
    borderRadius: 2,
    flexGrow: 1,
  },
  questionContainer: {
    marginVertical: 20,
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3, // Adds shadow for better visibility
  },
  questionTitle: {
   
    fontSize: 14,
    color: "#111827",
    marginBottom: 10,
  },
  subtext: {
    fontSize: 12,
    color: "#6B7280",
  },
  radioOption: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
  },
  radioOptionSelected: {
    backgroundColor: "#E5E7EB",
    borderRadius: 10,
  },
  radioText: {
    fontSize: 14,
    marginLeft: 10,
    color: "#374151",
  },
  nextButton: {
    backgroundColor: "#1E64AC",
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
    marginBottom: 50, // Extra margin for visibility
  },
  nextButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default OnboardScreen4;
