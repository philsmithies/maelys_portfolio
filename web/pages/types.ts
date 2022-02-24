export default interface Posts {
  posts: {
    _id: string;
    _createdAt: string;
    author: string | null;
    title: string;
    publishedAt: string | null;
    body: {
      children: {
        text: string;
      };
    }[];
    slug: {
      current: string;
    };
    mainImage: string | null;
    categories: string | null;
  }[];
}
