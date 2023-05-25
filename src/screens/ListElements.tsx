import {ScrollView, StyleSheet, Text, View, TextInput} from 'react-native';
import GlobalStyle from '../styles/GlobalStyle';
import AllLists from '../components/AllLists';
import React, {useState} from 'react';
import {useRoute} from '@react-navigation/native';
import IUserList from '../interfaces/IUserList';
import DisplayListElements from '../components/DisplayListElements';

export default function ListElements(): JSX.Element {
  const route: any = useRoute();
  const list: IUserList = route.params.list;
  return (
    <View style={[GlobalStyle.primaryBgColor, styles.homeContainer]}>
      <View style={styles.containerTop}>
        <Text
          style={[
            styles.homeTitle,
            GlobalStyle.title1,
            GlobalStyle.secondaryBgColor,
            GlobalStyle.ShadowLg,
          ]}>
          {list.titre}
        </Text>
      </View>
      <View style={styles.scrollViewListContainer}>
        <ScrollView>
          <DisplayListElements listElements={list.elements} />
        </ScrollView>
      </View>
      <View style={styles.containerBottom}>
        <TextInput
          placeholder="Type here to add a new task !"
          style={styles.newElementInput}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  homeContainer: {
    width: '100%',
    height: '100%',
    flexDirection: 'column',
  },
  containerTop: {
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    width: 300,
    minHeight: 50,
    flex: 1,
    flexDirection: 'row',
  },
  containerBottom: {
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    width: 300,
    flex: 1,
    flexDirection: 'row',
  },
  homeTitle: {
    padding: 15,
    borderRadius: 10,
    marginTop: 40,
    flex: 1,
    fontWeight: 'bold',
  },
  scrollViewListContainer: {
    flex: 5,
  },
  newElementInput: {
    borderWidth: 1,
    borderRadius: 15,
    flex: 1,
  },
});
