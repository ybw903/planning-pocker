import {useState} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';

const LoginScreen: React.FC = () => {
  const [account, setAccount] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View>
      <TextInput value={account} onChangeText={setAccount} />
      <TextInput value={password} onChangeText={setPassword} />
      <TouchableOpacity>
        <Text>로그인</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
