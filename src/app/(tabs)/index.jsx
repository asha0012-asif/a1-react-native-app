import { View, Text } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { styles } from "../../styles/globalStyles";

import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Index() {
    const insets = useSafeAreaInsets();

    return (
        <View
            style={[
                styles.container,
                {
                    paddingTop: insets.top,
                    paddingLeft: insets.left,
                    paddingRight: insets.right,
                },
            ]}
        >
            <Text style={styles.title}>Home</Text>
        </View>
    );
}
