/* eslint-disable @typescript-eslint/no-unused-vars */
import {Image, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {COLORS, ICONS, IMAGES} from '../constant/constant';

type Props = {
  image: any;
  focused: boolean;
};

export const TabIcon = (props: Props) => (
  <View
    style={{
      width: 50,
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
    }}>
    <Image
      style={{
        width: 30,
        height: 30,
        tintColor: props.focused ? COLORS.primary : COLORS.gray,
      }}
      source={props.image}
    />
    {props.focused && (
      <View
        style={{
          position: 'absolute',
          height: 5,
          borderTopLeftRadius: 3,
          borderTopRightRadius: 3,
          width: '100%',
          bottom: 0,
          backgroundColor: COLORS.primary,
        }}
      />
    )}
  </View>
);
