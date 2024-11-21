// import React from "react";

const APIPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-2xl font-semibold mb-4">API Keys</h1>
      <p className="text-gray-300 text-center mb-4">
        As an owner of this project, you can view and manage all API keys in this project.
        <br />
        Do not share your API key with others or expose it in the browser or other client-side code.
      </p>
      <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded">
        + Create new secret key
      </button>
    </div>
  );
};

export default APIPage;
