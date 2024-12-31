import { useState } from "react";

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
      {/* Main Content Area */}
      <div className="flex flex-1 flex-col lg:flex-row">
        {/* Sidebar */}
        <aside className="w-full lg:w-1/4 bg-gray-800 p-5 space-y-4 overflow-y-auto min-h-screen">
          <h2 className="text-2xl font-bold text-purple-400">User Inputs 🛠️</h2>

          {/* Gender */}
          <div className="space-y-2">
            <label className="block text-gray-300">Gender</label>
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="w-full p-2 rounded bg-gray-700 text-white shadow-md focus:ring-2 focus:ring-purple-500"
            >
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>

          {/* Age */}
          <div className="space-y-2">
            <label className="block text-gray-300">Age</label>
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
            <label className="block text-gray-300">Hair Color</label>
            <select
              value={hairColor}
              onChange={(e) => setHairColor(e.target.value)}
              className="w-full p-2 rounded bg-gray-700 text-white shadow-md focus:ring-2 focus:ring-purple-500"
            >
              <option>Black</option>
              <option>Brown</option>
              <option>Blonde</option>
            </select>
          </div>

          {/* Eye Color */}
          <div className="space-y-2">
            <label className="block text-gray-300">Eye Color</label>
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
            <label className="block text-gray-300">Skin Color</label>
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
  <label className="block text-gray-300">Shot Type</label>
  <div className="flex items-center space-x-4">
    <div
      className={`cursor-pointer p-2 border-2 rounded ${
        shotType === "Full Body" ? "border-purple-500" : "border-transparent"
      }`}
      onClick={() => setShotType("Full Body")}
    >
      <div className="w-30 h-30 overflow-hidden rounded bg-gray-700 flex items-center justify-center">
        <img
          src="https://i.pinimg.com/originals/df/15/1a/df151a4f7b18c840d4767e362a71b10a.png"
          alt="Full Body"
          className="w-full h-full object-cover"
        />
      </div>
      <p className="text-center text-gray-400 mt-1">Full Body</p>
    </div>
    <div
      className={`cursor-pointer p-2 border-2 rounded ${
        shotType === "Half Body" ? "border-purple-500" : "border-transparent"
      }`}
      onClick={() => setShotType("Half Body")}
    >
      <div className="w-30 h-30 overflow-hidden rounded bg-gray-700 flex items-center justify-center">
        <img
          src="https://as2.ftcdn.net/v2/jpg/04/21/41/97/1000_F_421419742_HsxdhOFNVq4iSHIAgxSmYoTxqO5Trgyy.jpg"
          alt="Half Body"
          className="w-full h-full object-cover"
        />
      </div>
      <p className="text-center text-gray-400 mt-1">Half Body</p>
    </div>
  </div>
</div>

          {/* Dress */}
          <div className="space-y-2">
            <label className="block text-gray-300">Dress</label>
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
            <label className="block text-gray-300">Background</label>
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
        <main className="flex-1 bg-gray-900 flex items-center justify-center relative">
          <div className="text-center bg-gray-800/90 backdrop-blur-md shadow-lg p-8 rounded-lg max-w-lg border-t-4 border-purple-500">
            <h2 className="text-4xl font-semibold text-purple-400 mb-6">
              Model Generation in Progress
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              Please wait while we process your input and generate the model
              preview.
            </p>

            <div className="border-4 border-dashed border-purple-400 p-6 bg-gray-700 shadow-md rounded-lg">
              {loading ? (
                <div className="flex justify-center mt-6">
                  <div className="w-8 h-8 rounded-full border-4 border-purple-500 border-t-transparent animate-spin"></div>
                </div>
              ) : (
                generatedImage && (
                  <img
                    src={generatedImage}
                    alt="Generated model preview"
                    className="max-w-full h-auto rounded-lg"
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
