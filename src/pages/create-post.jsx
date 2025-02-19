import { useState } from "react";
import { useCreateNewUserMutation } from "../redux/features/users-ApiSlice";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const [users, setUsers] = useState({
    title: "",
    description: "",
    postImage: null,
  });
  const [addUser, { isLoading }] = useCreateNewUserMutation();
  const Navigate = useNavigate();

  const getUserData = (e) => {
    const { name, value, type, files } = e.target;

    setUsers((prevUsers) => ({
      ...prevUsers,
      [name]: type === "file" ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", users.title);
    formData.append("description", users.description);
    if (users.postImage) {
      formData.append("postImage", users.postImage);
    }
    await addUser(formData);
    Navigate("/");
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Create Post</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <label className="block text-gray-700 font-medium mb-1">Title</label>
          <input
            type="text"
            name="title"
            value={users.title}
            onChange={getUserData}
            placeholder="Enter post title"
            className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Content
          </label>
          <textarea
            name="description"
            value={users.description}
            onChange={getUserData}
            placeholder="Enter post content"
            rows="4"
            className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            postImage
          </label>
          <input
            type="file"
            name="postImage"
            onChange={getUserData}
            className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          disabled={isLoading}
          className={`bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition ${
            isLoading ? "cursor-not-allowed" : "cursor-pointer"
          }`}
        >
          {isLoading ? "Creating..." : "Submit Post"}
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
