import Icon from 'react-native-vector-icons/Entypo';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {convert} from '../../../assets/dimensions/dimensions';
import {colors} from '../../../assets/colors/colors';

interface QuranTemplateProps {
  title: string;
  handleSubmit: (key: string, title: string) => void;
}

const QuranTemplate: React.FC<QuranTemplateProps> = ({title, handleSubmit}) => {
  return (
    <View style={styles.root}>
      <View style={styles.title}>
        <Icon name={'open-book'} size={30} color={colors.dark.CONTRAST} />

        <Text style={[styles.mainText]}>{title}</Text>
      </View>
      <TouchableOpacity
        accessibilityRole="button"
        activeOpacity={0.7}
        style={styles.button}
        onPress={() => handleSubmit('template', title)}>
        <Text style={styles.btnTxt}>START</Text>
      </TouchableOpacity>
    </View>
  );
};

export default QuranTemplate;

const styles = StyleSheet.create({
  root: {
    width: convert(935),
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderWidth: convert(5),
    borderRadius: convert(25),
    borderColor: colors.dark.CONTRAST,
    marginVertical: convert(25),
    paddingVertical: convert(50),
  },
  title: {alignItems: 'center'},
  mainText: {
    fontFamily: 'Montserrat-SemiBold',
    color: colors.dark.CONTRAST,
  },
  button: {
    height: convert(78),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: convert(25),
    borderWidth: convert(5),
    borderColor: colors.dark.CONTRAST,
    marginHorizontal: convert(7),
    marginVertical: convert(22),
    backgroundColor: colors.dark.CONTRAST,
    paddingHorizontal: convert(100),
  },
  btnTxt: {
    fontFamily: 'Montserrat-SemiBold',
    color: colors.dark.PRIMARY,
    minHeight: convert(50),
  },
});
