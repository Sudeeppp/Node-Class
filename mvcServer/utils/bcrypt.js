import bcrypt from 'bcryptjs';

const saltRounds = 10; // Number of rounds for hashing

// create a hash password
export const createHashPass = async (password) => {
    return await bcrypt.hash(password, saltRounds);
}

// compare the password
export const comparePassword = async (plainPassword, hashPassword) => {
    return await bcrypt.compare(plainPassword, hashPassword);
} 