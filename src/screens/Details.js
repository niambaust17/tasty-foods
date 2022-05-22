import React from 'react';
import { SafeAreaView, Platform, StatusBar, ScrollView, View, Image, StyleSheet } from 'react-native';
import FoodHeader from '../components/FoodHeader/FoodHeader';

import { colors } from '../theme/colors';
import { spacing } from '../theme/spacing';
import Text from '../components/Text/Text';

export default function Details({ route }) {
  const { strMeal, strMealThumb, strMealDescription } = route.params.item;
  const backBtn = true;
  return (
    <SafeAreaView style={styles.container}>
      <FoodHeader backBtn={backBtn} />
      <ScrollView>
        <Image
          source={{ uri: strMealThumb }}
          style={{ width: '100%', height: '30%' }}
        />
        <Text preset="h2" style={{ marginTop: 10, marginBottom: 10, textAlign: 'center' }}>{strMeal}</Text>
        <Text preset="h4" style={{ marginBottom: 275, textAlign: 'justify' }}>{strMealDescription}</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
    paddingHorizontal: spacing[5],
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0

  }
});