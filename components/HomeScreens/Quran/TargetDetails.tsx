import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {FontSize} from '../../../assets/fonts/fonts';
import {colors} from '../../../assets/colors/colors';
import {convert} from '../../../assets/dimensions/dimensions';
import {Button} from 'react-native-elements';

interface TargetDetailsProps {
  handleFinish: () => void;
  templateTitle: string;
}

const TargetDetails: React.FC<TargetDetailsProps> = ({
  handleFinish,
  templateTitle,
}) => {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.mainText}>{templateTitle}</Text>
      <View style={[styles.rootContainer, styles.targetContainer]}>
        <Text style={styles.mainText}>{'Target Details'}</Text>
        <View style={{borderWidth: 1, borderColor: 'red', width: convert(750)}}>
          <Text style={styles.mainText}>{'Start Range'}</Text>
          <Text style={styles.mainText}>{'End Range'}</Text>
          <Text style={styles.mainText}>{'Last Read'}</Text>
          <Text style={styles.mainText}>{'Start Date'}</Text>
          <Text style={styles.mainText}>{'End Date'}</Text>
          <Text style={styles.mainText}>{'Streak'}</Text>
        </View>

        <Button
          title={'Completed Today'}
          buttonStyle={[
            styles.btnButtonStyle,
            {
              backgroundColor: colors.dark.CONTRAST,
              width: convert(750),
              marginTop: convert(100),
            },
          ]}
          titleStyle={[styles.btnTitleStyle, {color: colors.dark.PRIMARY}]}
          onPress={() => {
            // modal
            // completeTodayHandler();
          }}
        />
      </View>

      <Button
        title={'FINISH TARGET'}
        buttonStyle={[
          styles.btnButtonStyle,
          {backgroundColor: colors.dark.ERROR},
        ]}
        titleStyle={[styles.btnTitleStyle, {color: colors.dark.CONTRAST}]}
        onPress={() => {
          // modal
          handleFinish();
        }}
      />
    </View>
  );
};

export default TargetDetails;

const styles = StyleSheet.create({
  loadingRoot: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  loadingTxt: {fontSize: FontSize.secondaryTitle, color: colors.dark.BLACK},
  rootContainer: {alignItems: 'center' },
  targetContainer: {
    width: convert(900),
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: convert(25),
    marginBottom: convert(75),
    borderWidth: convert(5),
    borderRadius: convert(25),
    borderColor: colors.dark.CONTRAST,
  },
  mainText: {
    marginVertical: convert(25),
    fontFamily: 'Montserrat-SemiBold',
    color: colors.dark.CONTRAST,
  },
  btnButtonStyle: {
    height: convert(100),
    width: convert(890),
    marginBottom: convert(58),
    borderRadius: convert(25),
    backgroundColor: colors.dark.CONTRAST,
    // borderWidth: convert(10),
    // borderColor: colors.dark.ACCENT,
  },
  inputContainer: {alignItems: 'center'},
  btnTitleStyle: {
    fontFamily: 'Montserrat-SemiBold',
    color: colors.dark.PRIMARY,
  },
});
