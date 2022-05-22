import React from 'react';
import { SafeAreaView, Platform, StatusBar, FlatList, View, Image, Pressable, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import FoodHeader from '../components/FoodHeader/FoodHeader';

import { colors } from '../theme/colors';
import { spacing } from '../theme/spacing';
import { Food_List } from "../data/fakefood";
import Text from '../components/Text/Text';

export default function Home({ navigation }) {
  return (
    <SafeAreaView style={{ 
      flex: 1, 
      backgroundColor: colors.black,
      marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
      }}>
      <FoodHeader />
      <FlatList
        data={Food_List}
        keyExtractor={item => item.strMeal}
        renderItem={({ item, index }) => {
          const { strMeal, strMealThumb } = item;
          return (
            <Pressable onPress={() => navigation.navigate('Details', { item })} style={styles.item}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image
                  source={{ uri: strMealThumb }}
                  style={{ width: 70, height: 70, borderRadius: 50, marginRight: spacing[2] }}
                />
                <Text>{strMeal}</Text>
              </View>
              <AntDesign name="right" size={18} color="white" />
            </Pressable>
          );
        }}
        ItemSeparatorComponent={() => <View style={styles.separator}></View>}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: spacing[5]
  },
  separator: {
    height: 0.5,
    marginHorizontal: spacing[5],
    backgroundColor: colors.gray,
  }
});