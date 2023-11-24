import {
  formatFiles,
  generateFiles,
  names,
  Tree,
  getProjects,
  // applyChangesToString,
  // ensurePackage,
} from '@nx/devkit';
import * as path from 'path';
import { ComponentGeneratorSchema } from './schema';

export async function componentGenerator(
  tree: Tree,
  options: ComponentGeneratorSchema
) {
  const { name, project } = options;
  const className = names(name).className;
  const resolvedOptions = {
    ...options,
    className,
  };
  const projectSourceRoot = getProjects(tree).get(project).sourceRoot;

  generateFiles(
    tree,
    path.join(__dirname, 'files'),
    `${projectSourceRoot}/${name}`,
    resolvedOptions
  );
  await formatFiles(tree);

  if (options.export) {
    // const tsModule = ensurePackage<typeof import('typescript')>(
    //   'typescript',
    //   '~5.2.2'
    // );
    const indexFilePath = `${projectSourceRoot}/index.ts`;
    const indexSource = tree.read(indexFilePath, 'utf-8');
    if (indexSource !== null) {
      const componentExports = `export { default as ${className} } from './${name}';\nexport type { ${className}Props } from './${name}';`;

      // const indexSourceFile = tsModule.createSourceFile(
      //   indexFilePath,
      //   indexSource,
      //   tsModule.ScriptTarget.Latest,
      //   true
      // );
      // console.log('[&] indexFilePath: ', indexFilePath);
      // console.log('[&] indexSource: ', indexSource);
      // console.log('[&] end line: ', indexSourceFile.endOfFileToken);
      // applyChangesToString(indexSource, [
      //   {}
      // ])
      tree.write(indexFilePath, `${indexSource}\n${componentExports}\n`);
    }
  }
}

export default componentGenerator;
