
#import <React/RCTViewManager.h>
#import <React/RCTUtils.h>
#import "RNCAppleSignInButton.h"
@import AuthenticationServices;

@interface RNCAppleSignInButtonManager : RCTViewManager
@end

@implementation RNCAppleSignInButtonManager

RCT_EXPORT_MODULE(RNCAppleSignInButtonManager)

- (UIView *)view
{
  return [[RNCAppleSignInButton alloc] initWithAuthorizationButtonType:ASAuthorizationAppleIDButtonTypeDefault authorizationButtonStyle:ASAuthorizationAppleIDButtonStyleBlack];
}

RCT_EXPORT_VIEW_PROPERTY(onPress, RCTBubblingEventBlock)


@end
