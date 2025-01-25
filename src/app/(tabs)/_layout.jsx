import { Tabs } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function TabLayout() {
    return (
        <Tabs>
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
                name="list"
                options={{
                    title: "List",
                    tabBarIcon: ({ color }) => (
                        <Ionicons name="albums" size={28} color={color} />
                    ),
                }}
            />
        </Tabs>
    );
}
