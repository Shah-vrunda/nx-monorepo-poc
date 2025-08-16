'use client';
import { trpc } from './utils/trpc';

export default function Index() {
  const projects = trpc.posts.list.useQuery();
  if (projects.isLoading) return <div>Loading...</div>;
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Welcome to the App</h1>
      <p className="text-lg text-gray-700">
        This is the main page of the application.
      </p>
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Posts</h2>
        <ul className="list-disc pl-5">
          {projects.data?.map((post) => (
            <li key={post.id} className="mb-2">
              {post.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
