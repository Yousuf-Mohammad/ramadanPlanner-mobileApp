/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {CheckBox} from 'react-native-elements';
// assets
import {colors} from '../../../assets/colors/colors';
import {convert} from '../../../assets/dimensions/dimensions';
import {FontSize} from '../../../assets/fonts/fonts';
// rtk-slices
import {useSetSalahCheckListMutation} from '../../../redux-toolkit/features/salah-checklist/salah-checklist-slice';

const SalahTrackerView = ({data}) => {
  const [setSalahCheckList] = useSetSalahCheckListMutation();

  //   todo: think of a alternative solution than using 13 useState in a single component
  const [fajr, setFajr] = useState(data.fardh_fajr);
  const [fajrSunnah, setFajrSunnah] = useState(data.sunnah_fajr);
  const [johr, setJohr] = useState(data.fardh_duhr);
  const [johrSunnah, setJohrSunnah] = useState(data.sunnah_duhr);
  const [asr, setAsr] = useState(data.fardh_asr);
  const [asrSunnah, setAsrSunnah] = useState(data.sunnah_asr);
  const [magrib, setMagrib] = useState(data.fardh_maghrib);
  const [magribSunnah, setMagribSunnah] = useState(data.sunnah_maghrib);
  const [esha, setEsha] = useState(data.fardh_isha);
  const [eshaSunnah, setEshaSunnah] = useState(data.sunnah_isha);
  const [taraweeh, setTaraweeh] = useState(data.sunnah_taraweeh);
  const [tahajjut, setTahajjut] = useState(data.sunnah_tahajjud);
  const [salahDuha, setSalahDuha] = useState(data.sunnah_duha);

  const checkFajr = async () => {
    let previous = null;

    setFajr(prev => {
      previous = prev;
      return !prev;
    });

    const response = await setSalahCheckList({
      field: 'fardh_fajr',
      value: `${!previous}`,
    });
  };

  const checkFajrSunnah = async () => {
    let previous = null;

    setFajrSunnah(prev => {
      previous = prev;
      return !prev;
    });

    const response = await setSalahCheckList({
      field: 'sunnah_fajr',
      value: `${!previous}`,
    });
  };

  const checkJohr = async () => {
    let previous = null;

    setJohr(prev => {
      previous = prev;
      return !prev;
    });

    const response = await setSalahCheckList({
      field: 'fardh_duhr',
      value: `${!previous}`,
    });
  };

  const checkJohrSunnah = async () => {
    let previous = null;

    setJohrSunnah(prev => {
      previous = prev;
      return !prev;
    });

    const response = await setSalahCheckList({
      field: 'sunnah_duhr',
      value: `${!previous}`,
    });
  };

  const checkAsr = async () => {
    let previous = null;

    setAsr(prev => {
      previous = prev;
      return !prev;
    });

    const response = await setSalahCheckList({
      field: 'fardh_asr',
      value: `${!previous}`,
    });
  };

  const checkAsrSunnah = async () => {
    let previous = null;

    setAsrSunnah(prev => {
      previous = prev;
      return !prev;
    });

    const response = await setSalahCheckList({
      field: 'sunnah_asr',
      value: `${!previous}`,
    });
  };

  const checkMagrib = async () => {
    let previous = null;

    setMagrib(prev => {
      previous = prev;
      return !prev;
    });

    const response = await setSalahCheckList({
      field: 'sunnah_asr',
      value: `${!previous}`,
    });
  };

  const checkMagribSunnah = async () => {
    let previous = null;

    setMagribSunnah(prev => {
      previous = prev;
      return !prev;
    });

    const response = await setSalahCheckList({
      field: 'sunnah_asr',
      value: `${!previous}`,
    });
  };

  const checkEsha = async () => {
    let previous = null;

    setEsha(prev => {
      previous = prev;
      return !prev;
    });

    const response = await setSalahCheckList({
      field: 'fardh_isha',
      value: `${!previous}`,
    });
  };

  const checkEshaSunnah = async () => {
    let previous = null;

    setEshaSunnah(prev => {
      previous = prev;
      return !prev;
    });

    const response = await setSalahCheckList({
      field: 'sunnah_isha',
      value: `${!previous}`,
    });
  };

  const checkTaraweeh = async () => {
    let previous = null;

    setTaraweeh(prev => {
      previous = prev;
      return !prev;
    });

    const response = await setSalahCheckList({
      field: 'sunnah_taraweeh',
      value: `${!previous}`,
    });
  };

  const checkTahajjut = async () => {
    let previous = null;

    setTahajjut(prev => {
      previous = prev;
      return !prev;
    });

    const response = await setSalahCheckList({
      field: 'sunnah_tahajjud',
      value: `${!previous}`,
    });
  };

  const checkSalahDuha = async () => {
    let previous = null;

    setSalahDuha(prev => {
      previous = prev;
      return !prev;
    });

    const response = await setSalahCheckList({
      field: 'sunnah_duha',
      value: `${!previous}`,
    });
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

export default SalahTrackerView;

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
