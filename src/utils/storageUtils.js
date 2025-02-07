// this page was added since common functions for storage operations were needed in multiple pages (follows DRY principle)

import AsyncStorage from "@react-native-async-storage/async-storage";

const STORAGE_KEY = "userdata";

async function getUsersFromStorage() {
    const data = await AsyncStorage.getItem(STORAGE_KEY);

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
        await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(data));

        return data;
    } catch (err) {
        console.log(err);
    }
}

// was added for testing purposes (call this function to clear storage within any page of this app)
async function clearStorage() {
    await AsyncStorage.removeItem(STORAGE_KEY);
}

export { getUsersFromStorage, fetchAndSaveUsers, clearStorage };
