import { Tabs } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function TabLayout() {
    return (
        <Tabs initialRouteName="index">
            <Tabs.Screen
                name="index"
                options={{
                    title: "Home",
                    tabBarIcon: ({ color }) => (
                        <Ionicons name="home" size={28} color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="(users)"
                options={{
                    headerShown: false,
                    title: "List",
                    tabBarIcon: ({ color }) => (
                        <Ionicons name="albums" size={28} color={color} />
                    ),
                }}
            />
        </Tabs>
    );
}
