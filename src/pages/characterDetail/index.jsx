import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Image from "../../components/Image";
import Loading from "../../components/loading";
import { ApiGetCharacter } from "../../service/characters";
import StarRatings from "react-star-ratings/build/star-ratings";
import { useDispatch, useSelector } from "react-redux";
import { setStars } from "../../redux/characterSlice";
import _ from "lodash";

const CharacterDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const characterStar = useSelector((state) => state.character);

  // Burada Aynı id olanları arrayden çıkardık.
  const uniqueArray = _.uniqBy(characterStar.character, "id");

  const [loading, setLoading] = useState(false);
  const [character, setCharacter] = useState(null);

  const findCharacter = uniqueArray.find((x) => {
    return x.id == id;
  });

  useEffect(() => {
    setLoading(true);
    ApiGetCharacter(id)
      .then((res) => {
        if (res.error) throw new Error("Response Error: ApiGetCharacter");
        setCharacter(res.data);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setLoading(false);
        window.scroll(0, 0);
      });
  }, [id]);

  const changeRating = (newRating, name) => {
    dispatch(
      setStars({
        id: character?.id,
        name: name,
        star: newRating,
      })
    );
  };

  return !loading ? (
    <div className="max-w-6xl mx-auto mt-[30px] md:mt-[60px] p-5">
      <div className="space-y-[60px] border rounded-2xl p-5 shadow-2xl">
        <Image
          source={character?.image}
          width={250}
          description="Profile picture"
          className="rounded-full mx-auto text-center w-full"
        />

        <div className="text-4xl font-medium text-gray-600 text-center">
          {character?.name}
        </div>
        <div className="text-2xl font-medium text-gray-600 text-center">
          Played episodes - {character?.episode?.length}
        </div>
        <div className="text-4xl font-medium text-gray-600 text-center">
          {character?.species}
        </div>
        <div
          className={`text-4xl font-medium ${
            character?.status === "Alive"
              ? "text-green-800"
              : character?.status === "unknown"
              ? "text-orange-600 "
              : "text-red-800"
          } text-center`}
        >
          {character?.status}
        </div>
        <div className="text-center">
          <StarRatings
            rating={findCharacter?.star ?? 0}
            starRatedColor="gold"
            changeRating={changeRating}
            numberOfStars={5}
            name={character?.name}
          />
        </div>
      </div>
    </div>
  ) : (
    <>
      <Loading />
    </>
  );
};

export default CharacterDetail;
