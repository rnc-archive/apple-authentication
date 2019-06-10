
#ifndef RNCAppleSignInButton_h
#define RNCAppleSignInButton_h

#import <React/RCTComponent.h>
@import AuthenticationServices;

@interface RNCAppleSignInButton : ASAuthorizationAppleIDButton

@property (nonatomic, copy) RCTBubblingEventBlock onPress;

@end

#endif /* RNCAppleSignInButton_h */
