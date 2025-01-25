import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    title: {
        fontSize: 16,
        fontWeight: "bold",
        alignSelf: "center",
        marginTop: 10,
    },
    subtitle: {
        fontSize: 16,
        fontWeight: "bold",
        alignSelf: "flex-start",
        marginTop: 10,
        marginLeft: 12,
    },
    h2: {
        fontSize: 14,
        alignSelf: "center",
    },
    listItem: {
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "#f9f9f9",
        padding: 12,
        marginVertical: 4,
        marginHorizontal: 8,
        borderRadius: 4,
    },
});
