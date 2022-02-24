export default interface Posts {
  posts: {
    _id: string;
    title: string;
    slug: string;
    _createdAt: string;
    publishedAt: string | null;
    author: string | null;
    body: string | null;
    mainImage: string | null;
    categories: string | null;
  }[];
}
