import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
// resources
import {convert} from '../../assets/dimensions/dimensions';
import {colors} from '../../assets/colors/colors';
import {FontSize} from '../../assets/fonts/fonts';

const BottomSlider = ({title}) => {
  return (
    <View style={styles.root}>
      <TouchableOpacity style={styles.arrow.left}>
        <Icon
          name={'angle-double-left'}
          size={20}
          color={colors.dark.CONTRAST}
        />
      </TouchableOpacity>
      <View style={styles.txtroot}>
        <View style={{marginTop: convert(25)}}>
          <Text style={styles.title}>{title}</Text>
        </View>

        <View style={{marginVertical: convert(30)}}>
          <Text style={styles.arabic}>
            يَا مُقَلِّبَ الْقُلُوبِ ثَبِّتْ قَلْبِي عَلَى دِينِكَ
          </Text>
        </View>

        <View style={{marginBottom: convert(10)}}>
          <Text style={styles.transliteration}>
            Yā Muqallibal-qulūb, thabbit qalbī `alā dīnik
          </Text>
        </View>

        <View style={{marginBottom: convert(25)}}>
          <Text style={styles.translation}>
            “O Changer of the hearts, make my heart firm upon Your religion.”
          </Text>
        </View>

        <View style={{marginBottom: convert(25)}}>
          <Text style={styles.source}>
            Jami` at-Tirmidhi 3522. Book 48, Hadith 153
          </Text>
        </View>
      </View>

      <TouchableOpacity style={styles.arrow.right}>
        <Icon
          name={'angle-double-right'}
          size={20}
          color={colors.dark.CONTRAST}
        />
      </TouchableOpacity>
    </View>
  );
};

export default BottomSlider;

const styles = StyleSheet.create({
  root: {
    width: convert(950),
    marginVertical: convert(22),
    flexDirection: 'row',
    justifyContent: 'center',
    borderWidth: convert(5),
    borderRadius: convert(25),
    borderColor: colors.dark.CONTRAST,
  },
  txtroot: {
    // height: convert(350),
    width: convert(850),
    alignItems: 'center',
    justifyContent: 'center',
  },
  arrow: {
    left: {
      width: convert(50),
      alignItems: 'flex-end',
      justifyContent: 'center',

      // borderWidth: 1,
      // borderColor: 'red',
    },
    right: {
      width: convert(50),
      justifyContent: 'center',

      // borderWidth: 1,
      // borderColor: 'red',
    },
  },
  title: {
    fontFamily: 'Montserrat-SemiBold',
    color: colors.dark.CONTRAST,
    fontSize: FontSize.semiMedium,
  },
  arabic: {
    fontWeight: 'bold',
    color: colors.dark.ACCENT,
    fontSize: FontSize.semiLarge,
    textAlign: 'center',
  },
  transliteration: {
    fontFamily: 'Montserrat-Regular',
    color: colors.dark.CONTRAST,
    fontSize: FontSize.small,
    textAlign: 'center',
  },
  translation: {
    fontFamily: 'Montserrat-Regular',
    color: colors.dark.CONTRAST,
    fontSize: FontSize.small,
    textAlign: 'center',
  },
  source: {
    fontFamily: 'Montserrat-ThinItalic',
    color: colors.dark.CONTRAST,
    fontSize: FontSize.tiny,
    textAlign: 'center',
  },
});
