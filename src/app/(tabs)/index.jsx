import { View, Text } from "react-native";
import { useEffect } from "react";

import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useRouter } from "expo-router";

import { styles } from "../../theme/theme";
import {
    getUsersFromStorage,
    fetchAndSaveUsers,
} from "../../utils/storageUtils";

export default function Index() {
    const insets = useSafeAreaInsets();
    const router = useRouter();

    useEffect(() => {
        getUsersFromStorage().then((users) => {
            if (!users) {
                console.log("No users found in storage. Fetching...");
                fetchAndSaveUsers().then((data) =>
                    console.log("Users fetched:", data)
                );
            } else {
                console.log("Users already found in storage.");
            }
        });
    }, []);

    return (
        <View
            style={[
                styles.container,
                {
                    paddingTop: 10,
                    paddingLeft: insets.left,
                    paddingRight: insets.right,
                },
            ]}
        >
            <View style={styles.card}>
                <Text style={styles.titleText}>Welcome to NotLinkedIn!</Text>
            </View>
            <View style={[styles.card, { marginTop: 16, gap: 8 }]}>
                <Text style={styles.regularText}>
                    This is definitely not just an extremely dumbed-down version
                    of the platform LinkedIn 🤷🏽‍♂️...
                </Text>
                <Text style={styles.regularText}>
                    Get started by navigating to the List tab.
                </Text>
            </View>
        </View>
    );
}
