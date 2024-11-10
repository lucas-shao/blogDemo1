import { Link } from "react-router-dom";

interface BlogPost {
  id: string;
  title: string;
  date: string;
  path: string;
}

const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "永不熄灭的热情",
    date: "2024-03-20",
    path: "/blogs/first",
  },
  {
    id: "2",
    title: "逆风飞翔的天才",
    date: "2024-11-10",
    path: "/blogs/second",
  },
  // 可以继续添加更多博客文章
];

const BlogPage = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8">博客文章</h1>
      <div className="space-y-6">
        {blogPosts.map((post) => (
          <Link
            key={post.id}
            to={post.path}
            className="block bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold text-gray-800 hover:text-blue-600">
                {post.title}
              </h2>
              <span className="text-sm text-gray-500">{post.date}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;