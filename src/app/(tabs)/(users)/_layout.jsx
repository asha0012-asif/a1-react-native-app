import { Stack } from "expo-router";

export default function StackLayout() {
    return (
        <Stack initialRouteName="list">
            <Stack.Screen name="list" options={{ title: "List" }} />
            <Stack.Screen name="[id]" options={{ title: "Details" }} />
        </Stack>
    );
}
