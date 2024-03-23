import { HttpError } from 'wasp/server';

export const getUserProjects = async (args, context) => {
  if (!context.user) {
    throw new HttpError(401);
  }

  return context.entities.Project.findMany({
    where: { userId: context.user.id }
  });
}