import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

export interface getInterface {
  request?: Request;
  params: Params;
}

export interface UserContextProps {
  data: object;
  setData: React.Dispatch<React.SetStateAction<Object>>;
  getInfo: () => Promise<void>;
}

export interface PersonProps {
  name: string;
  photo: string;
  email: string;
  description: string;
  linkedin: string;
  github: string;
}

export interface UserProps {
  id: string;
  uuid: string;
  name: string;
  photo: string;
  email: string;
  password?: string;
  posts: string[];
  qtdPosts?: number;
  likes: string[];
  supportDriver: boolean;
  blogDriver: boolean;
  createPostDriver: boolean;
}

export interface PostProps {
  id: string;
  parent?: string;
  creator: string;
  creatorName: string;
  creatorPhoto: string;
  likes: string[];
  qtdLikes?: number;
  title: string;
  content: string;
  created: Date;
  topics: string[];
}
