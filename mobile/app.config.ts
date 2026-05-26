/// <reference types="node" />
import { ExpoConfig } from 'expo/config';

type AppEnv = 'development' | 'preview' | 'production';

const APP_ENV = (process.env.APP_ENV ?? 'development') as AppEnv;

const envConfig: Record<AppEnv, { name: string; bundleId: string; androidPackage: string }> = {
  development: {
    name: 'Hunty (Dev)',
    bundleId: 'app.hunty.mobile.dev',
    androidPackage: 'app.hunty.mobile.dev',
  },
  preview: {
    name: 'Hunty (Preview)',
    bundleId: 'app.hunty.mobile.preview',
    androidPackage: 'app.hunty.mobile.preview',
  },
  production: {
    name: 'Hunty',
    bundleId: 'app.hunty.mobile',
    androidPackage: 'app.hunty.mobile',
  },
};

const { name, bundleId, androidPackage } = envConfig[APP_ENV];

const config: ExpoConfig = {
  name,
  slug: 'hunty-mobile',
  version: '1.0.0',
  orientation: 'portrait',
  icon: './assets/icon.png',
  userInterfaceStyle: 'automatic',
  newArchEnabled: true,
  splash: {
    image: './assets/splash-icon.png',
    resizeMode: 'contain',
    backgroundColor: '#ffffff',
  },
  ios: {
    bundleIdentifier: bundleId,
    supportsTablet: true,
  },
  android: {
    package: androidPackage,
    adaptiveIcon: {
      foregroundImage: './assets/adaptive-icon.png',
      backgroundColor: '#ffffff',
    },
    edgeToEdgeEnabled: true,
    predictiveBackGestureEnabled: false,
  },
  web: { favicon: './assets/favicon.png' },
  plugins: ['expo-router'],
  extra: {
    appEnv: APP_ENV,
    eas: { projectId: 'YOUR_EAS_PROJECT_ID' },
  },
  updates: {
    url: 'https://u.expo.dev/YOUR_EAS_PROJECT_ID',
  },
  runtimeVersion: { policy: 'appVersion' },
};

export default config;
