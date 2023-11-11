import { Roles } from "../../src/constants";

export class UserRepository {
    async save() {
        return {
            id: 1,
            firstName: "Rakesh",
            lastName: "K",
            email: "rakesh@mernspace.com",
            password: "password",
            role: Roles.MANAGER,
            tenantId: 1,
        };
    }

    async findOne() {
        return null;
    }
}
