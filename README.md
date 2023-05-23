## Pré-requis
[VsCode](https://code.visualstudio.com/download)
 
[GitBash](https://git-scm.com/downloads)

[Andoid Studio](https://developer.android.com/studio) - version >= 31.0.0

[NodeJS](https://nodejs.org/fr/download/) - version >= 14.0.0

[Yarn](https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable)

## Installation

Installer les logiciels pré-requis

####

Extension VScode :

ESLint

#### Paramétrer vos variables d'environnement  :

ANDROID_HOME -> C:\Users\\EMILE.BOULANGER\AppData\Local\Android\Sdk
JAVA_HOME -> C:\Program Files\Android\Android Studio\jre
JAVA_JRE -> C:\Program Files\Android\Android Studio\jre

#### Installation des dépendances

Lancer la commande suivante au sein du projet cloné :

```sh
yarn install
npm install
npm install metro
npm install @react-navigation/native
npm install @react-navigation/bottom-tabs
npm install @react-navigation/stack
npm install @react-navigation/native-stack
npm install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view

```



## Usage

Lancer la commande suivante au sein du projet cloné afin de démarrer l'application:

Web:
```sh
yarn web
```

Android:
```sh
yarn android
```

Ios:
```sh
yarn ios
```

## Deploy APK :

Lancer la commande suivante afin de créer un APK du projet

```sh
cd app
npx react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res
cd android
./gradlew assembleDebug
```

Vous pouvez récupérer le projet dans le dossier : /android/app/build/outputs/apk/debug/app-debug.apk

## Appliquer un patch à un package node

Si nécessaire, pour appliquer un patch à du code d'un node module : 

Réaliser votre modification au sein du node_modules posant problème puis lancer la commande suivante sur le module modifié (ici, à titre d'exemple "react-native-svg"):

Web:
```sh
npx patch-package react-native-svg
```

Ce patch sera appliqué à chaque yarn install