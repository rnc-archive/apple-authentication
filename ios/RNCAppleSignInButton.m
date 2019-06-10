//
//  RNCAppleSignInButton.m
//  RNCAppleSignIn
//
//  Created by Vojtech Novak on 07/06/2019.


#import "RNCAppleSignInButton.h"

@implementation RNCAppleSignInButton

-(instancetype)initWithAuthorizationButtonType:(ASAuthorizationAppleIDButtonType)type authorizationButtonStyle:(ASAuthorizationAppleIDButtonStyle)style {
  RNCAppleSignInButton* btn = [super initWithAuthorizationButtonType:ASAuthorizationAppleIDButtonTypeDefault authorizationButtonStyle:ASAuthorizationAppleIDButtonStyleBlack];
    [btn addTarget:self
              action:@selector(onDidPress)
    forControlEvents:UIControlEventTouchUpInside];
  return btn;
}

-(void)onDidPress {
  _onPress(nil);
}

@end
