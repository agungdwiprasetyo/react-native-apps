# React Native Starter
Developing mobile apps (Android and iOS) using React Native
## Setup
Require Node.js and npm.

Install the React Native command line interface.

```
$ sudo npm install -g react-native-cli
```

Install [Android Studio](https://developer.android.com/studio/install.html).

Install ```Android SDK```, ```Android SDK Platform```, ```Android Virtual Device```.

Install the Android 6.0 (Marshmallow) SDK (```Google APIs```, ```Intel x86 Atom System Image```, ```Intel x86 Atom_64 System Image```, ```Google APIs Intel x86 Atom_64 System Image```)

Set up the ANDROID_HOME environment variable:
1. Open Terminal
2. Run command ```$ sudo nano ~/.bashrc```
3. Add environment variable to end line:
```sh
export ANDROID_HOME=${HOME}/Android/Sdk 
export PATH=${PATH}:${ANDROID_HOME}/tools
export PATH=${PATH}:${ANDROID_HOME}/platform-tools
```

## Start
Clone this repository:
```sh
$ git clone https://github.com/agungdwiprasetyo/react-native-apps.git
$ cd react-native-apps
```
Install npm dependencies:
```sh
$ npm install
```
Start react-native:
```sh
$ react-native start
```
Open new terminal (Ctrl+Shift+T), and build to android device/emulator:
```sh
$ react-native run-android
```