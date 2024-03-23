import { HttpError } from 'wasp/server'

export const createProject = async (arg, context) => {
    if (!context.user) { throw new HttpError(401) };
    return context.entities.Project.create({
      data: {
        name: arg.name,
        userId: context.user.id
      }
    });
}