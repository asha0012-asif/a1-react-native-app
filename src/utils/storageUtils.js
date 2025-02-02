import AsyncStorage from "@react-native-async-storage/async-storage";

const storageKey = "userdata";

async function getUsersFromStorage() {
    const data = await AsyncStorage.getItem(storageKey);

    if (data) {
        const users = JSON.parse(data);
        return users;
    }

    return false;
}

async function fetchAndSaveUsers() {
    try {
        const size = 12;

        // fetch users from random-data-api
        const res = await fetch(
            `https://random-data-api.com/api/v2/users?size=${size}&response_type=json`
        );

        if (!res.ok) throw new Error("Failed to fetch users");

        const data = await res.json();

        // save users to storage
        await AsyncStorage.setItem(storageKey, JSON.stringify(data));

        return data;
    } catch (err) {
        console.log(err);
    }
}

async function clearStorage() {
    await AsyncStorage.removeItem(storageKey);
}

export { getUsersFromStorage, fetchAndSaveUsers, clearStorage };
