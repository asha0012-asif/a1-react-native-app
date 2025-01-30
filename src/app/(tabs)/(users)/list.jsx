import { View, FlatList, RefreshControl } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { styles } from "../../../styles/globalStyles";

import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import { ListItem } from "../../../components/ListItem";

export default function List() {
    const insets = useSafeAreaInsets();
    const router = useRouter();
    const storageKey = "userdata";

    const [users, setUsers] = useState([]);
    const [refreshing, setRefreshing] = useState(false);

    useEffect(() => {
        checkForUsersInStorage().then((people) => {
            if (people) {
                setUsers(people);
            } else {
                router.replace("/");
            }
        });
    }, []);

    async function checkForUsersInStorage() {
        const data = await AsyncStorage.getItem(storageKey);

        if (data) {
            const people = JSON.parse(data);
            return people;
        }

        return false;
    }

    function onRefresh() {
        refetchAndSaveUsers();

        setTimeout(() => {
            setRefreshing(false);
        }, 400);
    }

    async function refetchAndSaveUsers() {
        try {
            const size = 12;

            // fetch users from random-data-api
            const res = await fetch(
                `https://random-data-api.com/api/v2/users?size=${size}&response_type=json`
            );

            if (!res.ok) throw new Error("Failed to fetch users");

            const data = await res.json();

            // save users to storage
            await AsyncStorage.setItem(storageKey, JSON.stringify(data));

            // update users state
            setUsers(data);
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
            <FlatList
                data={users}
                keyExtractor={(item) => item["id"]}
                renderItem={({ item }) => (
                    <ListItem
                        id={item["id"]}
                        avatar={item["avatar"]}
                        username={item["username"]}
                    />
                )}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                    />
                }
            />
        </View>
    );
}
