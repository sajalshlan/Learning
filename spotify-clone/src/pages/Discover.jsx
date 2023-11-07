import React from "react";
import { genres } from "../assets/constants";
import { Error, Loader, SongCard } from "../components";
import { useGetTopChartsQuery } from "../redux/services/shazamAPI";
import { useDispatch, useSelector } from "react-redux";

const Discover = () => {
  // console.log("hello");
  const dispatch = useDispatch();
  const { activeSong, isPlaying } = useSelector((state) => state.player);

  const { data, isFetching, error } = useGetTopChartsQuery();
  if (isFetching) return <Loader title="loading..." />;
  if (error) return <Error />;
  console.log(data);
  const genreTitle = "Pop";
  return (
    <div className="flex flex-col">
      <div className=" flex sm:flex-row flex-col justify-between items-center mt-4 mb-10 border-2">
        <h2 className="text-white font-bold text-3xl text-left">
          Discover {genreTitle}
        </h2>
        <select
          onChange={(e) => console.log(e.target.value)}
          value=""
          className="bg-black text-gray-300 p-3 text-sm rounded-lg outline-none sm:mt-0 mt-5"
        >
          {genres.map((genre) => {
            return (
              <option key={genre.value} value={genre.value}>
                {genre.title}
              </option>
            );
          })}
        </select>
      </div>

      {/* div for the songs to display */}
      <div className="flex sm:justidy-start justify-centre flex-wrap gap-8">
        {data.chart_items?.map((item, i) => (
          <SongCard
            key={item.item.id}
            item={item.item}
            i={i}
            isPlaying={isPlaying}
            activeSong={activeSong}
          />
        ))}
      </div>
    </div>
  );
};

export default Discover;
