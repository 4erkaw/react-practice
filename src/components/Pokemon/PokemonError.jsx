import errorImage from "./img/sadCat.jpg";

export default function Error({ message }) {
  return (
    <div role="alert">
      <img src={errorImage} width="240" alt="Sad" />
      {message}
    </div>
  );
}
