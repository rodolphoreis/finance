//Local storage

export const fetchData = (key) => {
  return localStorage.getItem(key);
};

// delete item

export const deleteItem = ({ key }) => {
  return localStorage.removeItem(key);
};
