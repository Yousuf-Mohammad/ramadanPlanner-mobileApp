import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Modal from 'react-native-modal';

interface TargetInputModal {
  isVisible: boolean;
  toggleModal: () => void;
}

export const TargetInputModal: React.FC<TargetInputModal> = ({
  isVisible,
  toggleModal,
}) => {
  const _renderButton = (text: string, onPress: () => void) => (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <Text>{text}</Text>
      </View>
    </TouchableOpacity>
  );

  const _renderModalContent = () => (
    <View style={styles.modalContent}>
      <Text>You Clicked On Modal !</Text>
      {_renderButton('Close', () => toggleModal())}
    </View>
  );

  return (
    <View style={styles.container}>
      <Modal
        isVisible={isVisible}
        onBackdropPress={toggleModal}
        style={styles.bottomModal}>
        {_renderModalContent()}
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'lightblue',
    padding: 12,
    margin: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
  bottomModal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
});
