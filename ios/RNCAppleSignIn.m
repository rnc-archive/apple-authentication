
#import "RNCAppleSignIn.h"
#import <React/RCTUtils.h>

@import AuthenticationServices;

@implementation RNCAppleSignIn

- (dispatch_queue_t)methodQueue
{
    return dispatch_get_main_queue();
}
RCT_EXPORT_MODULE()

RCT_EXPORT_METHOD(signIn:(RCTPromiseResolveBlock)resolve
                  rejecter:(RCTPromiseRejectBlock)reject)
{
  _promiseResolve = resolve;
  _promiseReject = reject;
  
  ASAuthorizationAppleIDProvider* appleIDProvider = [[ASAuthorizationAppleIDProvider alloc] init];
  ASAuthorizationAppleIDRequest* request = [appleIDProvider createRequest];
  request.requestedScopes = @[ASAuthorizationScopeFullName, ASAuthorizationScopeEmail];
  
  ASAuthorizationController* ctrl = [[ASAuthorizationController alloc] initWithAuthorizationRequests:@[request]];
  ctrl.presentationContextProvider = self;
  ctrl.delegate = self;
  [ctrl performRequests];
}

- (ASPresentationAnchor)presentationAnchorForAuthorizationController:(ASAuthorizationController *)controller {
  return RCTKeyWindow();
}

- (void)authorizationController:(ASAuthorizationController *)controller
   didCompleteWithAuthorization:(ASAuthorization *)authorization {
  if ([authorization.credential class] == [ASAuthorizationAppleIDCredential class]) {
    ASAuthorizationAppleIDCredential* credential = ((ASAuthorizationAppleIDCredential*) authorization.credential);
    NSDictionary* user = @{
                           @"fullName": RCTNullIfNil(credential.fullName),
                           @"email": RCTNullIfNil(credential.email)
                           };
    _promiseResolve(user);
  } else {
    _promiseResolve([NSNull null]);
  }
}

- (void)authorizationController:(ASAuthorizationController *)controller
           didCompleteWithError:(NSError *)error {
  _promiseReject(@"RNCAppleSignIn", error.description, error);
}

@end
  
