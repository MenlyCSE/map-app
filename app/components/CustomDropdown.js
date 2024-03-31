import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const CustomDropdown = ({ label, data, value, onSelect }) => {
  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(value);

  const handleSelect = (item) => {
    onSelect(item);
    setSelectedItem(item);
    setOpen(false);
  };

  return (
    <View style={[styles.container, { borderColor: '#ccc', borderWidth: 1 }]}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.dropdownContainer}>
        <TouchableOpacity onPress={() => setOpen(!open)} style={styles.header}>
          <View style={styles.dropdownHeader}>
            <Text style={styles.selectedText}>{selectedItem || 'Select'}</Text>
          </View>
        </TouchableOpacity>
        {open && (
          <View style={styles.dropdown}>
            {data.map((item) => (
              <TouchableOpacity
                key={item}
                onPress={() => handleSelect(item)}
                style={[styles.item, item === value && styles.selectedItem]}
              >
                <Text style={styles.itemText}>{item}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    borderRadius: 10,
    backgroundColor: '#fff',
  },
  label: {
    fontSize: 18,
    color: '#333',
    paddingHorizontal: 10,
    paddingTop: 5,
  },
  dropdownContainer: {
    borderRadius: 10,
    overflow: 'hidden',
  },
  header: {
    borderRadius: 10,
  },
  dropdownHeader: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  selectedText: {
    fontSize: 16,
    color: '#333',
  },
  dropdown: {
    borderRadius: 10,
  },
  item: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  selectedItem: {
    backgroundColor: '#f0f0f0',
  },
  itemText: {
    fontSize: 16,
    color: '#333',
  },
});

export default CustomDropdown;