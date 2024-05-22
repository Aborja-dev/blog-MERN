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
    Image?: string;
}

export interface Comment {
    id: string;
    comment: string;
    author: string;
    created_at: string;
    children?: Comment[]
}