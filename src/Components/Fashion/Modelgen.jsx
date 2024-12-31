import { useState } from "react";
import { FaMale } from "react-icons/fa";
import { FaFemale } from "react-icons/fa";

const ModelGeneratorUI = () => {
  const [age, setAge] = useState(25);
  const [gender, setGender] = useState("Male");
  const [hairColor, setHairColor] = useState("Black");
  const [eyeColor, setEyeColor] = useState("Black");
  const [skinColor, setSkinColor] = useState("Very Light (Fair) Skin");
  const [shotType, setShotType] = useState("Full Body");
  const [dress, setDress] = useState("Kurta");
  const [background, setBackground] = useState("Soft Beige Gradient");
  const [generatedImage, setGeneratedImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const generateImage = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://api.example.com/generate-model", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          age,
          gender,
          hairColor,
          eyeColor,
          skinColor,
          shotType,
          dress,
          background,
        }),
      });

      const data = await response.json();
      if (response.ok) {
        setGeneratedImage(data.imageUrl);
      } else {
        console.error("Error generating image:", data.error);
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <div className="flex flex-1 flex-col lg:flex-row">
        {/* Sidebar */}
        <aside
          className="w-full lg:w-1/5 bg-gray-800 p-5 space-y-4 overflow-y-auto min-h-screen sticky top-0 h-screen scrollbar-hidden"
        >
          <h2 className="text-2xl font-bold text-purple-400">User Inputs</h2>

          {/* Gender */}
          <div className="space-y-2">
            <label className="block text-white-00">Gender</label>
            <div className="relative">
              <select
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                className="w-full p-2 pl-10 rounded bg-gray-700 text-white shadow-md focus:ring-2 focus:ring-purple-500"
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
              <div className="absolute inset-y-0 left-2 flex items-center pointer-events-none">
                {gender === "Male" ? (
                  <i className="fas fa-mars text-white-600"><FaMale /></i>
                ) : (
                  <i className="fas fa-venus text-pink-600"><FaFemale /></i>
                )}
              </div>
            </div>
          </div>

          {/* Age */}
          <div className="space-y-2">
            <label className="block text-white-300">Age</label>
            <input
              type="range"
              min="16"
              max="50"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="w-full accent-purple-500"
            />
            <span className="text-purple-400">{age}</span>
          </div>

          {/* Hair Color */}
          <div className="space-y-2">
            <label className="block text-white-300">Hair Color</label>
            <select
              value={hairColor}
              onChange={(e) => setHairColor(e.target.value)}
              className="w-full p-2 rounded bg-gray-700 text-white shadow-md focus:ring-2 focus:ring-purple-500"
            >
              <option className="bg-gray-800 text-white hover:bg-purple-600">Black</option>
              <option>Brown</option>
              <option>Blonde</option>
            </select>
          </div>

          {/* Eye Color */}
          <div className="space-y-2">
            <label className="block text-white-300">Eye Color</label>
            <select
              value={eyeColor}
              onChange={(e) => setEyeColor(e.target.value)}
              className="w-full p-2 rounded bg-gray-700 text-white shadow-md focus:ring-2 focus:ring-purple-500"
            >
              <option>Black</option>
              <option>Brown</option>
              <option>Blue</option>
            </select>
          </div>

          {/* Skin Color */}
          <div className="space-y-2">
            <label className="block text-white-300">Skin Color</label>
            <select
              value={skinColor}
              onChange={(e) => setSkinColor(e.target.value)}
              className="w-full p-2 rounded bg-gray-700 text-white shadow-md focus:ring-2 focus:ring-purple-500"
            >
              <option>Very Light (Fair) Skin</option>
              <option>Light Skin</option>
              <option>Medium Skin</option>
              <option>Dark Skin</option>
            </select>
          </div>

          {/* Shot Type */}
          <div className="space-y-2">
            <label className="block text-white-300 font-medium">Shot Type</label>
            <div className="flex items-center space-x-4">
              {/* Full Body Option */}
              <div
                className={`cursor-pointer p-2 border-2 rounded ${
                  shotType === "Full Body" ? "border-purple-500" : "border-transparent"
                }`}
                onClick={() => setShotType("Full Body")}
              >
                <div className="w-30 h-30 overflow-hidden rounded bg-gray-700 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-16 h-16 text-purple-400"
                  >
                    <path d="M12 2.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5zm0 6c-2.5 0-4.5 2-4.5 4.5v5.5H5v-2a1 1 0 10-2 0v2.5c0 .83.67 1.5 1.5 1.5h3c.83 0 1.5-.67 1.5-1.5V13a1 1 0 112 0v9.5c0 .83.67 1.5 1.5 1.5h2c.83 0 1.5-.67 1.5-1.5v-9.5a1 1 0 112 0v7c0 .83.67 1.5 1.5 1.5h2c.83 0 1.5-.67 1.5-1.5V16a1 1 0 10-2 0v2h-2.5v-5.5c0-2.5-2-4.5-4.5-4.5z" />
                  </svg>
                </div>
                <p className="text-center text-white-400 mt-1">Full Body</p>
              </div>

              {/* Half Body Option */}
              <div
                className={`cursor-pointer p-2 border-2 rounded ${
                  shotType === "Half Body" ? "border-purple-500" : "border-transparent"
                }`}
                onClick={() => setShotType("Half Body")}
              >
                <div className="w-30 h-30 overflow-hidden rounded bg-gray-700 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-16 h-16 text-purple-400"
                  >
                    <path d="M12 2a3 3 0 100 6 3 3 0 000-6zM6 13c0-1.1.9-2 2-2h8c1.1 0 2 .9 2 2v3H6v-3zm3 6c-1.1 0-2-.9-2-2h10c0 1.1-.9 2-2 2H9z" />
                  </svg>
                </div>
                <p className="text-center text-white-400 mt-1">Half Body</p>
              </div>
            </div>
          </div>

          {/* Dress */}
          <div className="space-y-2">
            <label className="block text-white-300">Dress</label>
            <select
              value={dress}
              onChange={(e) => setDress(e.target.value)}
              className="w-full p-2 rounded bg-gray-700 text-white shadow-md focus:ring-2 focus:ring-purple-500"
            >
              <option>Kurta</option>
              <option>Suit</option>
              <option>Casual</option>
            </select>
          </div>

          {/* Background */}
          <div className="space-y-2">
            <label className="block text-white-300">Background</label>
            <select
              value={background}
              onChange={(e) => setBackground(e.target.value)}
              className="w-full p-2 rounded bg-gray-700 text-white shadow-md focus:ring-2 focus:ring-purple-500"
            >
              <option>Soft Beige Gradient</option>
              <option>Nature Scene</option>
              <option>Solid Blue</option>
            </select>
          </div>

          {/* Generate Button */}
          <button
            onClick={generateImage}
            className="bg-purple-600 hover:bg-purple-700 text-white w-full py-2 mt-4 rounded shadow-lg transition duration-300"
          >
            {loading ? "Generating..." : "Generate Image"}
          </button>
        </aside>

        {/* Main Content */}
        <main className="flex-1 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 flex items-center justify-center min-h-screen px-4">
          <div className="text-center bg-gray-800/90 backdrop-blur-md shadow-xl p-10 rounded-2xl max-w-lg border-t-4 border-purple-500">
            <h2 className="text-4xl font-bold text-purple-400 mb-6">
              Generating Your Fashion Model
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Please wait as we process your input and create a stunning preview of your model.
            </p>

            <div className="border-4 border-dashed border-purple-500 p-8 bg-gray-700 rounded-xl shadow-inner">
              {loading ? (
                <div className="flex flex-col items-center space-y-4">
                  <div className="w-10 h-10 rounded-full border-4 border-purple-500 border-t-transparent animate-spin"></div>
                  <p className="text-gray-400">Processing...</p>
                </div>
              ) : (
                generatedImage && (
                  <img
                    src={generatedImage}
                    alt="Generated Model Preview"
                    className="max-w-full h-auto rounded-lg shadow-lg"
                  />
                )
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ModelGeneratorUI;
