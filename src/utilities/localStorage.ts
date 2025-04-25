export const setInLocalStorage = (key: string, newConfig: object): void => {
  const item = JSON.parse(localStorage.getItem(key) || "{}");

  const updatedConfig = { ...item, ...newConfig };

  localStorage.setItem(key, JSON.stringify(updatedConfig));
};

export const getFromLocalStorage = <T>(key: string): T | null => {
  const item = localStorage.getItem(key);

  if (!item) {
    return null;
  }

  try {
    return JSON.parse(item) as T;
  } catch (error) {
    return null;
  }
};
