export const saveStorage = (newData, key) => {
  const localStorageData = localStorage.getItem(key)
  let data
  localStorageData === null
    ? (data = [])
    : (data = JSON.parse(localStorageData))
  data.push(newData)
  localStorage.setItem(key, JSON.stringify(data))
}
export const saveStorageSingle = (newData, key) => {
  localStorage.setItem(key, JSON.stringify(newData))
}
export const fetchStorage = (key) => {
  return JSON.parse(localStorage.getItem(key))
}
export const deleteStorage = (key) => {
  return localStorage.removeItem(key)
}
