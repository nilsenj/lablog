import {User} from "./User";

export class Post {
    id?: string;    public name: string;
    public body: string;
    public created_at?: string = "";
    public user?: User = new User;
    public available: boolean;
    public created?: string = null;
    public image?: string = null;
    public image_link?: string = null;
    public deleted_at?: string;
    public user_id?: number = null;
    public published?: string;
}
