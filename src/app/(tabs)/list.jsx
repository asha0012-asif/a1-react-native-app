import { View, Text, FlatList, RefreshControl, Pressable } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { styles } from "../../styles/globalStyles";
import Ionicons from "@expo/vector-icons/Ionicons";

import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";

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
                router.replace("/index"); // this doesn't work right now
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
            // fetch users from random-data-api
            const res = await fetch(
                "https://random-data-api.com/api/v2/users?size=4&response_type=json"
            );

            if (!res.ok) throw new Error("Failed to fetch users");

            const data = await res.json();

            // save users to storage
            await AsyncStorage.setItem(storageKey, JSON.stringify(data));

            // update users state
            setUsers(data);

            // CHECK W/STEVE IF WE NEED TO APPEND TO EXISTING USERS STATE
            // setUsers([...users, ...data]);
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
                renderItem={({ item }) => (
                    <ListItem
                        id={item.id}
                        username={item.username}
                        email={item.email}
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

function ListItem({ id, username, email }) {
    const router = useRouter();

    function navigateTo() {
        router.push({ pathname: "/users/[id]", params: { id } });
    }

    return (
        <View style={styles.listItem}>
            <View style={styles.listItemContent}>
                <Text>{username}</Text>
                <Text>{email}</Text>
            </View>

            <Pressable onPress={navigateTo}>
                <Ionicons
                    name="ellipsis-horizontal"
                    size={24}
                    color="#0f0f0f"
                    style={{ alignSelf: "center" }}
                />
            </Pressable>
        </View>
    );
}
