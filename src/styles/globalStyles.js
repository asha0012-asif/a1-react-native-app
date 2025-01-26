import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        padding: 20,
    },
    title: {
        fontSize: 16,
        fontWeight: "bold",
        alignSelf: "center",
    },
    h2: {
        fontSize: 14,
        alignSelf: "center",
    },
    listItem: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 12,
        borderBottomWidth: 0.25,
        borderRadius: 4,
        marginVertical: 4,
        marginHorizontal: 8,
    },
    listItemContent: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 20,
    },
    username: {
        fontSize: 16,
    },
    avatarSm: {
        width: 60,
        height: 60,
        borderRadius: 50,
        borderWidth: 0.25,
        borderColor: "#0f0f0f",
    },
    avatarLg: {
        width: 160,
        height: 160,
        borderWidth: 0.25,
        borderRadius: 150,
        borderColor: "#0f0f0f",
    },
});

// {
//     width: 300,
//     height: 300,
//     borderRadius: 150,
//     borderWidth: 1,
//     borderColor: "#0f0f0f",
//     marginVertical: 20,
// }
