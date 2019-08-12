#import <React/RCTComponent.h>
@import AuthenticationServices;

@interface RNCSignInWithAppleButton : ASAuthorizationAppleIDButton

@property (nonatomic, copy) RCTBubblingEventBlock onPress;

@end
