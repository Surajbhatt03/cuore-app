import React, { useRef, useState } from "react";
import { View, TextInput, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const OTPVerificationScreen = ({ navigation }) => {
  const otpRefs = useRef([]);
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);

  // Handle OTP input and move focus
  const handleOtpChange = (text, index) => {
    if (text.length > 1) return; // Prevent multiple characters
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    // Move focus to the next input
    if (text && index < 5) {
      otpRefs.current[index + 1]?.focus();
    }
  };

  return (
    <View style={styles.container}>
      {/* Back Button with Ionicons */}
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Ionicons name="arrow-back" size={24} color="#1E64AC" />
      </TouchableOpacity>

      {/* Title & Description */}
      <Text style={styles.title}>OTP Verification</Text>
      <Text style={styles.subtitle}>Enter the verification code sent to your device</Text>

      {/* OTP Input Fields */}
      <View style={styles.otpContainer}>
        {otp.map((_, index) => (
          <TextInput
            key={index}
            ref={(el) => (otpRefs.current[index] = el)}
            maxLength={1}
            keyboardType="numeric"
            style={styles.otpInput}
            value={otp[index]}
            onChangeText={(text) => handleOtpChange(text, index)}
            autoFocus={index === 0} // Automatically focus on first input
          />
        ))}
      </View>

      {/* Countdown Timer */}
      <Text style={styles.timer}>
        Code expires in <Text style={styles.timerBold}>05:00</Text>
      </Text>

      {/* Submit Button */}
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("NewAccount")}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>

      {/* Resend Code Section */}
      <Text style={styles.resendCode}>Didn't receive the code?</Text>
      <TouchableOpacity onPress={() => alert("Resend Code")}>
        <Text style={styles.resendLink}>Resend Code</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 50,
    backgroundColor: "#F9FAFB",
    alignItems: "center",
    marginTop: 20
  },
  backButton: {
    marginTop: 20,
    position: "absolute",
    top: 20,
    left: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#374151",
    marginBottom: 5,
    marginTop: 40,
  },
  subtitle: {
    fontSize: 14,
    color: "#6B7280",
    textAlign: "center",
    marginBottom: 20,
  },
  otpContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
    width: "100%",
  },
  otpInput: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    textAlign: "center",
    fontSize: 18,
    backgroundColor: "#fff",
  },
  timer: {
    fontSize: 14,
    color: "#9CA3AF",
    marginBottom: 20,
  },
  timerBold: {
    color: "#000000",
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#1E64AC",
    padding: 12,
    paddingHorizontal: 40,
    borderRadius: 10,
    alignItems: "center",
    width: "100%",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
  },
  resendCode: {
    marginTop: 10,
    fontSize: 14,
    color: "#4B5563",
  },
  resendLink: {
    color: "#000000",
    fontWeight: "bold",
    fontSize: 14,
    marginTop: 5,
  },
});

export default OTPVerificationScreen;
