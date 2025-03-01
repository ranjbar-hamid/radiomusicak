import { useEffect, useState } from "react";

const IMG = ({ src, className, alt }) => {
  const [img, setImg] = useState();
  useEffect(() => {
    fetch(
      "https://script.google.com/macros/s/AKfycbz2ilrGauIAJoWzpZ3IcBv6gEato1hUWcC5p-1OJctJZcmwSIiLvrA5n5c8QZ9E5Mb3/exec?t=pic&id=" +
        src
    )
      .then((res) => res.json())
      .then((r) => {
        setImg(r.pic);
      });
  }, []);
  return (
    <img
      className={className}
      src={`data:image/jpeg;base64,${img}`}
      alt={alt}
    />
  );
};

export default IMG;
