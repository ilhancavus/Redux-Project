import { useEffect, useState } from "react";
import { ApiGetAllCharacters } from "../../service/characters";
import Loading from "../../components/loading";
import Image from "../../components/Image";
import { useNavigate } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";

const Characters = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [characters, setCharacters] = useState(null);
  const [filterInput, setFilterInput] = useState("");

  useEffect(() => {
    setLoading(true);
    ApiGetAllCharacters()
      .then((res) => {
        if (res.error) throw new Error("Response error: ApiGetAllCharacters");
        setCharacters(res.data.results);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  const handleCharacterDetail = (id) => {
    navigate(`/character-detail/${id}`);
  };

  const filtered = characters?.filter((x) =>
    x.name.toLowerCase().includes(filterInput.toLowerCase())
  );

  return !loading ? (
    <div className="max-w-5xl mx-auto space-y-[30px] md:space-y-[60px] mt-[60px] md:mt-[120px] px-5">
      <div className="rounded-xl p-5 border border-gray-500 outline-none flex">
        <AiOutlineSearch size={30} className="text-gray-600 mr-5" />
        <input
          type="text"
          className="outline-none w-full text-gray-800 font-medium text-xl"
          placeholder="Find a character!"
          onChange={(e) => setFilterInput(e.target.value)}
        />
      </div>
      {filtered?.length !== 0 ? (
        filtered?.map((item, index) => (
          <div
            key={index}
            className="md:flex justify-between p-5 rounded-xl border text-2xl items-center shadow-2xl space-y-[30px] md:space-y-0 cursor-pointer hover:scale-105 duration-150"
            onClick={() => handleCharacterDetail(item?.id)}
          >
            <div>
              <Image
                source={item?.image}
                description={item?.name}
                width={150}
                className="object-cover object-center rounded-full mx-auto md:mx-0 w-full"
              />
            </div>
            <div className="md:flex md:justify-between items-center space-x-0 md:space-x-[30px] space-y-[30px] md:space-y-0 text-center">
              <div>{item?.name}</div>
              <div>{item?.gender}</div>
              <div>{item?.species}</div>
            </div>
            <div
              className={`${
                item?.status === "Alive"
                  ? "bg-green-800 text-white"
                  : item?.status === "unknown"
                  ? "bg-orange-600 text-white"
                  : "bg-red-800 text-white"
              } rounded-2xl p-3 text-center mx-auto md:mx-0`}
            >
              {item?.status}
            </div>
          </div>
        ))
      ) : (
        <div>
          <div className="text-2xl font-medium text-center pt-[60px]">
            Sorry, We cannot find what you looking for!
          </div>
        </div>
      )}
    </div>
  ) : (
    <>
      <Loading />
    </>
  );
};

export default Characters;
