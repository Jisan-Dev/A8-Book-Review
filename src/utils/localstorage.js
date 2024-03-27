const getStoredReadBooks = () => {
  const storedReadBooks = localStorage.getItem('readBooks');
  if (storedReadBooks) {
    return JSON.parse(storedReadBooks);
  }
  return [];
};

const getStoredWishedBooks = () => {
  const storedWishedBooks = localStorage.getItem('wishedBooks');
  if (storedWishedBooks) {
    return JSON.parse(storedWishedBooks);
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

const storeWishedBooks = (id) => {
  const storedWishedBooks = getStoredWishedBooks();
  const storedReadBooks = getStoredReadBooks();
  const isExistInWished = storedWishedBooks.some((bookId) => bookId === id);
  const isExistInRead = storedReadBooks.some((bookId) => bookId === id);

  if (!isExistInWished && !isExistInRead) {
    storedWishedBooks.push(id);
    localStorage.setItem('wishedBooks', JSON.stringify(storedWishedBooks));
  }
};

export { storeReadBooks, getStoredReadBooks, getStoredWishedBooks, storeWishedBooks };
