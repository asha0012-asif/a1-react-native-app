import { View, FlatList, RefreshControl } from "react-native";
import { useState, useEffect } from "react";

import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useRouter } from "expo-router";

import { styles } from "../../../theme/theme";
import { ListItem } from "../../../components/ListItem";
import {
    getUsersFromStorage,
    fetchAndSaveUsers,
} from "../../../utils/storageUtils";

export default function List() {
    const insets = useSafeAreaInsets();
    const router = useRouter();

    const [users, setUsers] = useState([]);
    const [refreshing, setRefreshing] = useState(false);

    useEffect(() => {
        getUsersFromStorage().then((people) => {
            if (people) {
                setUsers(people);
            } else {
                router.replace("/");
            }
        });
    }, []);

    function onRefresh() {
        fetchAndSaveUsers().then((data) => {
            // update users state
            setUsers(data);
        });

        setTimeout(() => {
            setRefreshing(false);
        }, 400);
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
