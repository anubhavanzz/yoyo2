export class User {
    $key: string;
    name: string;
    email: string;
    isUser: boolean;
    provider: string;


    constructor(key: string, name: string, email: string, isUser: boolean, provider: string) {
        this.$key = key,
            this.name = name,
            this.email = email,
            this.isUser = isUser,
            this.provider = provider;
    }

}
