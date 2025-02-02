import { View, Text, Image } from "react-native";
import { useState, useEffect } from "react";

import { useLocalSearchParams, useRouter, useNavigation } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

import { styles } from "../../../styles/globalStyles";
import { getUsersFromStorage } from "../../../utils/storageUtils";

export default function UserDetails() {
    const router = useRouter();
    const navigation = useNavigation();
    const { id } = useLocalSearchParams();

    const [user, setUser] = useState({});

    useEffect(() => {
        if (!id) {
            router.replace("/");
        }

        getUsersFromStorage().then((people) => {
            if (people) {
                const person = people.filter((p) => p.id === parseInt(id));

                setUser(person[0]);

                navigation.setOptions({
                    title: `${person[0]["first_name"]} ${person[0]["last_name"]}`,
                    headerBackTitle: "List",
                });
            } else {
                router.replace("/");
            }
        });
    }, []);

    return (
        <View style={[styles.container]}>
            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginVertical: 16,
                }}
            >
                <Image
                    source={{ uri: user["avatar"] }}
                    style={styles.avatarLg}
                />
                <View
                    style={{
                        flex: 1,
                        flexDirection: "column",
                        marginLeft: 24,
                        gap: 8,
                    }}
                >
                    <Text style={{ fontSize: 16 }}>
                        {user["first_name"]} {user["last_name"]}
                    </Text>
                    <Text style={{ fontSize: 16 }}>
                        {user["date_of_birth"]}
                    </Text>
                    <Text style={{ fontSize: 16 }}>{user["gender"]}</Text>
                </View>
            </View>

            <View
                style={{
                    backgroundColor: "#f7f7f7",
                    padding: 16,
                    borderRadius: 4,
                }}
            >
                <Text style={{ fontSize: 16 }}>
                    {user["employment"]?.["title"]}
                </Text>
            </View>

            <View
                style={{
                    backgroundColor: "#f7f7f7",
                    padding: 16,
                    borderRadius: 4,
                    gap: 8,
                    marginTop: 16,
                }}
            >
                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        gap: 8,
                    }}
                >
                    <Ionicons
                        name="mail"
                        size={24}
                        color="#0f0f0f"
                        style={{
                            alignSelf: "center",
                            opacity: 0.5,
                            padding: 4,
                        }}
                    />
                    <Text style={{ fontSize: 16 }}>{user["email"]}</Text>
                </View>

                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        gap: 8,
                    }}
                >
                    <Ionicons
                        name="call"
                        size={24}
                        color="#0f0f0f"
                        style={{
                            alignSelf: "center",
                            opacity: 0.5,
                            padding: 4,
                        }}
                    />
                    <Text style={{ fontSize: 16 }}>{user["phone_number"]}</Text>
                </View>
                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        gap: 8,
                    }}
                >
                    <Ionicons
                        name="logo-linkedin"
                        size={24}
                        color="#0f0f0f"
                        style={{
                            alignSelf: "center",
                            opacity: 0.5,
                            padding: 4,
                        }}
                    />
                    <Text style={{ fontSize: 16 }}>{user["username"]}</Text>
                </View>
            </View>

            <View
                style={{
                    gap: 8,
                    backgroundColor: "#f7f7f7",
                    padding: 16,
                    borderRadius: 4,
                    marginTop: 16,
                }}
            >
                <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                    Address
                </Text>
                <Text style={{ fontSize: 16 }}>
                    {user["address"]?.["street_address"]}
                </Text>
                <Text style={{ fontSize: 16 }}>
                    {user["address"]?.["city"]}, {user["address"]?.["state"]}
                </Text>
                <Text style={{ fontSize: 16 }}>
                    {user["address"]?.["country"]},{" "}
                    {user["address"]?.["zip_code"]}
                </Text>
            </View>
        </View>
    );
}
