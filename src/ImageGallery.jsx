import img1 from "./images/2025_01_10_delta_30.jpg";
import img2 from "./images/2024_09_29_36A.jpg";
import img3 from "./images/2024_09_14_1.jpg";
import img4 from "./images/2024_06_10_000.jpg";
import img5 from "./images/2024_07_23_33A.jpg";
import img6 from "./images/2024_09_14_26.jpg";
import img7 from "./images/2024_09_29_27A.jpg";

function ImageGallery() {
  const images = [img1, img2, img3, img4, img5, img6, img7];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
      }}
    >
      {images.map((filename, index) => (
        <img
          key={index}
          src={filename}
          alt={`Image ${index + 1}`}
          width="auto"
        />
      ))}
    </div>
  );
}

export default ImageGallery;
