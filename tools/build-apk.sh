#!/usr/bin/env bash
# Compila el APK Android de Norsk Kjekt (envoltorio WebView) y lo copia a
# assets/app/norsk-kjekt.apk.
#
# Requisitos:
#   - JDK 17 (JAVA_HOME)
#   - Android SDK con platform 36 (ANDROID_HOME)
#   - El keystore de firma (NO está en el repositorio)
#
# Uso:
#   export JAVA_HOME=/ruta/jdk-17
#   export ANDROID_HOME=/ruta/android-sdk
#   export KEYSTORE_FILE=$HOME/.config/norsk-kjekt/android.keystore
#   export KEYSTORE_PASS=...
#   export KEY_PASS=...
#   tools/build-apk.sh
#
# Para publicar una actualización hay que subir versionCode/versionName en
# tools/android/app/build.gradle. Android rechaza un APK con la misma versión
# o firmado con otra clave.

set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
WORK="${APK_WORKDIR:-/tmp/opencode/norsk-apk-build}"

: "${JAVA_HOME:?Define JAVA_HOME con un JDK 17}"
: "${ANDROID_HOME:?Define ANDROID_HOME con el SDK de Android}"
: "${KEYSTORE_FILE:?Define KEYSTORE_FILE con la ruta al keystore}"
: "${KEYSTORE_PASS:?Define KEYSTORE_PASS}"
: "${KEY_PASS:?Define KEY_PASS}"

if [ ! -f "$KEYSTORE_FILE" ]; then
  echo "No existe el keystore: $KEYSTORE_FILE" >&2
  exit 1
fi

rm -rf "$WORK"
mkdir -p "$WORK"
cp -r "$ROOT/tools/android/." "$WORK/"

cd "$WORK"
./gradlew --no-daemon assembleRelease

APK="$WORK/app/build/outputs/apk/release/app-release.apk"
if [ ! -f "$APK" ]; then
  echo "No se generó el APK" >&2
  exit 1
fi

mkdir -p "$ROOT/assets/app"
cp "$APK" "$ROOT/assets/app/norsk-kjekt.apk"

echo "APK copiado a assets/app/norsk-kjekt.apk"
if [ -x "$ANDROID_HOME/build-tools/36.1.0/aapt" ]; then
  "$ANDROID_HOME/build-tools/36.1.0/aapt" dump badging "$ROOT/assets/app/norsk-kjekt.apk" | head -2
fi
