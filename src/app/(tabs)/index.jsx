import { View, Text } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { styles } from "../../styles/globalStyles";

import { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Index() {
    const insets = useSafeAreaInsets();
    const storageKey = "userdata";

    useEffect(() => {
        checkForUsersInStorage().then((users) => {
            if (!users) {
                console.log("No users found in storage. Fetching...");
                fetchAndSaveUsers();
            } else {
                console.log("Users already found in storage.");
            }
        });
    }, []);

    async function checkForUsersInStorage() {
        const data = await AsyncStorage.getItem(storageKey);

        if (data) {
            const users = JSON.parse(data);
            return users;
        }

        return false;
    }

    async function fetchAndSaveUsers() {
        try {
            // fetch users from random-data-api
            const res = await fetch(
                "https://random-data-api.com/api/v2/users?size=4&response_type=json"
            );

            if (!res.ok) throw new Error("Failed to fetch users");

            const data = await res.json();
            console.log("Users fetched:", data);

            // save users to storage
            await AsyncStorage.setItem(storageKey, JSON.stringify(data));
        } catch (err) {
            console.log(err);
        }
    }

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
            <Text style={styles.h2}>Welcome to the app</Text>
        </View>
    );
}
