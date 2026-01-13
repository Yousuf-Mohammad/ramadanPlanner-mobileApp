import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors} from '../../../assets/colors/colors';
import {convert} from '../../../assets/dimensions/dimensions';
import {BgBoxProps} from '../../../libs/types/components';

const BgBox: React.FC<BgBoxProps> = ({title, children}) => {
  return (
    <View
      style={{
        ...styles.root,
        marginBottom: title === 'Completed today' ? undefined : convert(41),
        paddingTop: convert(35),
        paddingBottom: title === 'Today' ? convert(35) : undefined,
      }}>
      <View style={styles.titleBg}>
        <Text style={styles.titleTxt}>{title}</Text>
      </View>
      <View style={styles.children}>{children}</View>
    </View>
  );
};

export default BgBox;

const styles = StyleSheet.create({
  root: {
    width: convert(935),
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: convert(5),
    borderRadius: convert(25),
    borderColor: colors.dark.CONTRAST,
  },
  titleBg: {
    paddingHorizontal: convert(50),
    backgroundColor: colors.dark.PRIMARY,
    position: 'absolute',
    top: -12,
    alignItems: 'center',
  },
  titleTxt: {
    fontFamily: 'Montserrat-SemiBold',
    color: colors.dark.CONTRAST,
  },
  children: {},
});
