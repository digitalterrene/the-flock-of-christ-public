import React from "react";
interface Blog {
  id: string;
  title: string;
  images: any;
  date: string;
  content: string;
}
interface Props {
  blog: Blog;
}

export const BlogCard: React.FC<Props> = ({ blog }) => {
  const { id, title, date, images, content } = blog;
  return (
    <div>
      <a
        className="group block rounded-xl dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
        href={`/resources/${id}`}
      >
        <div className="aspect-w-16 aspect-h-9">
          <img
            className="w-full object-cover h-44 rounded-xl"
            src={`${images[0]?.image}`}
            alt={`${title}`}
          />
        </div>
        <h3 className="mt-2  line-clamp-1 text-lg font-bold text-gray-800 group-hover:text-blue-600 dark:text-gray-300 dark:group-hover:text-white">
          {title}
        </h3>
        <p className="mt-2  line-clamp-2 text-lg font-medium text-gray-800 group-hover:text-blue-600 dark:text-gray-300 dark:group-hover:text-white">
          {(content as string)?.substring(0, 310) || "No intro paragraph"}
        </p>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{date}</p>
      </a>
    </div>
  );
};
