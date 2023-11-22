import {
  // addProjectConfiguration,
  formatFiles,
  generateFiles,
  names,
  Tree,
} from '@nx/devkit';
import * as path from 'path';
import { ComponentGeneratorSchema } from './schema';

export async function componentGenerator(
  tree: Tree,
  options: ComponentGeneratorSchema
) {
  const resolvedOptions = {
    ...options,
    name: names(options.name).className,
  };
  const projectRoot = `${options.directory}/${options.name}`;

  generateFiles(
    tree,
    path.join(__dirname, 'files'),
    projectRoot,
    resolvedOptions
  );
  await formatFiles(tree);
}

export default componentGenerator;
