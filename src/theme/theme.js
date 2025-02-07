import { StyleSheet } from "react-native";

const colors = {
    blue: "#007bff",
    gray: "#6c757d",
    lightGray: "#f8f9fa",
    black: "#0f0f0f",
};

const styles = StyleSheet.create({
    // --- TABS ---
    tabIcons: {
        fontSize: 16,
    },
    activeTabIconColor: colors.blue,
    inactiveTabIconColor: colors.gray,

    icons: { alignSelf: "center", opacity: 0.5, padding: 4 },
    iconSize: 24,

    // --- CONTAINERS ---
    container: {
        flex: 1,
        backgroundColor: "#fff",
        padding: 20,
    },

    // --- TEXT ---
    titleText: {
        fontSize: 16,
        fontWeight: "bold",
        alignSelf: "center",
    },
    subheadingText: {
        fontSize: 16,
        fontWeight: "bold",
    },
    regularText: {
        fontSize: 16,
    },

    // --- CARDS ---
    card: {
        backgroundColor: colors.lightGray,
        padding: 24,
        borderRadius: 8,
        marginHorizontal: 16,
        alignItems: "flex-start",
    },
    detailsCard: {
        backgroundColor: colors.lightGray,
        padding: 16,
        borderRadius: 4,
    },

    // --- AVATARS ---
    avatarSmall: {
        width: 60,
        height: 60,
        borderWidth: 0.25,
        borderRadius: 50,
        borderColor: colors.black,
    },
    avatarLarge: {
        width: 160,
        height: 160,
        borderWidth: 0.25,
        borderRadius: 150,
        borderColor: colors.black,
    },

    // --- LIST ---
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

    // --- TEXT-ICON ---
    textIcon: {
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
    },

    // --- DETAILS ---
    detailsBanner: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginVertical: 16,
    },
    detailsBannerContent: {
        flex: 1,
        flexDirection: "column",
        marginLeft: 24,
        gap: 8,
    },
});

export { styles, colors };
