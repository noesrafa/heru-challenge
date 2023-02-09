import "../styles/GifDetailPage.css";

import PageLayout from "../components/PageLayout";
import { useGifById } from "../hooks/useGifs";
import { useParams, useNavigate } from "react-router-dom";
import { BackArrowIcon, EmbedIcon } from "../components/Icons";

const GifDetailPage: React.FC = () => {
  const navigate = useNavigate();

  let { id } = useParams<{ id: string }>();
  const detail = useGifById(id!);

  return (
    <PageLayout>
      <div className="detail-container">
        <div className="title-bar">
          <div className="back" onClick={() => navigate(-1)}>
            <BackArrowIcon />
            Regresar
          </div>
          {detail?.title}
        </div>
        <div className="content">
          <img src={detail?.images?.original?.url} alt="giphy-logo" />
          <div className="properties">
            <div className="property">
              Rating: <span>{detail?.rating}</span>
            </div>
            <div className="property">
              Fecha de subida: <span>{detail?.import_datetime}</span>
            </div>
            <div className="property">
              Tipo: <span>{detail?.type}</span>
            </div>

            <div className="links">
              <div className="property">
                <a href={detail?.embed_url} target="_blank" rel="noreferrer">
                  <EmbedIcon />
                </a>
              </div>
              <div className="property">
                <a href={detail?.url} target="_blank" rel="noreferrer">
                  <img src="/giphy.png" alt="giphy-logo" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default GifDetailPage;
