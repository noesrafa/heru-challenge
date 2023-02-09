import "../styles/GifsPage.css";

import PageLayout from "../components/PageLayout";
import { useGifs } from "../hooks/useGifs";
import CardGif from "../components/pageComponents/gifsPage/CardGif";
import { SearchIcon } from "../components/Icons";
import { useField } from "../hooks/useField";

export default function GifsPage() {
  const { reset: resetSearch, ...search } = useField({ type: "search" });
  const gifs = useGifs(search.value);

  return (
    <PageLayout>
      <section className="gifs-container">
        <div className="searchbar">
          <input placeholder="Busca cualquier GIF" {...search} />
          <div className="divider"></div>
          <SearchIcon />
        </div>

        <div className="cards-container">
          {gifs.map((item) => (
            <div key={item.id}>
              <CardGif
                gifUrl={item.images.preview_gif.url} //User preview_gif y no downsized_medium porque mi PC explotaba
                title={item.title}
                url={item.url}
                id={item.id}
              />
            </div>
          ))}
        </div>
      </section>
      <p className="end">
        Fin de los resultados.
      </p>
    </PageLayout>
  );
}
