import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const BoundaryList = ({ route }) => {
  const { areas } = route.params;

  return (
    <View style={styles.container}>
      <FlatList
        data={areas}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.boundaryItem}>
            <Text>Area: {item.area.toFixed(2)} acres</Text>
            <Text>Boundary: {JSON.stringify(item.coordinates)}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  boundaryItem: {
    marginVertical: 10,
    padding: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 5,
  },
});

export default BoundaryList;
