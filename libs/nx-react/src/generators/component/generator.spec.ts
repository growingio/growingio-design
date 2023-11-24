import { createTreeWithEmptyWorkspace } from '@nx/devkit/testing';
import { Tree, addProjectConfiguration } from '@nx/devkit';

import { componentGenerator } from './generator';
import { ComponentGeneratorSchema } from './schema';

describe('component generator', () => {
  let tree: Tree;
  const projectName = 'design-system';
  const componentName = 'component';
  const sourceRoot = `packages/${projectName}/components`;
  const options: ComponentGeneratorSchema = {
    project: projectName,
    name: componentName,
  };

  beforeEach(() => {
    tree = createTreeWithEmptyWorkspace();
    addProjectConfiguration(tree, projectName, {
      root: `packages/${projectName}`,
      sourceRoot,
    });
  });

  it('should generate files', async () => {
    await componentGenerator(tree, options);

    expect(
      tree.exists(`${sourceRoot}/${componentName}/index.tsx`)
    ).toBeTruthy();
    expect(
      tree.exists(`${sourceRoot}/${componentName}/style/index.css`)
    ).toBeTruthy();
    expect(
      tree.exists(`${sourceRoot}/${componentName}/style/index.ts`)
    ).toBeTruthy();
  });
});
