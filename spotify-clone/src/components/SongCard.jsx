import PlayPause from "./PlayPause";
import { Link } from "react-router-dom";

const SongCard = ({ item }) => {
  // console.log(item.full_title);
  const activeSong = "test";

  return (
    <div className="flex flex-col w-[250px] p-4 bg-white/5 bg-opactity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer">
      <div className="relative w-full h-56 group">
        <div
          className={`absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex ${
            activeSong?.title === item.full_title
              ? "flex bg-black bg-opacity-70"
              : "hidden"
          }`}
        >
          <PlayPause />
        </div>
        <img alt="song_img" src={item.song_art_image_thumbnail_url} />
      </div>
      <div className="mt-4 flex flex-col">
        <p className="font-semibold text-lg text-white truncate">
          <Link to={`/`}>{item.title}</Link>
        </p>
        <p className="text-sm truncate text-gray-300 mt-1">
          <Link to={`/g`}>{item.primary_artist.name}</Link>
        </p>
      </div>
    </div>
  );
};

export default SongCard;
