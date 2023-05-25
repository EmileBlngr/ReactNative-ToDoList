import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import React, {useState} from 'react';
import GlobalStyle from '../styles/GlobalStyle';
import {logoList} from '../assets/exportImg';
import {GetUserListsBouchon} from '../services/bouchons/UserLists';
import IUserList from '../interfaces/IUserList';
import {useNavigation, useRoute} from '@react-navigation/native';

export default function AllLists(): JSX.Element {
  const [lists, setLists] = useState<IUserList[]>(GetUserListsBouchon());
  const navigation: any = useNavigation();
  return (
    <View style={styles.buttonContainer}>
      {lists.map((list: {titre: string; nombreElements: string}, index) => {
        return (
          <TouchableOpacity
            key={index}
            style={[
              GlobalStyle.ShadowLg,
              GlobalStyle.primaryBgColor,
              styles.button,
            ]}
            onPress={() =>
              navigation.navigate('Affichage liste', {list: lists[index]})
            }>
            <Image source={logoList} style={styles.logoListIcon} />
            <Text style={[GlobalStyle.subtitle1, styles.listButtonTitre]}>
              {list.titre}
            </Text>
            <Text style={(GlobalStyle.subtitle1, styles.listButtonNombre)}>
              {list.nombreElements}
            </Text>
          </TouchableOpacity>
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
    borderRadius: 10,
    marginBottom: 10,
    borderWidth: 1,
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
});
