export interface Component {
    className?: string;
    children?: React.ReactNode;
}

export interface Post {
    id: string;
    title: string;
    resumen: string;
    author: string;
    created_at: string;
    urlCover?: string;
}

export interface PostDetails extends Post {
    content: string,
    categories: string[],
    comments?: Comment[]
}

export interface CommentFetch {
    
}

export interface Comment {
    id: string;
    comment: string;
    author: string;
    created_at: string;
    children?: Comment[]
    isChildren?: boolean
}