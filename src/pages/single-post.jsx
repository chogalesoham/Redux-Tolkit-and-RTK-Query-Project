import { useParams } from "react-router-dom";
import { useGetSingleUserQuery } from "../redux/features/users-ApiSlice";

const SinglePost = () => {
  const { id } = useParams();
  const { isLoading, data } = useGetSingleUserQuery(id);
  const post = data?.SinglePost;

  return (
    <>
      {isLoading && <h1>Loging...</h1>}
      {data && (
        <div className=" w-full fixed h-screen bg-[rgba(1,0,0,0.16)]  flex items-center justify-center">
          <div
            key={post._id}
            className="bg-white shadow-lg rounded-lg overflow-hidden p-4 z-20 relative"
          >
            <img
              src={post.postImage}
              alt={post.title}
              className="w-full h-50 object-contain shadow"
            />

            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800">
                {post.title}
              </h2>
              <p className="text-gray-600 mt-2">{post.description}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                <button className="bg-green-600 text-white px-3 py-2 rounded-md hover:bg-green-700 transition w-full">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SinglePost;
