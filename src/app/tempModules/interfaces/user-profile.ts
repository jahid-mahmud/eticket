

    export interface AccessLevel {
        id: number;
        name: string;
        description: string;
    }

   

    export interface ResponseUser {
        id: number;
        username: string;
        last_login: Date;
        date_joined: Date;
        email: string;
        is_active: boolean;
        first_name: string;
        last_name: string;
        roles: string[];
        rolesMap?: any;
    }

    export interface UserProfile {
        id: number;
        first_name: string;
        access_level: AccessLevel;
        user: ResponseUser;
        image?: any;
        phone?: any;
        address_line1: string;
        address_line2?: any;
        city: string;
        zip_code: string;
        country?: any;
        profession?: any;
        date_of_birth: Date;
        cover_image?: any;
        salutation: string;
        iban: string;
        account_type: string;
        company_name: string;
        bic?: any;
        document1: string;
        document2?: any;
        document3?: any;
        document4?: any;
        issue_date: Date;
        expire_date: Date;
        line_of_business: string;
        commercial_register_number: string;
        is_verified: boolean;
        document_type: string;
        document_number: string;
        user_type: string;
        issuing_authority: string;
        current_status: string;
        is_newsletter_subscription: boolean;
        first_transaction_date?: any;
        street?:string;
        house?:string;
    }



