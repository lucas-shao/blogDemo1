import Markdown from "react-markdown";
import first from "./first.md";

const FirstBlog = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="mb-8 pb-8 border-b border-gray-200">
        <h1 className="text-3xl font-bold mb-4">永不熄灭的热情</h1>
        <div className="flex items-center text-gray-600 text-sm">
          <div className="flex items-center mr-6">
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
            <span>作者: John Doe</span>
          </div>
          <div className="flex items-center mr-6">
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <span>发布于: 2024-03-21</span>
          </div>
          <div className="flex items-center">
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
              />
            </svg>
            <span>标签: 灌篮高手</span>
          </div>
        </div>
      </div>

      <div className="markdown-content prose prose-lg max-w-none">
        <Markdown>{first}</Markdown>
      </div>

      <div className="mt-8 pt-8 border-t border-gray-200">
        <div className="flex justify-between items-center">
          <div className="text-sm text-gray-600">最后更新: 2024-03-21</div>
          <div className="flex space-x-4">
            <button className="text-blue-600 hover:text-blue-800">分享</button>
            <button className="text-blue-600 hover:text-blue-800">收藏</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstBlog;
