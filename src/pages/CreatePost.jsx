import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { FormField, Loader } from "../components";

import { preview } from "../assets";
import { getRandomPrompt } from "../utils";

const CreatePost = () => {
  const navigate = useNavigate(); // this is gonna allow us to navigate back to the home page once the post is created
  const [form, setForm] = useState({
    name: "",
    prompt: "",
    photo: "",
  });
  const [generatingImage, setGeneratingImage] = useState(false);
  // this is gonna be used while we're making contact with our API and waiting to get back the image
  const [loading, setLoading] = useState(false);
  // const [image, setImage] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    const prompt = getRandomPrompt(prompt)
    console.log(prompt)
    setLoading(false)
    navigate('/')
  }

  return (
    <section className="max-w-7xl mx-auto">
      <div>
        <h1 className="font-extrabold text-transparent bg-gradient-to-r from-[#00FFA1] to-[#00D4FF] bg-clip-text text-4xl sm:text-5xl md:text-6xl">
          {/* [&>span]:shadow-black [&>span]:shadow-md */}
          <span className="block">Create</span>
          <span className="block">...</span>
        </h1>

        <p className="mt-4 text-lg text-gray-500 max-w-[500px]">
          Create flabbergastingly stunning generated images through DALL-E AI and share them with the community.
        </p>
      </div>

      <form action="" className="mt-10 max-w-3xl" onSubmit={handleSubmit}>
        <FormField
          label="Name"
          type="text"
          name="name"
          value={form.name}
          placeholder="John Doe"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <FormField
          label="Prompt"
          type="text"
          name="prompt"
          placeholder="3D render of a cute tropical fish in an aquarium on a dark blue background, digital art"
          value={form.prompt}
          onChange={(e) => setForm({ ...form, prompt: e.target.value })}
          isSurpriseMe
          handleSurpriseMe={(e) => setForm({ ...form, prompt: e })}
        />
        <FormField
          label="Photo"
          type="file"
          name="photo"
          value={form.photo}
          onChange={(e) => setForm({ ...form, photo: e.target.files[0] })}
        />

        <button
          type="submit"
          className="mt-4 bg-gradient-to-r from-[#00FFA1] to-[#00D4FF] bg-clip-text text-white py-2 px-4 rounded-full"
          disabled={generatingImage}
        >
          {generatingImage ? "Generating..." : "Generate"}
        </button>
      </form>

      {/* {generatingImage && (
        <div className="flex justify-center items-center mt-4">
          <Loader />
        </div>
      )} */}
    </section>
  );
};

export default CreatePost;
