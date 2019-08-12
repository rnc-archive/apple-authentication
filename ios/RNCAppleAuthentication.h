
#import <React/RCTBridgeModule.h>
//#import "RCTBridgeModule.h"
//#import <React/RCTBridge.h>

@import AuthenticationServices;

@interface RNCAppleAuthentication : NSObject <RCTBridgeModule, ASAuthorizationControllerDelegate, ASAuthorizationControllerPresentationContextProviding>

// TODO use promise wrapper like in google sign in
@property (nonatomic, strong) RCTPromiseResolveBlock promiseResolve;
@property (nonatomic, strong) RCTPromiseRejectBlock promiseReject;

@end
  
