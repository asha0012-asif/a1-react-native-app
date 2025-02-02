import { View, Text, Button } from "react-native";
import { useEffect } from "react";

import { useSafeAreaInsets } from "react-native-safe-area-context";

import { styles } from "../../styles/globalStyles";
import {
    getUsersFromStorage,
    fetchAndSaveUsers,
    clearStorage,
} from "../../utils/storageUtils";

export default function Index() {
    const insets = useSafeAreaInsets();

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
            <View
                style={{
                    backgroundColor: "#f7f7f7",
                    padding: 24,
                    borderRadius: 8,
                    marginHorizontal: 16,
                    alignItems: "center",
                }}
            >
                <Text style={styles.title}>Welcome to NotLinkedIn!</Text>
            </View>
            <View
                style={{
                    backgroundColor: "#f7f7f7",
                    padding: 24,
                    borderRadius: 8,
                    marginTop: 16,
                    marginHorizontal: 16,
                    alignItems: "flex-start",
                    gap: 8,
                }}
            >
                <Text style={{ fontSize: 16 }}>
                    This is definitely not just an extremely dumbed-down version
                    of the platform LinkedIn 🤷🏽‍♂️...
                </Text>
                <Text style={{ fontSize: 16 }}>
                    Get started by navigating to the List tab.
                </Text>
            </View>

            <Button onPress={clearStorage} title="Clear Storage" />
        </View>
    );
}
