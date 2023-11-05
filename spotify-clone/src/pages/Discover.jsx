import React from "react";
import { genres } from "../assets/constants";
import { SongCard } from "../components";

const Discover = () => {
  console.log("hello");
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
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((song, i) => (
          <SongCard key={song.key} song={song} i={i} />
        ))}
      </div>
    </div>
  );
};

export default Discover;
