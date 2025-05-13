
import Image from "../assets/books/book1.svg";
import Image2 from "../assets/books/book2.svg";
import Image3 from "../assets/books/book3.svg";

export interface Book {
  id: number;
  title: string;
  author: string;
  time: string;
  status: 'reading' | 'finished';
  image: string;
}

export const BOOKS: Book[] = [
  {
    id: 1,
    title: "Bring Your Human to Work",
    author: "Erica Keswin",
    time: "13-minute read",
    status: "reading",
    image: Image
  },
  {
    id: 2,
    title: "Beyond Entrepreneurship 2.0",
    author: "Jim Collins & Bill Lazier",
    time: "15-minute read",
    status: "reading",
    image: Image2
  },
  {
    id: 3,
    title: "Doesn't Hurt to Ask",
    author: "Trey Gowdy",
    time: "13-minute read",
    status: "reading",
    image: Image3
  }
];
