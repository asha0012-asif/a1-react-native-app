import { View, Text, Image, Pressable } from "react-native";
import { useRouter } from "expo-router";
import { styles, colors } from "../theme/theme";
import { Ionicons } from "@expo/vector-icons";

export function ListItem({ id, avatar, username }) {
    const router = useRouter();

    function navigateTo() {
        router.push({ pathname: "/[id]", params: { id } });
    }

    return (
        <View style={styles.listItem}>
            <View style={styles.listItemContent}>
                <Image source={{ uri: avatar }} style={styles.avatarSmall} />
                <Text style={styles.regularText}>{username}</Text>
            </View>

            <Pressable onPress={navigateTo}>
                <Ionicons
                    name="ellipsis-horizontal"
                    size={styles.iconSize}
                    color={colors.black}
                    style={[styles.icons, { padding: 0 }]}
                />
            </Pressable>
        </View>
    );
}
