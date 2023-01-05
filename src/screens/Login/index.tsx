import {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button, TextField} from '../../components';
import common from '../../styles/common';

const LoginScreen: React.FC = () => {
  const [account, setAccount] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.label}>로그인</Text>
        <TextField
          value={account}
          onChangeText={setAccount}
          style={styles.mgBt}
        />
        <Text style={styles.label}>비밀번호</Text>
        <TextField
          value={password}
          onChangeText={setPassword}
          style={styles.mgBt}
        />
        <Button style={styles.mgT}>
          <Text style={{color: '#fff'}}>로그인</Text>
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  formContainer: {
    backgroundColor: '#eee',
    width: 270,
    height: 300,
    borderRadius: 10,
    padding: 40,
    ...common.shadow,
  },
  label: {
    marginBottom: 5,
    fontWeight: '600',
  },
  mgBt: {
    marginBottom: 10,
  },
  mgT: {
    marginTop: 40,
  },
});

export default LoginScreen;
