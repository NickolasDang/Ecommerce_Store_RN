import AsyncStorage from "@react-native-async-storage/async-storage"

export const storeData = async (key: string, value: string | any) => {
    try {
        const jsonValue = typeof value === 'string' ? value : JSON.stringify(value)
        await AsyncStorage.setItem(key, jsonValue)
      } catch (e) {
        console.log("AsyncStorage storeData error: ", e)
      }
}

export const getData = async (key: string) => {
    try {
      const value = await AsyncStorage.getItem(key)
      return value
    } catch(e) {
        console.log("AsyncStorage getData error: ", e)
    }
  }

  export const getJsonData = async (key: string) => {
    try {
      const jsonValue = await AsyncStorage.getItem(key)
      if(jsonValue != null) {
        return JSON.parse(jsonValue)
      } else {
        throw new Error(`There is no data with key - ${key}`)
      }
    } catch(e) {
        console.log("AsyncStorage getJsonData error: ", e)
    }
  }