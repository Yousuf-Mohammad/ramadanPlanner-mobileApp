import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
// assets
import {convert} from '../../assets/dimensions/dimensions';
import {colors} from '../../assets/colors/colors';
import {FontSize} from '../../assets/fonts/fonts';
import {IFTAR_TXT, SEHERI_TXT} from '../../assets/texts/staticText';
import {TopRightContainerProps} from '../../libs/types/components';

const TopRightContainer: React.FC<TopRightContainerProps> = ({
  seheri,
  iftar,
  city,
}) => {
  return (
    <View style={styles.root}>
      <View style={styles.topBoxContainer}>
        {/* sahri iftar component */}
        <View style={styles.topbox}>
          <Text style={styles.text}>
            {SEHERI_TXT}
            <Text style={styles.time}>
              {' '}
              {seheri.hour} : {seheri.minute}
              {' AM'}
            </Text>
          </Text>

          <View style={styles.iftarContainer}>
            <Text style={styles.text}>
              {IFTAR_TXT}
              <Text style={styles.time}>
                {' '}
                {iftar.hour} : {iftar.minute}
                {' PM'}
              </Text>
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.locationContainer}>
        <Icon name={'location-pin'} size={20} color={colors.dark.WHITE} />
        <Text style={styles.locationTxt}>{city}</Text>
      </View>
    </View>
  );
};

export default TopRightContainer;

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  topBoxContainer: {
    height: convert(200),
    justifyContent: 'center',
    marginRight: convert(20),
  },
  topbox: {
    justifyContent: 'center',
    height: convert(92.5),
  },
  text: {color: colors.dark.BLACK, fontFamily: 'Montserrat-Bold'},
  time: {
    fontSize: FontSize.mgsBottom,
    fontWeight: 'bold',
    color: colors.dark.PRIMARY,
  },
  iftarContainer: {alignSelf: 'flex-end'},
  locationContainer: {
    height: convert(100),
    width: convert(200),
    paddingHorizontal: convert(5),
    marginLeft: convert(5),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: convert(40),
    backgroundColor: colors.dark.PRIMARY,
  },
  locationTxt: {
    fontFamily: 'Montserrat-ExtraBold',
    color: colors.dark.WHITE,
    fontSize: convert(27),
  },
});
