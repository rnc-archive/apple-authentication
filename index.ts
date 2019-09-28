import { NativeModules, requireNativeComponent } from 'react-native';
import { ComponentType } from 'react';

export interface SignInWithAppleOptions {
  /**
   * The scopes that you are requesting. Supply an array. Defaults to an empty array (no scopes).
   */
  requestedScopes?: SignInWithAppleScope[];

  /**
   * The operation that you would like to perform.
   */
  requestedOperation?: SignInWithAppleOperation;

  /**
   * Typically you leave this property set to nil the first time you authenticate a user.
   * Otherwise, if you previously received an SignInWithAppleCredential set this property to the value from the user property.
   * Must be set for Refresh and Logout operations.
   */
  user?: string;

  /**
   * Data that’s returned to you unmodified in the corresponding credential after a successful authentication.
   * Used to verify that the response was from the request you made. Can be used to avoid replay attacks.
   */
  state?: string;
}

export interface SignInWithAppleCredential {
  /**
   * A JSON Web Token (JWT) that securely communicates information about the user to your app.
   */
  identityToken: string;

  /**
   * A short-lived token used by your app for proof of authorization when interacting with the app’s server counterpart.
   */
  authorizationCode: string;

  /**
   * An arbitrary string that your app provided to the request that generated the credential.
   * You can set this in SignInWithAppleOptions.
   */
  user: string;

  /**
   * An identifier associated with the authenticated user.
   * You can use this to check if the user is still authenticated later.
   * This is stable and can be shared across apps released under the same development team.
   * The same user will have a different identifier for apps released by other developers.
   */
  state?: string;

  /**
   * The contact information the user authorized your app to access.
   */
  authorizedScopes: SignInWithAppleScope[];

  /**
   * The user’s name. Might not present if you didn't request access or if the user denied access.
   */
  fullName?: string;

  /**
   * The user’s email address. Might not present if you didn't request access or if the user denied access.
   */
  email?: string;

  /**
   * A value that indicates whether the user appears to be a real person.
   */
  realUserStatus: SignInWithAppleUserDetectionStatus;
}

export interface SignInWithAppleScopes {
  /**
   * A scope that includes the user’s full name.
   */
  FULL_NAME: string;
  
  /**
   * A scope that includes the user’s email address.
   */
  EMAIL: string;
}

export type SignInWithAppleScope = keyof SignInWithAppleScopes;

export interface SignInWithAppleOperations {
  /**
   * An operation used to authenticate a user.
   */
  LOGIN: string;

  /**
   * An operation that ends an authenticated session.
   */
  LOGOUT: string;

  /**
   * An operation that refreshes the logged-in user’s credentials.
   */
  REFRESH: string;

  /**
   * An operation that depends on the particular kind of credential provider.
   */
  IMPLICIT: string;
}

export type SignInWithAppleOperation = keyof SignInWithAppleOperations;

export interface SignInWithAppleUserDetectionStatuses {
  /**
   * The user appears to be a real person.
   */
  LIKELY_REAL: string;

  /**
   * The system hasn’t determined whether the user might be a real person.
   */
  UNKNOWN: string;

  /**
   * The system can’t determine this user’s status as a real person.
   */
  UNSUPPORTED: string;
}

export type SignInWithAppleUserDetectionStatus = keyof SignInWithAppleUserDetectionStatuses;


export interface ISignInWithApple {
  /**
   * Perform a Sign In with Apple request with the given SignInWithAppleOptions.
   * The method will return a Promise which will resolve to a SignInWithAppleCredential on success.
   * You should make sure you include error handling.
   */
  requestAsync: (signInWithAppleOptions: SignInWithAppleOptions) => Promise<SignInWithAppleCredential>;
  /**
   * Controls which scopes you are requesting when the call SignInWithApple.requestAsync().
   */
  Scope: SignInWithAppleScopes;
  /**
   * Controls what operation you are requesting when the call SignInWithApple.requestAsync().
   */
  Operation: SignInWithAppleOperations;
  /**
   * A value that indicates whether the user appears to be a real person.
   * You get this in the realUserStatus property of a SignInWithAppleCredential object.
   * It can be used as one metric to help prevent fraud.
   */
  UserDetectionStatus: SignInWithAppleUserDetectionStatuses;
}

export const SignInWithApple: ISignInWithApple = NativeModules.RNCAppleAuthentication;

export interface SignInWithAppleButtonProps {
  /**
   * The callback which is called when the user pressed the button.
   */
  onPress: () => void;

  /**
   * Controls the text that is shown on the button.
   */
  type?: SignInWithAppleButtonType;

  /**
   * Controls the style of the button.
   */
  style?: SignInWithAppleButtonStyle;

  /**
   * The radius of the corners of the button.
   */
  cornerRadius?: number;
}

export interface SignInWithAppleButtonTypes {
  DEFAULT: string;
  SIGN_UP: string;
  CONTINUE: string;
}

export type SignInWithAppleButtonType = keyof SignInWithAppleButtonTypes;

export interface SignInWithAppleButtonStyles {
  BLACK: string;
  WHITE: string;
  WHITE_OUTLINE: string;
}

export type SignInWithAppleButtonStyle = keyof SignInWithAppleButtonStyles;

export type ISignInWithAppleButton = ComponentType<SignInWithAppleButtonProps> & {
  Type: SignInWithAppleButtonTypes;
  Style: SignInWithAppleButtonStyles;
}

export const SignInWithAppleButton: ISignInWithAppleButton = requireNativeComponent('RNCSignInWithAppleButton');
