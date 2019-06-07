# Sign In with Apple for React Native

---

**CURRENTLY UNREALEASED. Take a look at [the issues](https://github.com/react-native-community/apple-sign-in/issues) to see our progress.**

---

![Supports iOS](https://img.shields.io/badge/platforms-ios-lightgrey.svg) ![MIT License](https://img.shields.io/npm/l/@react-native-community/netinfo.svg)

Allows you to easily implement Sign In with Apple for your React Native app.

## Getting started

Install the library using either Yarn:

```
yarn add @react-native-community/apple-sign-in
```

or npm:

```
npm install --save @react-native-community/apple-sign-in
```

You then need to link the native parts of the library for the platforms you are using. The easiest way to link the library is using the CLI tool by running this command from the root of your project:

```
react-native link @react-native-community/apple-sign-in
```

If you can't or don't want to use the CLI tool, you can also manually link the library using the instructions below (click on the arrow to show them):

<details>
<summary>Manually link the library on iOS</summary>

Either follow the [instructions in the React Native documentation](https://facebook.github.io/react-native/docs/linking-libraries-ios#manual-linking) to manually link the framework or link using [Cocoapods](https://cocoapods.org) by adding this to your `Podfile`:

```ruby
pod 'react-native-apple-sign-in', :path => '../node_modules/@react-native-community/apple-sign-in'
```
</details>

## Usage

Show the Sign In with Apple button:

```jsx
import { SignInWithAppleButton, SignInWithAppleScopes } from "@react-native-community/apple-sign-in";

function YourComponent() {
    return (
        <SignInWithAppleButton
            requestedScopes={[
                SignInWithAppleScopes.FullName,
                SignInWithAppleScopes.Email
            ]}
            onSuccess={user => {
                // Handle the successful sign in here
            }}
            onError={error => {
                // Handle the error state here
            }}
        />
    );
}
```

Checking if an existing user ID is valid:

```javascript
import { SignInWithApple, SignInWithAppleCredentialState } from "@react-native-community/apple-sign-in";

SignInWithApple.getCredentialState(userId).then(state => {
    switch (state) {
        case SignInWithAppleCredentialState.Authorized:
            // Handle the authorised state
            break;
        case SignInWithAppleCredentialState.Revoked:
            // The user has signed out
            break;
        case SignInWithAppleCredentialState.NotFound:
            // The user id was not found
            break;
    }
})
```

Listening for credientials being revoked:

```javascript
import { SignInWithApple } from "@react-native-community/apple-sign-in";

// Subscribe
const unsubscribe = SignInWithApple.addRevokeListener(() => {
    // Handle the token being revoked
})

// Unsubscribe
unsubscribe();
```
