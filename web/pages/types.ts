export default interface Posts {
  posts: {
    author: {
      name: string;
    };
    _id: string;
    title: string;
    slug: {
      current: string;
    };
    _createdAt: string;
    publishedAt: string | null;
    body: {
      children: {
        text: string;
      } | null;
    };
    mainImage: {
      alt: string;
      src: string;
    };
    categories: string | null;
  }[];
}
