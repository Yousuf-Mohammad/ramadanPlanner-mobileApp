import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {CheckBox} from 'react-native-elements';
// assets
import {convert} from '../../../assets/dimensions/dimensions';
import {colors} from '../../../assets/colors/colors';
import {FontSize} from '../../../assets/fonts/fonts';

// todo: optimize the checkboxes, try a different appraoch to this useState solution, try a different appraoch to this useState solution, try a different appraoch to this useState solution, try a different appraoch to this useState solution
const SalahTracker = () => {
  const [fajr, setFajr] = useState(false);
  const [fajrSunnah, setFajrSunnah] = useState(false);
  const [johr, setJohr] = useState(false);
  const [johrSunnah, setJohrSunnah] = useState(false);
  const [asr, setAsr] = useState(false);
  const [asrSunnah, setAsrSunnah] = useState(false);
  const [magrib, setMagrib] = useState(false);
  const [magribSunnah, setMagribSunnah] = useState(false);
  const [esha, setEsha] = useState(false);
  const [eshaSunnah, setEshaSunnah] = useState(false);
  const [taraweeh, setTaraweeh] = useState(false);
  const [tahajjut, setTahajjut] = useState(false);
  const [salahDuha, setSalahDuha] = useState(false);

  const checkFajr = () => {
    setFajr(prev => !prev);
  };
  const checkFajrSunnah = () => {
    setFajrSunnah(prev => !prev);
  };
  const checkJohr = () => {
    setJohr(prev => !prev);
  };
  const checkJohrSunnah = () => {
    setJohrSunnah(prev => !prev);
  };
  const checkAsr = () => {
    setAsr(prev => !prev);
  };
  const checkAsrSunnah = () => {
    setAsrSunnah(prev => !prev);
  };
  const checkMagrib = () => {
    setMagrib(prev => !prev);
  };
  const checkMagribSunnah = () => {
    setMagribSunnah(prev => !prev);
  };
  const checkEsha = () => {
    setEsha(prev => !prev);
  };
  const checkEshaSunnah = () => {
    setEshaSunnah(prev => !prev);
  };
  const checkTaraweeh = () => {
    setTaraweeh(prev => !prev);
  };
  const checkTahajjut = () => {
    setTahajjut(prev => !prev);
  };
  const checkSalahDuha = () => {
    setSalahDuha(prev => !prev);
  };

  const salah = [
    {
      salahName: 'fajr',
      farj: true,
      checked: fajr,
      checkedSunnah: fajrSunnah,
      farjCheck: checkFajr,
      sunnahCheck: checkFajrSunnah,
    },
    {
      salahName: 'johr',
      farj: true,
      checked: johr,
      checkedSunnah: johrSunnah,
      farjCheck: checkJohr,
      sunnahCheck: checkJohrSunnah,
    },
    {
      salahName: 'asr',
      farj: true,
      checked: asr,
      checkedSunnah: asrSunnah,
      farjCheck: checkAsr,
      sunnahCheck: checkAsrSunnah,
    },
    {
      salahName: 'magrib',
      farj: true,
      checked: magrib,
      checkedSunnah: magribSunnah,
      farjCheck: checkMagrib,
      sunnahCheck: checkMagribSunnah,
    },
    {
      salahName: 'esha',
      farj: true,
      checked: esha,
      checkedSunnah: eshaSunnah,
      farjCheck: checkEsha,
      sunnahCheck: checkEshaSunnah,
    },
    {
      salahName: 'taraweeh',
      farj: false,
      checked: '',
      checkedSunnah: taraweeh,
      farjCheck: null,
      sunnahCheck: checkTaraweeh,
    },
    {
      salahName: 'tahajjut',
      farj: false,
      checked: '',
      checkedSunnah: tahajjut,
      farjCheck: null,
      sunnahCheck: checkTahajjut,
    },
    {
      salahName: 'salatuh duha',
      farj: false,
      checked: '',
      checkedSunnah: salahDuha,
      farjCheck: null,
      sunnahCheck: checkSalahDuha,
    },
  ];

  return (
    <View style={styles.trackerContainer}>
      {/* ROW TITLE */}
      <View style={styles.salahRowContainer}>
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
          <View key={idx} style={styles.salahRowContainer}>
            <View style={styles.smallBox}>
              <Text style={styles.title}>{i.salahName}</Text>
            </View>

            <View style={styles.smallBox}>
              {i.farj ? (
                <CheckBox
                  checked={i.checked}
                  onPress={() => i.farjCheck()}
                  checkedColor={colors.light.PRIMARY}
                />
              ) : (
                <></>
              )}
            </View>
            <View style={styles.smallBox}>
              <CheckBox
                checked={i.checkedSunnah}
                onPress={() => i.sunnahCheck()}
                checkedColor={colors.light.PRIMARY}
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
  salahRowContainer: {
    flexDirection: 'row',
    height: convert(130),
    borderWidth: 1,
    borderLeftColor: colors.light.WHITE,
    borderRightColor: colors.light.WHITE,
    borderTopColor: colors.light.WHITE,
    borderBottomColor: colors.light.BLACK,
    // borderColor: 'black',
  },
});
