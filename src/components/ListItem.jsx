import { View, Text, Image, Pressable } from "react-native";
import { useRouter } from "expo-router";
import { styles } from "../styles/globalStyles";
import { Ionicons } from "@expo/vector-icons";

export function ListItem({ id, avatar, username }) {
    const router = useRouter();

    function navigateTo() {
        router.push({ pathname: "/[id]", params: { id } });
    }

    return (
        <View style={styles.listItem}>
            <View style={styles.listItemContent}>
                <Image source={{ uri: avatar }} style={styles.avatarSm} />
                <Text style={styles.username}>{username}</Text>
            </View>

            <Pressable onPress={navigateTo}>
                <Ionicons
                    name="ellipsis-horizontal"
                    size={24}
                    color="#0f0f0f"
                    style={{ alignSelf: "center", opacity: 0.5 }}
                />
            </Pressable>
        </View>
    );
}
