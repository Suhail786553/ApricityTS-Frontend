import { useState } from 'react';

const ModelGeneratorUI = () => {
  const [age, setAge] = useState(25);
  const [gender, setGender] = useState('Male');
  const [hairColor, setHairColor] = useState('Black');
  const [eyeColor, setEyeColor] = useState('Black');
  const [skinColor, setSkinColor] = useState('Very Light (Fair) Skin');
  const [shotType, setShotType] = useState('Full Body');
  const [dress, setDress] = useState('Kurta');
  const [background, setBackground] = useState('Soft Beige Gradient');
  const [generatedImage, setGeneratedImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const generateImage = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://api.example.com/generate-model', { // Replace with your API endpoint
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
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
        setGeneratedImage(data.imageUrl); // Assume the response includes an imageUrl
      } else {
        console.error('Error generating image:', data.error);
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Main Content Area */}
      <div className="flex flex-1 flex-col lg:flex-row">
        {/* Sidebar */}
        <aside className="w-full lg:w-1/4 bg-gray-800 text-white p-5 space-y-4 overflow-y-auto min-h-screen">
          <h2 className="text-2xl font-bold">User Inputs 🛠️</h2>

          <div className="space-y-2">
            <label className="block">Gender</label>
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="w-full p-2 rounded bg-gray-700 text-white"
            >
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="block">Age</label>
            <input
              type="range"
              min="16"
              max="50"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="w-full"
            />
            <span>{age}</span>
          </div>

          <div className="space-y-2">
            <label className="block">Hair Color</label>
            <select
              value={hairColor}
              onChange={(e) => setHairColor(e.target.value)}
              className="w-full p-2 rounded bg-gray-700 text-white"
            >
              <option>Black</option>
              <option>Brown</option>
              <option>Blonde</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="block">Eye Color</label>
            <select
              value={eyeColor}
              onChange={(e) => setEyeColor(e.target.value)}
              className="w-full p-2 rounded bg-gray-700 text-white"
            >
              <option>Black</option>
              <option>Brown</option>
              <option>Blue</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="block">Skin Color</label>
            <select
              value={skinColor}
              onChange={(e) => setSkinColor(e.target.value)}
              className="w-full p-2 rounded bg-gray-700 text-white"
            >
              <option>Very Light (Fair) Skin</option>
              <option>Medium Skin</option>
              <option>Dark Skin</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="block">Shot Type</label>
            <div className="grid grid-cols-2 gap-4">
              {/* Full Body */}
              <div
                onClick={() => setShotType('Full Body')}
                className={`cursor-pointer p-2 rounded-lg border ${
                  shotType === 'Full Body' ? 'border-purple-500' : 'border-gray-700'
                }`}
              >
                <img
                  src="https://via.placeholder.com/100x150"
                  alt="Full Body"
                  className="rounded-md w-full h-24 object-cover"
                />
                <p className="text-center text-white mt-2">Full Body</p>
              </div>
              {/* Half Body */}
              <div
                onClick={() => setShotType('Half Body')}
                className={`cursor-pointer p-2 rounded-lg border ${
                  shotType === 'Half Body' ? 'border-purple-500' : 'border-gray-700'
                }`}
              >
                <img
                  src="https://via.placeholder.com/100x150"
                  alt="Half Body"
                  className="rounded-md w-full h-24 object-cover"
                />
                <p className="text-center text-white mt-2">Half Body</p>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <label className="block">Dress Description</label>
            <input
              type="text"
              value={dress}
              onChange={(e) => setDress(e.target.value)}
              className="w-full p-2 rounded bg-gray-700 text-white"
            />
          </div>

          <div className="space-y-2">
            <label className="block">Background</label>
            <select
              value={background}
              onChange={(e) => setBackground(e.target.value)}
              className="w-full p-2 rounded bg-gray-700 text-white"
            >
              <option>Soft Beige Gradient</option>
              <option>Plain White</option>
              <option>Studio Background</option>
            </select>
          </div>

          <button
            onClick={generateImage}
            className="bg-purple-600 w-full py-2 mt-4 rounded"
          >
            {loading ? 'Generating...' : 'Generate Image'}
          </button>
        </aside>

        {/* Main Content */}
        <main
          className="flex-1 bg-cover bg-center flex items-center justify-center relative overflow-hidden"
          style={{
            backgroundImage: 'url("https://thecircularcapital.com/wp-content/uploads/2023/03/Bot-2.png")', // Replace with your background image URL
            
          }}
        >
          {/* Content Section */}
          <div className="text-center bg-white/80 backdrop-blur-md shadow-lg p-8 rounded-lg max-w-lg border-t-4 border-purple-600">
            <h2 className="text-4xl font-semibold text-gray-800 mb-6">
              Model Generation in Progress
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Please wait while we process your input and generate the model
              preview.
            </p>

            {/* Placeholder for the Generated Model */}
            <div className="border-4 border-dashed border-purple-400 p-6 bg-white shadow-md rounded-lg">
              {loading ? (
                <div className="flex justify-center mt-6">
                  <div className="w-8 h-8 rounded-full border-4 border-blue-600 border-t-transparent animate-spin"></div>
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
            <div className="mt-8">
              <button className="bg-purple-600 text-white px-8 py-3 rounded-lg shadow hover:bg-purple-500 transition duration-300">
                View Results
              </button>
              <button className="bg-gray-200 text-gray-800 px-8 py-3 rounded-lg shadow hover:bg-gray-300 transition duration-300 ml-4">
                Edit Inputs
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ModelGeneratorUI;
