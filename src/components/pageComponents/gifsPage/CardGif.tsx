import { useNavigate } from "react-router-dom";

interface Props {
  title: string;
  url: string;
  gifUrl: string;
  id: string;
}

export default function CardGif({ title, url, gifUrl, id }: Props) {
  let navigate = useNavigate();

  function handleClick() {
    navigate(id);
  }

  return (
    <div className="card-item" onClick={() => handleClick()}>
      <img src={gifUrl} alt="" />
      <div className="description">
        <span className="card-title">{title}</span>
        <span className="card-url">{url}</span>
      </div>
    </div>
  );
}
