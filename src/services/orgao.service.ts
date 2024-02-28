import * as OrgaoRepositories from '../repositories/orgao.repository';

export const index = async () => {
   return await OrgaoRepositories.index();
}

export const find = async (id:any) => {
    return await OrgaoRepositories.find(id);
}

export const create = async (data:any) => {
    const response:any = await OrgaoRepositories.create(data);
    return response;
}

export const update = async (id:any, data:any) => {
    const response:any =  await OrgaoRepositories.update(id, data)
    return response;
}

export const destroy = async (id:any) => {
    return await OrgaoRepositories.destroy(id);
}
