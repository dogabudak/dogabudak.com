import {FC, memo, PropsWithChildren} from 'react';

import {Project as ProjectType} from '../../../data/dataDef';

export const ProjectGroup: FC<PropsWithChildren<{projectGroup: ProjectType}>> = memo(({projectGroup}) => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-y-2">
        <Project key={`${projectGroup.name}`} project={projectGroup} />
      </div>
    </div>
  );
});

ProjectGroup.displayName = 'ProjectGroup';

export const Project: FC<{project: ProjectType}> = memo(({project}) => {
  const {name, description} = project;
  return (
    <div className="flex flex-col">
      <span className="ml-2 text-sm font-medium">{name}</span>
      <span className="font-small ml-2 text-sm">{description}</span>
    </div>
  );
});

Project.displayName = 'Project';
