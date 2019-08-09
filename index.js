import { NativeModules, requireNativeComponent } from 'react-native';

const { RNCAppleAuthentication } = NativeModules;
export { RNCAppleAuthentication as SignInWithApple };

export const SignInWithAppleButton = requireNativeComponent('RNCSignInWithAppleButton');
