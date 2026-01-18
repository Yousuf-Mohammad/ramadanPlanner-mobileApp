import React, {useEffect, useState} from 'react';
import {Modal, StyleSheet, Text, View} from 'react-native';
import {ActivityIndicator} from 'react-native-paper';
import {useSelector} from 'react-redux';
// rtk-slices
import {useGetRecitationInfoQuery} from '../../../redux-toolkit/features/recitation-Info/recitation-info-slice';
// assets
import {colors} from '../../../assets/colors/colors';
import {FontSize} from '../../../assets/fonts/fonts';
// components
import {getArabicDate} from '../../../redux-toolkit/features/arabic-date/arabicDate';
import LoginRequest from '../../../components/AuthScreens/LoginRequest';
import {getAuthToken} from '../../../redux-toolkit/features/authentication/authToken';
import QuranTemplate from './QuranTemplate';
import {getCache, setCache} from '../../../functions/Cache/cache';
import {convert} from '../../../assets/dimensions/dimensions';
import {Button} from 'react-native-elements';
import TargetDetails from './TargetDetails';
import {TargetInputModal} from './TargetInputModal';

const QuranTracker = () => {
  const day = useSelector(getArabicDate);
  const loggedIn = useSelector(getAuthToken);

  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const toggleModal: () => void = () => setModalVisible(!modalVisible);

  // todo:perf: memoize other components, so that useState doesn't affect them all
  const [templateTitle, setTemplateTitle] = useState<string>('');
  const {data, isLoading} = useGetRecitationInfoQuery({
    year: day.year,
    month: day.monthNumber,
    day: day.day,
  });

  const viewSelection: boolean = templateTitle === '';

  const handleSubmit = (key: string, title: string) => {
    setTemplateTitle(title);
    setCache(key, title);
  };

  const handleFinish = () => {
    handleSubmit('template', '');
  };

  useEffect(() => {
    (async () => {
      const template = await getCache('template');
      if (template) {
        setTemplateTitle(template);
      }
    })();
  }, []);

  if (isLoading) {
    return (
      <View style={styles.loadingRoot}>
        <ActivityIndicator
          animating={true}
          color={colors.dark.CONTRAST}
          size={'large'}
        />
      </View>
    );
  }

  return (
    <View style={{}}>
      {!loggedIn ? <LoginRequest /> : null}

      {viewSelection ? (
        <View style={styles.rootContainer}>
          <Text style={styles.mainText}>Select a target to get started!</Text>
          <QuranTemplate title="1 Ayat Per Day" handleSubmit={handleSubmit} />
          <QuranTemplate title="1 Surah Per Day" handleSubmit={handleSubmit} />
          <Button title="modal" onPress={() => toggleModal()} />

          <TargetInputModal
            isVisible={modalVisible}
            toggleModal={toggleModal}
          />
        </View>
      ) : (
        <TargetDetails
          handleFinish={handleFinish}
          templateTitle={templateTitle}
        />
      )}
    </View>
  );
};

export default QuranTracker;

const styles = StyleSheet.create({
  loadingRoot: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  loadingTxt: {fontSize: FontSize.secondaryTitle, color: colors.dark.BLACK},
  rootContainer: {
    alignItems: 'center',
    marginBottom: convert(75),
  },
  mainText: {
    marginVertical: convert(25),
    fontFamily: 'Montserrat-SemiBold',
    color: colors.dark.CONTRAST,
  },
});
