import {ScrollView, StyleSheet, Text, View} from 'react-native';
import GlobalStyle from '../styles/GlobalStyle';
import AllLists from '../components/AllLists';
import React, { useState } from 'react';


export default function Homepage(): JSX.Element {
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
          My Lists
        </Text>
      </View>
      <ScrollView>
        <AllLists />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  homeContainer: {
    width: '100%',
    height: '100%',
  },
  containerTop: {
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    marginBottom: 50,
    width: 300,
    flexDirection: 'row',
  },
  homeTitle: {
    padding: 15,
    borderRadius: 10,
    marginTop: 40,
    flex: 1,
    fontWeight: 'bold',
  },
});
