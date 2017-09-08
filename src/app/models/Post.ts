import {User} from "./User";

export class Post {
    id?: string;
    name: string;
    body: string;
    created_at: string;
    created: string;
    deleted_at: string;
    user_id: string;
    user: User;
    image_url: string;
    image: string;
}
