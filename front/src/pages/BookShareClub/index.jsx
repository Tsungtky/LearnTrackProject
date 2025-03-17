import React from 'react'

export default function BookShareClub() {

  // const formatBookData = (books) => {
  //   return books.map((book) => ({
  //     key: book.id,
  //     title: book.volumeInfo.title || "No Title Available",
  //     description: book.volumeInfo.description || "No Description Available",
  //     publishedDate: book.volumeInfo.publishedDate || "",
  //     image: book.volumeInfo.imageLinks?.thumbnail || "",
  //     authors: book.volumeInfo.authors?.join(", ") || "Unknown Author",
  //     isfree: book.volumeInfo.pageCount > 500 ? 'Free' : 'Upon Request'
  //   }));
  // };

  const fetchBooks = async () => {
    const API_KEY = 'AIzaSyAwpeHyPLFMdSJKYKQ4RoIsyo716vdYxko';  // 請替換為你的 API Key
    const query = 'harry potter';

    const url = `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}&langRestrict=en&key=${API_KEY}`;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('There has been a problem with your fetch operation:', error);
    }
  };

  fetchBooks();

  return (
    <div>BookShareClub</div>
  )
}
