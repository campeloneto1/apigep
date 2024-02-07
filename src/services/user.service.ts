import * as UserRepositories from '../repositories/user.repository';

export const index = async () => {
   return await UserRepositories.index();
}

export const find = async (id:any) => {
    return await UserRepositories.find(id);
}

export const create = async (data:any) => {
    data.password = data.cpf;
    const response:any = await UserRepositories.create(data);
    return response;
}

export const update = async (id:any, data:any) => {
    data.password = data.cpf;
    const response:any =  await UserRepositories.update(id, data)
    return response;
}

export const destroy = async (id:any) => {
    return await UserRepositories.destroy(id);
}
