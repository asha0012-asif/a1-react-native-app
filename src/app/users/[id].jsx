import { View, Text } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { styles } from "../../styles/globalStyles";
import { useLocalSearchParams } from "expo-router";

export default function UserDetails() {
    const insets = useSafeAreaInsets();
    const { id } = useLocalSearchParams();

    console.log("User ID:", id);

    return (
        <View
            style={[
                styles.container,
                {
                    paddingLeft: insets.left,
                    paddingRight: insets.right,
                },
            ]}
        >
            <Text style={styles.title}>Details for user {id}</Text>
        </View>
    );
}
