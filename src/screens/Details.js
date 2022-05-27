import React from 'react';
import { SafeAreaView, FlatList, Platform, StatusBar, ScrollView, View, Image, StyleSheet } from 'react-native';
import FoodHeader from '../components/FoodHeader/FoodHeader';

import { colors } from '../theme/colors';
import { spacing } from '../theme/spacing';
import Text from '../components/Text/Text';

export default function Details({ route }) {
  const { strMeal, strMealThumb, strMealDescription, strIngredients } = route.params.item;
  return (
    <SafeAreaView style={styles.container}>
      <FoodHeader backBtn={true} />
      <ScrollView>
        <Image
          source={{ uri: strMealThumb }}
          style={styles.imageView}
        />
        <View style={{margin: spacing[5]}}>
        <Text preset="h2" style={styles.meal}>{strMeal}</Text>
        <Text preset="h4" style={styles.mealDescription}>{strMealDescription}</Text>
        <Text preset="h4" style={styles.ingredients}>Ingredients</Text>
        <FlatList
          data={strIngredients}
          keyExtractor={item => item}
          renderItem={({ item, index }) => {
            return <View style={styles.item}>
              <Text>Ingredient - {index + 1}</Text>
              <Text>{item}</Text>
            </View>
          }}
        />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
  imageView: {
    height: 225,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: spacing[5],
    marginTop: spacing[5]
  },
  meal: {
    textAlign: 'center',
    marginBottom: spacing[5]
  },
  mealDescription: {
    textAlign: 'justify'
  },
  ingredients:{
    fontSize: 21,
    marginBottom: spacing[4]
  },
  item: {
    flexDirection: "row",
    justifyContent: 'space-between',
    borderColor: colors.darkGrey,
    borderWidth: 0.5,
    paddingHorizontal: spacing[4],
    paddingVertical: spacing[4],
    marginVertical: spacing[2]
  }
});