import {
  formatFiles,
  generateFiles,
  Tree,
  names,
  getProjects,
} from '@nx/devkit';
import * as path from 'path';
import { ComponentStoryGeneratorSchema } from './schema';

export async function componentStoryGenerator(
  tree: Tree,
  options: ComponentStoryGeneratorSchema
) {
  const resolvedOptions = {
    ...options,
    className: names(options.name).className,
  };
  const projectSourceRoot = getProjects(tree).get(options.project).sourceRoot;
  generateFiles(
    tree,
    path.join(__dirname, 'files'),
    `${projectSourceRoot}/${options.name}`,
    resolvedOptions
  );
  await formatFiles(tree);
}

export default componentStoryGenerator;
