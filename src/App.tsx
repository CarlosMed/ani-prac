import styles from "./App.module.css";
import Carousel from "./components/carousel/Carousel";

const baseUrl = "https://images.unsplash.com/";
const images = [
  {
    id: 1,
    imageURL:
      "photo-1725656471389-b78f4703271f?q=80&w=3987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    altTag: "A cup of coffee sitting on top of a wooden table",
  },
  {
    id: 2,
    imageURL:
      "photo-1725864832531-f50f4639dd00?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    altTag: "A van driving down a winding road in the mountains",
  },
  {
    id: 3,
    imageURL:
      "photo-1725914774525-0e81a46583b6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    altTag: "A person walking up a hill in the mountains",
  },
  {
    id: 4,
    imageURL:
      "photo-1571030692815-cd433bb2657d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE5fHxmYWxsfGVufDB8fDB8fHww",
    altTag: "a close up of an orange and black substance",
  },
  {
    id: 5,
    imageURL:
      "photo-1725964558900-cc775856d97c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    altTag: "A vase filled with flowers sitting on top of a wooden table",
  },
];

function App() {
  return (
    <section className={styles.main}>
      <h1 className="">The Colors of Fall 🍂</h1>
      <Carousel baseUrl={baseUrl} images={images} />
    </section>
  );
}

export default App;
