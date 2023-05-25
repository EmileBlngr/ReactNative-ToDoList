import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import React, {useState} from 'react';
import GlobalStyle from '../styles/GlobalStyle';
import {logoList} from '../assets/exportImg';
import {GetUserListsBouchon} from '../services/bouchons/UserLists';
import IUserList from '../interfaces/IUserList';
import {useNavigation, useRoute} from '@react-navigation/native';
import { verifie } from '../assets/exportImg';

interface Props {
  listElements: string[];
}

export default function DisplayListElements({
  listElements,
}: Props): JSX.Element {
  const navigation: any = useNavigation();
  return (
    <View style={styles.buttonContainer}>
      {listElements.map((element, index) => {
        return (
          <View
            key={index}
            style={[
              GlobalStyle.ShadowLg,
              GlobalStyle.primaryBgColor,
              styles.button,
            ]}>
            <Text style={[GlobalStyle.subtitle1, styles.listButtonTitre]}>
              {element}
            </Text>
            <TouchableOpacity style={styles.cercleButton}>
              <Image source={verifie} style={styles.resizeCircleImg} />
            </TouchableOpacity>
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: 'center',
  },
  button: {
    width: 335,
    flexDirection: 'row',
    padding: 5,
    alignItems: 'center',
    borderRadius: 5,
    marginVertical: 5,
    borderColor: '#55482d',
  },
  logoListIcon: {
    height: 40,
    width: 40,
  },
  listButtonTitre: {
    flex: 1,
  },
  listButtonNombre: {
    backgroundColor: '#FFBF66',
    padding: 10,
    borderRadius: 10,
    color: 'black',
  },
  cercleButton: {
    padding: 5,
    borderRadius: 20,
  },
  resizeCircleImg: {
    height: 35,
    width: 35,
  },
});
