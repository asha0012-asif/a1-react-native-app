import { Tabs } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";

import { styles } from "../../theme/theme";

export default function TabLayout() {
    return (
        <Tabs initialRouteName="index">
            <Tabs.Screen
                name="index"
                options={{
                    title: "Home",
                    tabBarLabelStyle: styles.tabIcons,
                    tabBarActiveTintColor: styles.activeTabIconColor,
                    tabBarInactiveTintColor: styles.inactiveTabIconColor,
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="home" size={size} color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="(users)"
                options={{
                    headerShown: false,
                    title: "List",
                    tabBarLabelStyle: styles.tabIcons,
                    tabBarActiveTintColor: styles.activeTabIconColor,
                    tabBarInactiveTintColor: styles.inactiveTabIconColor,
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="albums" size={size} color={color} />
                    ),
                }}
            />
        </Tabs>
    );
}
