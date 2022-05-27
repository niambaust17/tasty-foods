import React, { useState } from 'react';
import { ScrollView, SafeAreaView, Platform, StatusBar, TextInput, FlatList, View, Image, Pressable, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import FoodHeader from '../components/FoodHeader/FoodHeader';

import { colors } from '../theme/colors';
import { spacing } from '../theme/spacing';
import { Food_List } from "../data/fakefood";
import Text from '../components/Text/Text';

const MealItem = ({ item }) => {
  const navigation = useNavigation();
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
}

export default function Home({ navigation }) {

  const [list, setList] = useState(Food_List);

  const renderItem = ({ item }) => {
    return (
      <MealItem item={item} />
    );
  }

  const searchFilter = (text) => {
    const filteredList = Food_List.filter((item) => {
      const itemName = item.strMeal.toLowerCase();
      const userTypedText = text.toLowerCase();

      return itemName.indexOf(userTypedText) > -1;
    })
    setList(filteredList);
  }


  return (
    <SafeAreaView style={{
      flex: 1,
      backgroundColor: colors.black,
      marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    }}>
      <FoodHeader />
      <ScrollView>
        <TextInput
          placeholder="Type the food name"
          placeholderTextColor={colors.white}
          autoCorrect={false}
          style={styles.searchInput}
          onChangeText={(text) => searchFilter(text)}
        />
        <FlatList
          data={list}
          keyExtractor={item => item.strMeal}
          renderItem={renderItem}
          ItemSeparatorComponent={() => <View style={styles.separator}></View>}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: spacing[5],
    paddingVertical: spacing[3],
  },
  separator: {
    height: 0.5,
    marginHorizontal: spacing[5],
    backgroundColor: colors.gray,
  },
  searchInput: {
    borderBottomColor: colors.white,
    marginHorizontal: spacing[5],
    marginVertical: spacing[5],
    borderBottomWidth: 1,
    color: colors.white
  }
});