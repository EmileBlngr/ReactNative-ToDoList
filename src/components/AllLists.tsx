import {ScrollView, StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import GlobalStyle from '../styles/GlobalStyle';
import { logoList } from '../assets/exportImg';
export default function AllLists(): JSX.Element {
  return (
    <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button]}>
            <Image source={logoList} style={styles.logoListIcon}/>
            <Text style={[GlobalStyle.subtitle1, styles.listButtonText]}>Test</Text>
        </TouchableOpacity>
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
    borderWidth: 1,
    padding: 5,
    alignItems: 'center',
  },
  logoListIcon: {
    height: 40,
    width: 40,
  },
  listButtonText: {
  },
})
