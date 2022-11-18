import { useState, useEffect } from "react";
import Loading from "../../components/loading";
import { ApiGetAllEpisodes } from "../../service/episodes";

const Episodes = () => {
  const [loading, setLoading] = useState(false);
  const [episodes, setEpisodes] = useState(null);

  useEffect(() => {
    setLoading(true);
    ApiGetAllEpisodes()
      .then((res) => {
        if (res.error) throw new Error("Response error: ApiGetAllEpisodes");
        setEpisodes(res.data.results);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  console.log(episodes);

  return !loading ? (
    <div className="max-w-5xl mx-auto my-8">
      <div>
        {episodes?.map((item, index) => (
          <div className="md:flex md:space-x-5 justify-between p-7 rounded-xl border text-xl items-center shadow-xl space-y-[30px] my-5 text-center mx-5" key={index}>{item?.name} 
          <div className="p-3">
          {item?.episode}
          </div>
         
          </div>
        ))}
      </div>
    </div>
  ) : (
    <>
      <Loading />
    </>
  );
};

export default Episodes;
