import * as StatusRepositories from '../repositories/status.repository';

export const index = async () => {
   return await StatusRepositories.index();
}

export const find = async (id:any) => {
    return await StatusRepositories.find(id);
}

export const create = async (data:any) => {
    const response:any = await StatusRepositories.create(data);
    return response;
}

export const update = async (id:any, data:any) => {
    const response:any =  await StatusRepositories.update(id, data)
    return response;
}

export const destroy = async (id:any) => {
    return await StatusRepositories.destroy(id);
}
