/* eslint-disable react/no-unescaped-entities */
import { useRouter } from "next/router";
import Layout from "../../../components/writer/Layout";
import {
  MoreHorizontal,
  Heart,
  MessageCircle,
  Share,
  Bookmark,
  RefreshCcw,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { users } from "../../../data/data";

const WriterProfile = ({ writer }) => {
  const [activeTab, setActiveTab] = useState("Activity"); // Manage active tab state

  console.log(users);
  // Dummy user data - Replace with real fetched data
  const user = users[0];
  const user2 = users[1];

  return (
    <Layout>
      <main className="flex flex-col min-h-screen">
        <div className="flex-1 overflow-auto mx-4">
          {user && (
            <>
              <h1>Profile for {user.firstName}</h1>
              <div className="max-w-3xl mx-auto p-4">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h1 className="text-2xl text-gray-800 font-bold">
                      {user.firstName} {user.lastName}
                    </h1>
                    <p className="text-gray-600">@{user.username}</p>
                  </div>
                  <div className="rounded-full">
                    <Image
                      alt={user.username}
                      src={user.avatar}
                      width={100}
                      height={100}
                      className="flex-shrink-0 rounded-full w-20 h-20 object-cover"
                    />
                  </div>
                </div>
                <p className="mb-4">{user.about}</p>
                <p className="text-sm text-gray-400 mb-4">
                  {user.subscribers} subscriber(s)
                </p>
                <div className="flex space-x-2 mb-6">
                  <button className="flex-1 bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded">
                    Subscribe
                  </button>
                  <button className="p-2 bg-gray-200 rounded">
                    <MoreHorizontal className="h-4 w-4" />
                  </button>
                </div>
                <div class="bg-gray-100 rounded-lg p-4 mb-4">
                  <div class="flex items-center gap-2 mb-2">
                    <Image
                      alt={user.username}
                      src={user.avatar}
                      width={100}
                      height={100}
                      className="flex-shrink-0 rounded-full w-20 h-20 object-cover"
                    />
                    <div>
                      <h2 class="text-sm font-bold">
                        {user.firstName}'s Substack
                      </h2>
                      <p class="text-xs text-gray-400">By {user.firstName}</p>
                    </div>
                  </div>
                  <p class="text-sm text-gray-400">{user.about}</p>
                </div>

                <div className="space-y-8">
                  {/* Tab Section */}
                  <div className="mb-4">
                    <div className="flex border-b border-gray-100 ">
                      <button
                        onClick={() => setActiveTab("Activity")}
                        className={`font-bold flex-1 py-2 px-4 text-center ${
                          activeTab === "Activity"
                            ? "text-gray-900 border-b-2 border-orange-500"
                            : "text-gray-600 hover:text-gray-900"
                        }`}
                      >
                        Activity
                      </button>
                      <button
                        onClick={() => setActiveTab("Posts")}
                        className={`font-bold flex-1 py-2 px-4 text-center ${
                          activeTab === "Posts"
                            ? "text-gray-900 border-b-2 border-orange-500"
                            : "text-gray-600 hover:text-gray-900"
                        }`}
                      >
                        Posts
                      </button>
                      <button
                        onClick={() => setActiveTab("Likes")}
                        className={`font-bold flex-1 py-2 px-4 text-center ${
                          activeTab === "Likes"
                            ? "text-gray-900 border-b-2 border-orange-500"
                            : "text-gray-600 hover:text-gray-900"
                        }`}
                      >
                        Likes
                      </button>
                      <button
                        onClick={() => setActiveTab("Reads")}
                        className={`font-bold flex-1 py-2 px-4 text-center ${
                          activeTab === "Reads"
                            ? "text-gray-900 border-b-2 border-orange-500"
                            : "text-gray-600 hover:text-gray-900"
                        }`}
                      >
                        Reads ({user.reads.length})
                      </button>
                    </div>
                  </div>

                  {/* Conditionally Render Content Based on Selected Tab */}
                  {activeTab === "Activity" && (
                    <div className="space-y-6 ">
                      {user.posts.map((post, index) => (
                        // should be routed to the post page
                        <div
                          key={index}
                          className="bg-gray-50 p-3 rounded-lg p-2 hover:bg-gray-200 hover:cursor-pointer"
                        >
                          <div className="flex items-center justify-between mb-4">
                            <div class="flex items-center justify-between mb-4">
                              <div class="flex items-center gap-2">
                                <Image
                                  alt={user.firstName}
                                  src={user.avatar}
                                  width={100}
                                  height={100}
                                  className=" flex-shrink-0 rounded-full w-10 h-10 object-cover"
                                />
                                <div>
                                  <h3 class="text-sm font-bold">
                                    {user.firstName}
                                  </h3>
                                  <p class="text-xs text-gray-400">
                                    {post.date}
                                  </p>
                                </div>
                              </div>
                            </div>
                            <button className="text-gray-900 hover:text-gray-1000">
                              <MoreHorizontal className="h-4 w-4" />
                              <span className="sr-only">More</span>
                            </button>
                          </div>
                          <div className="bg-gray-100 p-2 ml-12 rounded-md flex justify-between mb-4 mt-[-1rem] border-2 shadow-lg border-gray-300">
                            <div>
                              <div className="flex flex-row gap-2">
                                <Image
                                  alt={user.firstName}
                                  src={user.avatar}
                                  width={100}
                                  height={100}
                                  className=" flex-shrink-0 rounded-full w-6 h-6 object-cover"
                                />
                                <p className="text-gray-400 mb-1 uppercase">
                                  {user.firstName}'s Substack
                                </p>
                              </div>

                              <p className="font-semibold">{post.title}</p>
                              <p className="text-sm text-gray-400">
                                {post.post}
                              </p>
                            </div>
                            <div>
                              <button className="py-8 mr-8 text-gray-900 hover:text-gray-1000">
                                <Bookmark className="h-4 w-4" />
                                <span className="sr-only">Bookmark</span>
                              </button>
                            </div>
                          </div>
                          <div className="flex justify-around items-center space-x-4 mt-2">
                            <button className="text-gray-500">
                              <Heart className="h-4 w-4" />
                              <span className="sr-only">Like</span>
                            </button>
                            <button className="text-gray-500">
                              <MessageCircle className="h-4 w-4" />
                              <span className="sr-only">Comment</span>
                            </button>
                            <button className="text-gray-500">
                              <Share className="h-4 w-4 " />
                              <span className="sr-only">Share</span>
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {activeTab === "Posts" && (
                    <div>
                      {user.posts.map((post) => (
                        <div
                          key={post.id}
                          className="bg-gray-100 p-3 rounded-lg mb-4"
                        >
                          <div className="">
                            <div className="flex flex-row justify-between gap-2">
                              <div className="flex gap-2 py-2">
                                <Image
                                  alt={user.firstName}
                                  src={user.avatar}
                                  width={100}
                                  height={100}
                                  className=" flex-shrink-0 rounded-full w-6 h-6 object-cover"
                                />
                                <p className="text-gray-400 text-sm mb-1 uppercase">
                                  {user.firstName}'s Substack
                                </p>
                              </div>
                              <div>
                                <p className="text-gray-400 text-sm mb-1 uppercase flex justify-end">
                                  {post.date}
                                </p>
                              </div>
                            </div>

                            <p className="font-semibold">{post.title}</p>
                            <p className="py-2 text-sm text-gray-400">
                              {post.post}
                            </p>
                            <p className="py-2 text-sm uppercase font-bold text-gray-400">
                              {user.firstName} . 1 Min read
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {activeTab === "Likes" && (
                    <div>
                      {user.likes.length > 0 ? (
                        user.likes.map((like, index) => (
                          <div
                            key={index}
                            className="bg-gray-50 rounded-lg mb-4"
                          >
                            <div className="p-4">
                              <div className="flex items-center gap-4">
                                <Image
                                  alt={like.userPostImg}
                                  src={user.avatar}
                                  width={100}
                                  height={100}
                                  className=" flex-shrink-0 rounded-full w-10 h-10 object-cover"
                                />
                                <div className="pt-2">
                                  <div className="flex items-center gap-4">
                                    <h3 className="font-semibold">
                                      {like.postTitle}
                                    </h3>
                                    <p className="text-sm text-gray-400">
                                      {like.date}
                                    </p>
                                  </div>
                                  <div className="flex flex-row gap-4">
                                    <p className="text-xs text-gray-500">
                                      {like.postTitle}
                                    </p>
                                    <a
                                      href="#"
                                      className="text-xs text-orange-500 p-0 h-auto hover:underline"
                                    >
                                      Subscribe
                                    </a>
                                  </div>
                                </div>
                              </div>
                              <p className="my-2 mx-12 text-xl text-gray-600">
                                {like.postSnippet}
                              </p>
                              <div>
                                <div className="w-full mx-12">
                                  <Image
                                    src={like.postUserImg}
                                    width={500}
                                    height={200}
                                    alt="post"
                                    className="rounded-lg"
                                  />
                                </div>
                                <div className="flex py-2 mx-12 flex-row space-x-32 items-center mt-6">
                                  <button className="text-gray-900 hover:text-gray-1000">
                                    <Heart className="h-4 w-4 mr-2" />
                                    <span className="sr-only">Like</span>
                                  </button>
                                  <button className="text-gray-900 hover:text-gray-1000">
                                    <MessageCircle className="h-4 w-4 mr-2" />
                                    <span className="sr-only">Comment</span>
                                  </button>
                                  <button className="text-gray-900 hover:text-gray-1000">
                                    <Share className="h-4 w-4 mr-2" />
                                    <span className="sr-only">Share</span>
                                  </button>
                                  <button className="text-gray-900 hover:text-gray-1000">
                                    <RefreshCcw className="h-4 w-4" />
                                    <span className="sr-only">Repost</span>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))
                      ) : (
                        <p className="text-gray-400 text-center py-4">
                          No likes yet.
                        </p>
                      )}
                    </div>
                  )}

                  {activeTab === "Reads" && (
                    <div>
                      {user.reads.length > 0 ? (
                        user.reads.map((read) => (
                          <div
                            key={read.id}
                            className="bg-gray-100 p-3 rounded-lg mb-4 hover:cursor-pointer"
                          >
                            <div className="flex flex-row justify-between">
                              <div className="flex  gap-4">
                                <Image
                                  alt={read.author}
                                  src={read.authorImg}
                                  width={100}
                                  height={100}
                                  className=" flex-shrink-0  w-14 h-14 object-cover"
                                />
                                <div>
                                  <h3 className="font-semibold text-gray-700">
                                    {read.substackName}
                                  </h3>
                                  <p className="text-gray-500 text-sm">
                                    {" "}
                                    by {read.author}
                                  </p>
                                </div>
                              </div>
                              <div className="bg-gray-300 p-2 m-2">
                                <button className="">Subscribed</button>
                              </div>
                            </div>
                            <h3 className="text-gray-800 font-semibold">
                              {read.post}
                            </h3>
                          </div>
                        ))
                      ) : (
                        <p className="text-gray-400 text-center">
                          No reads yet.
                        </p>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </>
          )}
        </div>
      </main>
    </Layout>
  );
};

export async function getServerSideProps(context) {
  const { params } = context;
  const { writer } = params;

  // Fetch data specific to the writer using 'writer' parameter
  // Example:
  // const writerData = await fetchWriterData(writer);

  return {
    props: {
      writer, // Pass writer data dynamically
    },
  };
}

export default WriterProfile;
