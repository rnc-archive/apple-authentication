//
//  RNCAppleSignInButton.h
//  RNCAppleSignIn
//
//  Created by Vojtech Novak on 07/06/2019.
//  Copyright © 2019 Facebook. All rights reserved.
//

#ifndef RNCAppleSignInButton_h
#define RNCAppleSignInButton_h

#import <React/RCTComponent.h>
@import AuthenticationServices;

@interface RNCAppleSignInButton : ASAuthorizationAppleIDButton

@property (nonatomic, copy) RCTBubblingEventBlock onPress;

@end

#endif /* RNCAppleSignInButton_h */
