import { View, Text, Image } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { styles } from "../../styles/globalStyles";
import { useLocalSearchParams, useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState, useEffect } from "react";

export default function UserDetails() {
    const insets = useSafeAreaInsets();
    const router = useRouter();
    const { id } = useLocalSearchParams();
    const storageKey = "userdata";

    const [user, setUser] = useState({});

    useEffect(() => {
        if (!id) {
            router.replace("/index");
        }

        checkForUsersInStorage().then((people) => {
            if (people) {
                const person = people.filter((p) => p.id === parseInt(id));

                setUser(...person);
            } else {
                router.replace("/index");
            }
        });
    }, [id]);

    async function checkForUsersInStorage() {
        const data = await AsyncStorage.getItem(storageKey);

        if (data) {
            const people = JSON.parse(data);
            return people;
        }

        return false;
    }

    console.log("User:", user);

    return (
        <View
            style={[
                styles.container,
                {
                    paddingLeft: insets.left,
                    paddingRight: insets.right,
                    alignItems: "center",
                },
            ]}
        >
            <Image
                source={{ uri: user["avatar"] }}
                style={{
                    width: 300,
                    height: 300,
                    borderRadius: 150,
                    borderWidth: 1,
                    borderColor: "#0f0f0f",
                    marginVertical: 20,
                }}
            />
            <Text>{user["username"]}</Text>
            <Text>{user["first_name"]}</Text>
            <Text>{user["last_name"]}</Text>
            <Text>{user["date_of_birth"]}</Text>
            <Text>{user["gender"]}</Text>
            <Text>{user["email"]}</Text>
            <Text>{user["phone_number"]}</Text>
        </View>
    );
}
