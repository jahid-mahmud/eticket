export interface User {
    id: string;
    avatar?: string;
    designation?: string;
    roles?: string[];
    rolesMap?: any;
    username: string;
    fullname?: string;
    last_login?: Date;
    date_joined?: Date;
    email: string;
    is_active?: boolean;
    first_name?: string;
    last_name?: string;
    organization?: string;
    isActivated?: boolean;
}
