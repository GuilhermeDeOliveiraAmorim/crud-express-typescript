import { User } from "./User";

test("Deve criar um usuário", () => {
    //given
    const user = new User("Guilherme", "Amorim");
    //when
    const userFullName = user.getFullName();
    //then
    expect(userFullName).toBe(user.getFullName());
});