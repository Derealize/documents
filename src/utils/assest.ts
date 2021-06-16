export const sleep = (ms: number): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export const StringEnumObjects = (enumme: any): Array<{ label: string; value: string }> => {
  return Object.keys(enumme).map((key) => ({ label: key, value: enumme[key] }));
};

export const IntEnumObjects = (enumme: any): Array<{ label: string; value: number }> => {
  return Object.keys(enumme)
    .filter((value) => !Number.isNaN(Number(value)))
    .map((key) => ({ label: enumme[key], value: parseInt(key, 10) }));
};

export const IntEnumValues = (enumme: any): Array<string> => {
  return Object.keys(enumme).filter((value) => !Number.isNaN(Number(value)));
};

// https://stackoverflow.com/a/38241481
export enum OSPlatform {
  UnKnow,
  MacOS,
  iOS,
  Windows,
  Android,
  Linux,
}

const userAgent = window.navigator.userAgent;
const platform = window.navigator.platform;
const macosPlatforms = ["Macintosh", "MacIntel", "MacPPC", "Mac68K"];
const windowsPlatforms = ["Win32", "Win64", "Windows", "WinCE"];
const iosPlatforms = ["iPhone", "iPad", "iPod"];
export let os: OSPlatform = OSPlatform.UnKnow;

if (macosPlatforms.indexOf(platform) !== -1) {
  os = OSPlatform.MacOS;
} else if (iosPlatforms.indexOf(platform) !== -1) {
  os = OSPlatform.iOS;
} else if (windowsPlatforms.indexOf(platform) !== -1) {
  os = OSPlatform.Windows;
} else if (/Android/.test(userAgent)) {
  os = OSPlatform.Android;
} else if (/Linux/.test(platform)) {
  os = OSPlatform.Linux;
}
