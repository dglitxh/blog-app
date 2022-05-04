import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (key, value) => {
  try{
    await AsyncStorage.setItem(key, JSON.stringify(value))
  }catch(e){
    console.log("From storeData: data storage failed", e)
  }
}

export const getData = async (key) => {
  try {
    const val = await AsyncStorage.getItem(key)
    if (val !== null){
      return JSON.parse(val)
    }else{
      console.log("From getData: data not available", e)
    }
  }catch(e){
    console.log(e)
  }
}
