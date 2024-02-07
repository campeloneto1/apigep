import UserModel from '../models/user.model';

export const login = async (data:any) => {
    const user = await UserModel.findOne({ where: { cpf: data.cpf },
    include: ['perfil'] });
    if(user){
        //@ts-ignore
        if(user.authenticate(data.password)){
           return user;
        }else{
            return false;
        }
    }
}