import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {CheckBox} from 'react-native-elements';
// assets
import {convert} from '../../../assets/dimensions/dimensions';
import {colors} from '../../../assets/colors/colors';
import {FontSize} from '../../../assets/dimensions/fonts';

const SalahTracker = () => {
  const [checked, setChecked] = useState({
    fajr: false,
    fajrSunnah: false,
    johr: false,
    johrSunnah: false,
    asr: false,
    asrSunnah: false,
    magrib: false,
    magribSunnah: false,
    esha: false,
    eshaSunnah: false,
    taraweeh: false,
    tahajjut: false,
    salatud_duha: false,
  });

  const salah = [
    {
      salahName: 'fajr',
      farj: true,
      checked: checked.fajr,
      checkedSunnah: checked.fajrSunnah,
      farjName: 'fajr',
      sunnahName: 'fajrSunnah',
    },
    {
      salahName: 'johr',
      farj: true,
      checked: checked.johr,
      checkedSunnah: checked.johrSunnah,
      farjName: 'johr',
      sunnahName: 'johrSunnah',
    },
    {
      salahName: 'asr',
      farj: true,
      checked: checked.asr,
      checkedSunnah: checked.asrSunnah,
      farjName: 'asr',
      sunnahName: 'asrSunnah',
    },
    {
      salahName: 'magrib',
      farj: true,
      checked: checked.magrib,
      checkedSunnah: checked.magribSunnah,
      farjName: 'magrib',
      sunnahName: 'magribSunnah',
    },
    {
      salahName: 'esha',
      farj: true,
      checked: checked.esha,
      checkedSunnah: checked.eshaSunnah,
      farjName: 'esha',
      sunnahName: 'eshaSunnah',
    },
    {
      salahName: 'taraweeh',
      farj: false,
      checked: '',
      checkedSunnah: checked.taraweeh,
      farjName: '',
      sunnahName: 'taraweeh',
    },
    {
      salahName: 'tahajjut',
      farj: false,
      checked: '',
      checkedSunnah: checked.tahajjut,
      farjName: '',
      sunnahName: 'tahajjut',
    },
    {
      salahName: 'salatuh duha',
      farj: false,
      checked: '',
      checkedSunnah: checked.salatud_duha,
      farjName: '',
      sunnahName: 'salatud_duha',
    },
  ];

  const toggleCheckbox = checkboxName => {
    setChecked(prevState => {
      return {
        ...prevState,
        [checkboxName]: !prevState[checkboxName],
      };
    });
  };

  return (
    <View style={styles.trackerContainer}>
      {/* ROW TITLE */}
      <View style={styles.rowContainer}>
        <View style={styles.smallBox} />

        <View style={styles.smallBox}>
          <Text style={styles.title}>Farj</Text>
        </View>
        <View style={styles.smallBox}>
          <Text style={styles.title}>Sunnah</Text>
        </View>
      </View>
      {/* ROW TITLE */}

      {/* ROWS */}
      {salah.map((i, idx) => {
        return (
          <View style={styles.rowContainer}>
            <View style={styles.smallBox}>
              <Text style={styles.title}>{i.salahName}</Text>
            </View>

            <View style={styles.smallBox}>
              {i.farj ? (
                <CheckBox
                  checked={i.checked}
                  onPress={() => toggleCheckbox(i.farjName)}
                />
              ) : (
                <></>
              )}
            </View>
            <View style={styles.smallBox}>
              <CheckBox
                checked={i.checkedSunnah}
                onPress={() => toggleCheckbox(i.sunnahName)}
              />
            </View>
          </View>
        );
      })}
      {/* ROWS */}
    </View>
  );
};

export default SalahTracker;

const styles = StyleSheet.create({
  trackerContainer: {
    width: convert(1000),
    height: convert(1200),
    // borderWidth: 5,
    // borderColor: 'blue',
  },
  smallBox: {
    alignItems: 'center',
    justifyContent: 'center',
    width: convert(335),
    // borderWidth: 1,
    // borderColor: 'blue',
  },
  title: {color: colors.light.BLACK, fontSize: FontSize.secondaryTitle},
  rowContainer: {
    flexDirection: 'row',
    height: convert(135),
    borderWidth: 1,
    borderLeftColor: colors.light.WHITE,
    borderRightColor: colors.light.WHITE,
    borderTopColor: colors.light.WHITE,
    borderBottomColor: colors.light.BLACK,
    // borderColor: 'black',
  },
});
