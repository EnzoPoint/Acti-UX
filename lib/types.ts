// types.ts
import { User } from "next-auth";

export interface NavItemType {
  name?: string;
  icon?: string;
  path?: string;
  action?: () => void;
}

export interface SessionUser extends User {
  id: string;
  isModerator: boolean;
  isAdmin: boolean;
}

export interface ImageComponentProps {
    value: {
        _ref: string;
        alt?: string;
    };
    isInline?: boolean;
}

export interface PostData {
  _id: string;
  title: string;
  description: string;
  body: any;
}

export interface BlockChild {
  _key: string;
  _type: 'span';
  text: string;
  marks?: string[];
}

export interface ImageBlockValue {
  _type: 'image';
  asset: {
    _ref: string;
  };
  alt?: string;
}

export type PortableTextFieldType = Array<ImageBlockValue | BlockChild>;