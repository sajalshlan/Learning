import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  console.log("!!!!!!!!!!!!!!!");
  const temp = useFetch();
  const {
    error,
    isPending,
    data: blogs,
  } = temp.get("http://localhost:8000/blogs");
  // return (
  //   <div className="home">
  //     {error && <div>{error}</div>}
  //     {isPending && <div>Loading...</div>}
  //     {blogs && <BlogList blogs={blogs} />}
  //   </div>
  // );
};

export default Home;
