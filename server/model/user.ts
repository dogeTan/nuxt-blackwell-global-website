import { sql } from '~~/server/db';

enum CountryState{
    'MY',
    'SG',
    'UK',
    'NZ',
}

enum VerifyStatus{
    'Yes',
    'No',
}

enum UserStatus{
    'active',
    'inactive',
    'trash',
}

export type UserModel = {
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    emailVerified: VerifyStatus,
    password: string,
    mobile: string, 
    country: CountryState,
    status: UserStatus,
    createdAt: string,
    updatedAt: string,
}

//Get ALL user data
export const read = async () =>{
    const result = await sql ({
        query: 'SELECT * FROM User'
    });

    return result as UserModel[];
}

// Register
export const create = async (data: UserModel) => {
    const result = await sql({
        query: ' INSERT INTO User ( firstName, lastName, email, country, mobile, password) VALUES (?.?.?.?,?,?,?,?) RETURNING *',
        values: [data.firstName, data.lastName, data.email, data.password, data.mobile, data.country]
    }) as any;

    return result.length === 1? (result[0] as UserModel) : null;
}

//Get single rows user detail
export const detail = async (id: string) =>{
    const result = await sql ({
        query: 'SELECT * FROM User WHERE id = ?',
        values: [id],
    }) as any;

    return result.length === 1? (result[0] as UserModel) : null;
}

//Update user detail
export const update = async (id: string) =>{
    (await sql ({
        query: 'UPDATE User SET ',
        values: [id],
    }));

    return await detail(id);
}

//After sign up and login, need verify user email
export const updateEmailVerify = async (id: string, verifyStatus: VerifyStatus) =>{
    (await sql ({
        query: 'UPDATE User SET emailVerify = ? WHERE id = ?',
        values: [verifyStatus, id],
    }));

    return await detail(id);
}

// updatePassword

