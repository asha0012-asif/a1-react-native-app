import { View, Text, Image } from "react-native";
import { useState, useEffect } from "react";

import { useLocalSearchParams, useRouter, useNavigation } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

import { styles, colors } from "../../../theme/theme";
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
            <View style={styles.detailsBanner}>
                <Image
                    source={{ uri: user["avatar"] }}
                    style={styles.avatarLarge}
                />
                <View style={styles.detailsBannerContent}>
                    <Text style={styles.regularText}>
                        {user["first_name"]} {user["last_name"]}
                    </Text>
                    <Text style={styles.regularText}>
                        {user["date_of_birth"]}
                    </Text>
                    <Text style={styles.regularText}>{user["gender"]}</Text>
                </View>
            </View>

            <View style={styles.detailsCard}>
                <Text style={styles.regularText}>
                    {user["employment"]?.["title"]}
                </Text>
            </View>

            <View
                style={[
                    styles.detailsCard,
                    {
                        gap: 8,
                        marginTop: 16,
                    },
                ]}
            >
                <View style={styles.textIcon}>
                    <Ionicons
                        name="mail"
                        size={styles.iconSize}
                        color={colors.black}
                        style={styles.icons}
                    />
                    <Text style={styles.regularText}>{user["email"]}</Text>
                </View>

                <View style={styles.textIcon}>
                    <Ionicons
                        name="call"
                        size={styles.iconSize}
                        color={colors.black}
                        style={styles.icons}
                    />
                    <Text style={styles.regularText}>
                        {user["phone_number"]}
                    </Text>
                </View>

                <View style={styles.textIcon}>
                    <Ionicons
                        name="logo-linkedin"
                        size={styles.iconSize}
                        color={colors.black}
                        style={styles.icons}
                    />
                    <Text style={styles.regularText}>{user["username"]}</Text>
                </View>
            </View>

            <View
                style={[
                    styles.detailsCard,
                    {
                        marginTop: 16,
                        gap: 8,
                    },
                ]}
            >
                <Text style={styles.subheadingText}>Address</Text>
                <Text style={styles.regularText}>
                    {user["address"]?.["street_address"]}
                </Text>
                <Text style={styles.regularText}>
                    {user["address"]?.["city"]}, {user["address"]?.["state"]}
                </Text>
                <Text style={styles.regularText}>
                    {user["address"]?.["country"]},{" "}
                    {user["address"]?.["zip_code"]}
                </Text>
            </View>
        </View>
    );
}
