import { Link } from "react-router-dom";
import {
  useGetAllUsersQuery,
  useDeleteNewUserMutation,
} from "../redux/features/users-ApiSlice";

const AllPost = () => {
  const { data, isError, isLoading } = useGetAllUsersQuery();
  const [deletePost] = useDeleteNewUserMutation();

  return (
    <div className="max-w-6xl mx-auto mt-10 px-4">
      <h1 className="text-2xl font-bold text-gray-900 mb-6 text-center">
        All Posts
      </h1>
      {isLoading && <h1>Loding...</h1>}
      {isError && <h1>Error Facchin data </h1>}
      {/* Grid Layout */}
      {data && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {data?.data?.AllPost.map((post) => (
            <div
              key={post._id}
              className="bg-white shadow-lg rounded-lg overflow-hidden p-4"
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
                  <Link
                    to={`/post/${post._id}`}
                    className="bg-blue-600 text-white px-3 py-2 rounded-md hover:bg-blue-700 transition"
                  >
                    View
                  </Link>
                  <Link
                    to={`/update/${post._id}`}
                    className="bg-yellow-500 text-white px-3 py-2 rounded-md hover:bg-yellow-600 transition"
                  >
                    Update
                  </Link>
                  <button
                    onClick={() => deletePost(post._id)}
                    className="bg-red-600 text-white px-3 py-2 rounded-md hover:bg-red-700 transition"
                  >
                    Delete
                  </button>
                  <button className="bg-green-600 text-white px-3 py-2 rounded-md hover:bg-green-700 transition w-full">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllPost;
