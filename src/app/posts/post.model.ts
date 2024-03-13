export interface PostModelFromApi {
  _id: string;
  title: string;
  content: string;
  imagePath: string;
  creator: string | null;
}
export interface PostModel {
  id: string;
  title: string;
  content: string;
  imagePath: string;
  creator: string | null;
}
