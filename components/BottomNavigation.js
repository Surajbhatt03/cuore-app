import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const BottomNavigation = () => {
  return (
    <View style={styles.bottomNav}>
      {[
        { name: "home-outline", label: "Today" },
        { name: "search-outline", label: "Explore" },
        { name: "bar-chart-outline", label: "Progress" },
        { name: "chatbubble-outline", label: "Chat" },
        { name: "person-outline", label: "Profile" },
      ].map((item, index) => (
        <TouchableOpacity key={index} style={styles.navItem}>
          <Ionicons name={item.name} size={24} color="#6B7280" />
          <Text style={styles.navText}>{item.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({

  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderColor: '#E5E7EB',
    paddingVertical: 10,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    marginLeft: 20
  },
  navItem: {
    alignItems: 'center',
    flex: 1,
  },
  navText: {
    fontSize: 12,
    color: '#6B7280',
    marginTop: 2,
  },

  });

export default BottomNavigation;