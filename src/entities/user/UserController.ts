import { PrismaClient } from "@prisma/client";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime";
import { User } from "./User";

async function addUser(user: User) {
    const prisma = new PrismaClient();

    try {
        await prisma.user.create({
            data: {
                firstName: user.getFirstName(),
                lastName: user.getLastName(),
                email: user.getEmail(),
                password: user.getPassword(),
            },
        });
    } catch (error) {
        if (error instanceof PrismaClientKnownRequestError) {
            // The .code property can be accessed in a type-safe manner
            if (error.code === "P2002") {
                console.log(
                    "There is a unique constraint violation, a new user cannot be created with this email"
                );
            }
        }
        throw error;
    }
}

export { addUser };
