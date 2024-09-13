import { useFonts } from "expo-font";
import { Stack } from "expo-router";

export default function RootLayout() {
  useFonts({
    "InriaSans-Light": require("./../assets/fonts/InriaSans-Light.ttf"),
    "InriaSans-Regular": require("./../assets/fonts/InriaSans-Regular.ttf"),
    "InriaSans-Bold": require("./../assets/fonts/InriaSans-Bold.ttf"),
  });
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
    </Stack>
  );
}
