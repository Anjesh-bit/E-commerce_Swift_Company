const getLocalStorage = (key) => {
  return localStorage.getItem(key);
};

const setLocalStorage = (key, value) => {
  const localStoragedata = localStorage.setItem(key, JSON.stringify(value));
  return localStoragedata;
};

const deleteLocalStorage = (key) => {
  return localStorage.removeItem(key);
};

export { getLocalStorage, setLocalStorage, deleteLocalStorage };
