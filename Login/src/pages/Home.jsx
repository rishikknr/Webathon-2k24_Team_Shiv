import React, { useState } from 'react';
import { useQuery, useAction, getUserProjects, createProject } from 'wasp/client/operations';

const HomePage = () => {
  const { data: projects, isLoading, error } = useQuery(getUserProjects);
  const createProjectFn = useAction(createProject);
  const [newProjectName, setNewProjectName] = useState('');

  if (isLoading) return 'Loading...';
  if (error) return 'Error: ' + error;

  const handleCreateProject = () => {
    createProjectFn({ name: newProjectName });
    setNewProjectName('');
  };

  return (
    <div className='p-4'>
      <div className='flex gap-x-4 py-5'>
        <input
          type='text'
          placeholder='New Project'
          className='px-1 py-2 border rounded text-lg'
          value={newProjectName}
          onChange={(e) => setNewProjectName(e.target.value)}
        />
        <button
          onClick={handleCreateProject}
          className='bg-blue-500 hover:bg-blue-700 px-2 py-2 text-white font-bold rounded'
        >
          Create Project
        </button>
      </div>
      <div>
        {projects.map((project) => (
          <div
            key={project.id}
            className='py-2 px-2 flex items-center hover:bg-gray-100 gap-x-2 rounded'
          >
            <p>{project.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;