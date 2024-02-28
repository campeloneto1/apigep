import * as SetorRepositories from '../repositories/setor.repository';

export const index = async () => {
   return await SetorRepositories.index();
}

export const find = async (id:any) => {
    return await SetorRepositories.find(id);
}

export const create = async (data:any) => {
    const response:any = await SetorRepositories.create(data);
    return response;
}

export const update = async (id:any, data:any) => {
    const response:any =  await SetorRepositories.update(id, data)
    return response;
}

export const destroy = async (id:any) => {
    return await SetorRepositories.destroy(id);
}
