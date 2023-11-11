import { Repository } from "typeorm";
import { Roles } from "../../src/constants";
import { UserService } from "../../src/services/UserService";
import { UserRepository } from "./mock";
import { User } from "../../src/entity/User";

describe("UserService", () => {
    describe("Create", () => {
        it("should create a user", async () => {
            const userData = {
                firstName: "Rakesh",
                lastName: "K",
                email: "rakesh@mernspace.com",
                password: "password",
                role: Roles.MANAGER,
                tenantId: 1,
            };

            const userService = new UserService(
                new UserRepository() as unknown as Repository<User>,
            );

            expect(await userService.create(userData)).toEqual({
                ...userData,
                id: 1,
            });
        });
    });
});
