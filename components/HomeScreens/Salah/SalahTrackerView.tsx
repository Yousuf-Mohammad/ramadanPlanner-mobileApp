import React, {useRef, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {CheckBox} from 'react-native-elements';
import {useSelector, useDispatch} from 'react-redux';
// assets
import {colors} from '../../../assets/colors/colors';
import {convert} from '../../../assets/dimensions/dimensions';
import {FontSize} from '../../../assets/fonts/fonts';
// rtk-slices
import {useSetSalahCheckListMutation} from '../../../redux-toolkit/features/salah-checklist/salah-checklist-slice';
import {setSalahInfo} from '../../../redux-toolkit/features/salah-checklist/salah-info';
import {getArabicDate} from '../../../redux-toolkit/features/arabic-date/arabicDate';

import {SalahCheckboxState} from '../../../libs/types/models';
import {isAuthenticated} from '../../../functions/AuthFunctions';
import {Toast} from 'toastify-react-native';

const SalahTrackerView: React.FC<{data: SalahCheckboxState | undefined}> = ({
  data,
}) => {
  const dispatch = useDispatch();
  const day = useSelector(getArabicDate);

  const [setSalahCheckList] = useSetSalahCheckListMutation();

  //* handeling race conditions with queue
  const stateUpdateQueue = useRef<any[]>([]);
  const [processingQueue, setProcessingQueue] = useState(false);

  const addToQueue = (field: any, value: any) => {
    stateUpdateQueue.current.push({field, value});
    if (!processingQueue) {
      processQueue();
    }
  };

  const processQueue = async () => {
    setProcessingQueue(true);

    while (stateUpdateQueue.current.length > 0) {
      const {field, value} = stateUpdateQueue.current[0];
      try {
        await setSalahCheckList({
          field,
          value,
          year: day.year,
          month: day.monthNumber,
          day: day.day,
        });

        // sync db & state
        dispatch(setSalahInfo({field: field, value: value}));

        // Remove processed state from the queue
        stateUpdateQueue.current.shift();
      } catch (error) {
        console.error('Error updating state:', error);
        break;
      }
    }

    setProcessingQueue(false);
  };

  //   todo: think of a alternative solution than using 13 useState in a single component
  const [fajr, setFajr] = useState(data?.fardh_fajr || false);
  const [fajrSunnah, setFajrSunnah] = useState(data?.sunnah_fajr || false);
  const [johr, setJohr] = useState(data?.fardh_duhr || false);
  const [johrSunnah, setJohrSunnah] = useState(data?.sunnah_duhr || false);
  const [asr, setAsr] = useState(data?.fardh_asr || false);
  const [asrSunnah, setAsrSunnah] = useState(data?.sunnah_asr || false);
  const [magrib, setMagrib] = useState(data?.fardh_maghrib || false);
  const [magribSunnah, setMagribSunnah] = useState(
    data?.sunnah_maghrib || false,
  );
  const [esha, setEsha] = useState(data?.fardh_isha || false);
  const [eshaSunnah, setEshaSunnah] = useState(data?.sunnah_isha || false);
  const [taraweeh, setTaraweeh] = useState(data?.sunnah_taraweeh || false);
  const [tahajjut, setTahajjut] = useState(data?.sunnah_tahajjud || false);
  const [salahDuha, setSalahDuha] = useState(data?.sunnah_duha || false);

  // ... (keeping helper functions concise for brevity if possible, but replacing full file so I need them)
  const checkFajr = async () => {
    let newValue = !fajr;
    setFajr(newValue);
    addToQueue('fardh_fajr', newValue);
  };
  const checkFajrSunnah = async () => {
    let newValue = !fajrSunnah;
    setFajrSunnah(newValue);
    addToQueue('sunnah_fajr', newValue);
  };
  const checkJohr = async () => {
    let newValue = !johr;
    setJohr(newValue);
    addToQueue('fardh_duhr', newValue);
  };
  const checkJohrSunnah = async () => {
    let newValue = !johrSunnah;
    setJohrSunnah(newValue);
    addToQueue('sunnah_duhr', newValue);
  };
  const checkAsr = async () => {
    let newValue = !asr;
    setAsr(newValue);
    addToQueue('fardh_asr', newValue);
  };
  const checkAsrSunnah = async () => {
    let newValue = !asrSunnah;
    setAsrSunnah(newValue);
    addToQueue('sunnah_asr', newValue);
  };
  const checkMagrib = async () => {
    let newValue = !magrib;
    setMagrib(newValue);
    addToQueue('fardh_maghrib', newValue);
  };
  const checkMagribSunnah = async () => {
    let newValue = !magribSunnah;
    setMagribSunnah(newValue);
    addToQueue('sunnah_maghrib', newValue);
  };
  const checkEsha = async () => {
    let newValue = !esha;
    setEsha(newValue);
    addToQueue('fardh_isha', newValue);
  };
  const checkEshaSunnah = async () => {
    let newValue = !eshaSunnah;
    setEshaSunnah(newValue);
    addToQueue('sunnah_isha', newValue);
  };
  const checkTaraweeh = async () => {
    let newValue = !taraweeh;
    setTaraweeh(newValue);
    addToQueue('sunnah_taraweeh', newValue);
  };
  const checkTahajjut = async () => {
    let newValue = !tahajjut;
    setTahajjut(newValue);
    addToQueue('sunnah_tahajjud', newValue);
  };
  const checkSalahDuha = async () => {
    let newValue = !salahDuha;
    setSalahDuha(newValue);
    addToQueue('sunnah_duha', newValue);
  };

  const salah = [
    {
      salahName: 'Fajr',
      farj: true,
      checked: fajr,
      checkedSunnah: fajrSunnah,
      farjCheck: checkFajr,
      sunnahCheck: checkFajrSunnah,
    },
    {
      salahName: 'Johr',
      farj: true,
      checked: johr,
      checkedSunnah: johrSunnah,
      farjCheck: checkJohr,
      sunnahCheck: checkJohrSunnah,
    },
    {
      salahName: 'Asr',
      farj: true,
      checked: asr,
      checkedSunnah: asrSunnah,
      farjCheck: checkAsr,
      sunnahCheck: checkAsrSunnah,
    },
    {
      salahName: 'Magrib',
      farj: true,
      checked: magrib,
      checkedSunnah: magribSunnah,
      farjCheck: checkMagrib,
      sunnahCheck: checkMagribSunnah,
    },
    {
      salahName: 'Esha',
      farj: true,
      checked: esha,
      checkedSunnah: eshaSunnah,
      farjCheck: checkEsha,
      sunnahCheck: checkEshaSunnah,
    },
    {
      salahName: 'Taraweeh',
      farj: false,
      checked: false, // fixed empty string to boolean
      checkedSunnah: taraweeh,
      farjCheck: () => {}, // fixed null
      sunnahCheck: checkTaraweeh,
    },
    {
      salahName: 'Tahajjut',
      farj: false,
      checked: false,
      checkedSunnah: tahajjut,
      farjCheck: () => {},
      sunnahCheck: checkTahajjut,
    },
    {
      salahName: 'Salatuh duha',
      farj: false,
      checked: false,
      checkedSunnah: salahDuha,
      farjCheck: () => {},
      sunnahCheck: checkSalahDuha,
    },
  ];

  return (
    <View style={styles.trackerContainer}>
      {/* ROW TITLE */}
      <View style={styles.salahRowContainer}>
        <View style={{...styles.smallBox, marginHorizontal: convert(30)}} />

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
            <View style={styles.rowsContainer}>
              <Text style={styles.rowsTxt}>{i.salahName}</Text>
            </View>

            <View style={styles.smallBox}>
              {i.farj ? (
                <CheckBox
                  checked={i.checked}
                  onPress={async () => {
                    const user = await isAuthenticated();
                    const toastMsg =
                      user === false ? 'Please Log in to continue' : '';

                    !user &&
                      Toast.show({
                        type: 'error',
                        text1: 'Error updating data',
                        text2: toastMsg,
                        position: 'top',
                        visibilityTime: 4000,
                        autoHide: true,
                        backgroundColor: colors.dark.PRIMARY,
                        textColor: colors.dark.WHITE,
                        progressBarColor: colors.dark.ERROR,
                        iconFamily: 'MaterialIcons',
                        icon: 'error',
                        iconColor: colors.dark.ERROR,
                      });

                    i.farjCheck();
                  }}
                  checkedColor={colors.dark.CONTRAST}
                  size={FontSize.semiMedium}
                />
              ) : (
                <></>
              )}
            </View>

            <View style={styles.smallBox}>
              <CheckBox
                checked={i.checkedSunnah}
                onPress={async () => {
                  const user = await isAuthenticated();
                  const toastMsg =
                    user === false ? 'Please Log in to continue' : '';

                  !user &&
                    Toast.show({
                      type: 'error',
                      text1: 'Error updating data',
                      text2: toastMsg,
                      position: 'top',
                      visibilityTime: 4000,
                      autoHide: true,
                      backgroundColor: colors.dark.PRIMARY,
                      textColor: colors.dark.WHITE,
                      progressBarColor: colors.dark.ERROR,
                      iconFamily: 'MaterialIcons',
                      icon: 'error',
                      iconColor: colors.dark.ERROR,
                    });

                  i.sunnahCheck();
                }}
                checkedColor={colors.dark.CONTRAST}
                size={FontSize.semiMedium}
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
    width: convert(950),
    height: convert(1150),
    borderWidth: convert(5),
    borderRadius: convert(25),
    borderColor: colors.dark.CONTRAST,
  },
  smallBox: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontFamily: 'Montserrat-SemiBold',
    color: colors.dark.CONTRAST,
    fontSize: FontSize.medium,
  },
  salahRowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: convert(125),
  },
  rowsContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: convert(90),
    marginHorizontal: convert(30),
    borderRadius: convert(25),
    backgroundColor: colors.dark.CONTRAST,
  },
  rowsTxt: {
    fontFamily: 'Montserrat-SemiBold',
    color: colors.dark.PRIMARY,
  },
});
