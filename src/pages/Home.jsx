import { useState, useEffect } from "react";

import { Loader, Card, FormField } from "../components";

const RenderCards = ({ data, title }) => {
  if (data?.length > 0) {
    return data.map((post) => <Card key={post._id} {...post} />);
  }

  return <h2 className="text-[#6449ff] text-xl mt-5 font-bold">{title}</h2>;
};

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [allPosts, setAllPosts] = useState(null);
  // 'undefined' by default.
  const [searchText, setSearchText] = useState("");

//   useEffect(() => {
//     setTimeout(() => {
//       setLoading(false);
//     }, 2000);
//   }, []);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div>
        <h1 className="font-extrabold text-transparent bg-gradient-to-r from-[#00FFA1] to-[#00D4FF] bg-clip-text text-4xl sm:text-5xl md:text-6xl">
          {/* [&>span]:shadow-black [&>span]:shadow-md */}
          <span className="block">AI Image Generation</span>
          <span className="block">App</span>
        </h1>

        <p className="mt-4 text-lg text-gray-500 max-w-[500px]">
          Browse through a collection of flabbergastingly stunning generated
          images by DALL-E AI.
        </p>
      </div>

      <div className="mt-16">
        <FormField />
      </div>

      <div className="mt-10">
        {loading ? (
          <div className="flex justify-center items-center">
            <Loader />
          </div>
        ) : (
          <>
            {searchText && (
              <h2 className="font-medium text-[#666e75] text-xl mb-3">
                Showing results for
                <span className="text-blue-500">{searchText}</span>
              </h2>
            )}
            <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {searchText ? (
                <RenderCards data={[]} title="No search results found" />
              ) : (
                <RenderCards data={[]} title="No posts found" />
              )}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Home;
