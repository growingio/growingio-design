import {
  formatFiles,
  generateFiles,
  names,
  Tree,
  getProjects,
} from '@nx/devkit';
import * as path from 'path';
import { ComponentGeneratorSchema } from './schema';

export async function componentGenerator(
  tree: Tree,
  options: ComponentGeneratorSchema,
) {
  const { name, project, override } = options;
  const className = names(name).className;
  const resolvedOptions = {
    ...options,
    className,
  };
  const projectSourceRoot = getProjects(tree).get(project).sourceRoot;

  if (override) {
    generateFiles(
      tree,
      path.join(__dirname, 'files/override'),
      `${projectSourceRoot}/${name}`,
      resolvedOptions,
    );
  } else {
    generateFiles(
      tree,
      path.join(__dirname, 'files/default'),
      `${projectSourceRoot}/${name}`,
      resolvedOptions,
    );
  }

  await formatFiles(tree);

  if (options.export) {
    const indexFilePath = `${projectSourceRoot}/index.ts`;
    const indexSource = tree.read(indexFilePath, 'utf-8');
    if (indexSource !== null) {
      const componentExports = `export { default as ${className} } from './${name}';\nexport type { ${className}Props } from './${name}';`;
      tree.write(indexFilePath, `${indexSource}\n${componentExports}\n`);
    }
  }
}

export default componentGenerator;
