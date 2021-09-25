import AsyncStorage from '@react-native-async-storage/async-storage';

export default function useAsyncStorage() {

    const setValue = (key, value) => {
        try {
            AsyncStorage.setItem(key, value);
        } catch (error) {
            console.log(error);
        }
    };

    const getValue = (key) => {
        try {
            return AsyncStorage.getItem(key);
        } catch (error) {
            console.log(error);
            return null;
        }
    };

    const removeValue = (key) => {
        try {
            return AsyncStorage.removeItem(key);
        } catch (error) {
            console.log(error);
            return null;
        }
    };

    return {setValue, getValue, removeValue};

}
