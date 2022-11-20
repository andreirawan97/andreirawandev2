export function getFromStorage(key: string) {
  const value = localStorage.getItem(key);

  return value;
}

export function setToStorage(key: string, value: any) {
  localStorage.setItem(key, JSON.stringify(value));
}
