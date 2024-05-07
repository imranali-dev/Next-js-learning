'use client'
import { useState } from "react";
import { creaetweets } from "./api";
import { RiTwitterLine } from "react-icons/ri";
import {  MdOutlineAddAPhoto } from "react-icons/md";


export default function Login() {
 const [content,setcontent]= useState('')
 const [imageURL,setimageURL]= useState('')
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    creaetweets(content,imageURL) // Corrected function name
  };
  return (
 <>


<div className="flex justify-center items-center min-h-screen bg-gray-800">
        <div className="bg-white p-4 rounded-lg shadow-md w-full md:w-1/2">
            <form onSubmit={handleSubmit}>
                <textarea
                    className="w-full border border-gray-300 p-2 rounded-lg outline-none resize-none bg-gray-100 text-gray-800" // Adjusted input area color
                    rows={4}
                    onChange={(e) => setcontent(e.target.value)}
                    placeholder="What's happening?"
                    value={content}
                />
                <div className="flex justify-between items-center mt-2">
                    <label htmlFor="imageUpload" className="text-gray-500 cursor-pointer">
                        <MdOutlineAddAPhoto className="mr-2" />
                        Add photos or videos
                    </label>
                    <input
                        id="imageUpload"
                        type="file"
                        accept="image/*" // Allowing only image uploads
                        className="hidden"
                        onChange={(e) => setimageURL(e.target.value)}
                    />
                    <button
                        type="submit"
                        className="flex items-center justify-center bg-blue-500 text-white rounded-full px-4 py-2 font-semibold transition duration-300 hover:bg-blue-600 focus:outline-none"
                    >
                        <RiTwitterLine className="mr-2" />
                        Tweet
                    </button>
                </div>
            </form>
        </div>
    </div>

 </>
  );
}