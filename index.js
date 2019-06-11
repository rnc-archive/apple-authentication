import { NativeModules } from 'react-native';
import { requireNativeComponent } from 'react-native';

const { RNCAppleSignIn } = NativeModules;

export const AppleSignInButton = requireNativeComponent('RNCAppleSignInButton');

export default RNCAppleSignIn;
