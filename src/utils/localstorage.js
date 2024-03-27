const getStoredReadBooks = () => {
  const storedReadBooks = localStorage.getItem('readBooks');
  if (storedReadBooks) {
    return JSON.parse(storedReadBooks);
  }
  return [];
};

const storeReadBooks = (id) => {
  const storedReadBooks = getStoredReadBooks();
  const isExist = storedReadBooks.some((bookId) => bookId === id);

  if (!isExist) {
    storedReadBooks.push(id);
    localStorage.setItem('readBooks', JSON.stringify(storedReadBooks));
  }
};

export { storeReadBooks, getStoredReadBooks };
