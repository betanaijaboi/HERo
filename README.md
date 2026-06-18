# HERo

A pregnancy companion app built for men — because showing up matters.

HERo helps expectant fathers stay present, informed, and intentional throughout the pregnancy journey. It tracks trimesters, surfaces daily actions, prepares you for the delivery room, and raises awareness of prenatal and postpartum depression so you can recognize it early and respond well.

---

## Features

- **Trimester Tracker** — automatically calculates the current trimester and week from the conception date, with a visual progress bar and due date countdown
- **Daily Actions** — personalized suggestions for each stage of pregnancy and postpartum, pulled from evidence-based practices
- **Pregnancy Guide** — in-depth, researched content across 7 topics:
  - Antenatal care and how to make appointments easier
  - What to pack for the hospital (and what to do if you can't make it in time)
  - Delivery ward etiquette — soft suggestions from partners who've been there
  - Nutrition — what to feed her, what to avoid, and how to handle cravings
  - Frequently asked questions with real answers
  - Understanding cravings and how they affect her mood
  - Miscarriage — what it is, causes, types, and how to support her
- **Awareness Tab** — prenatal and postpartum depression signs, what you can do, and emergency helpline access
- **Demo Account** — tap "Try Demo Account" on the welcome screen to instantly explore the app as Cole supporting Sophia at Week 22
- **Custom Delivery Notes** — add your own DOs and DON'Ts to the delivery ward guide and persist them across sessions

---

## Screenshots

> Coming soon

---

## Tech Stack

- [Expo](https://expo.dev) (SDK 54)
- React Native 0.79
- React Navigation (Bottom Tabs + Native Stack)
- AsyncStorage for local persistence
- Expo Vector Icons (Ionicons)

---

## Running on a Fresh PC

### 1. Install Prerequisites

You need Node.js and the Expo CLI. Install them in this order:

**Node.js** (includes npm)
- Download from [nodejs.org](https://nodejs.org) — choose the LTS version
- Run the installer and follow the prompts

**Expo Go** (on your phone)
- Android: [Google Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent)
- iPhone: [App Store](https://apps.apple.com/app/expo-go/id982107779)

---

### 2. Clone the Repository

Open a terminal (PowerShell on Windows, Terminal on Mac) and run:

```bash
git clone https://github.com/betanaijaboi/HERo.git
cd HERo
```

---

### 3. Install Dependencies

```bash
npm install --legacy-peer-deps
```

---

### 4. Start the App

```bash
npx expo start --clear
```

A QR code will appear in the terminal.

- **Android** — open Expo Go and tap "Scan QR code"
- **iPhone** — open the Camera app and point it at the QR code

The app will load on your phone. Tap **Try Demo Account** on the welcome screen to jump straight into the full layout.

---

### Troubleshooting

**"Project is incompatible with this version of Expo Go"**
Update Expo Go on your phone to the latest version from the App Store or Play Store.

**npm install fails with peer dependency errors**
Make sure you're using the `--legacy-peer-deps` flag:
```bash
npm install --legacy-peer-deps
```

**App stuck on loading screen**
Press `r` in the terminal where Expo is running to force a reload.

---

## Customizing Your Profile

On first launch, enter your name, your partner's name, and the approximate conception date. This unlocks all tracking features. You can update these anytime under the **Settings** tab.

---

## License

MIT
