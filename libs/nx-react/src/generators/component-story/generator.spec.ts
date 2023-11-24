import { createTreeWithEmptyWorkspace } from '@nx/devkit/testing';
import { Tree, addProjectConfiguration } from '@nx/devkit';

import { componentStoryGenerator } from './generator';
import { ComponentStoryGeneratorSchema } from './schema';

describe('component-story generator', () => {
  let tree: Tree;
  const projectName = 'design-system';
  const sourceRoot = `packages/${projectName}/components`;
  const options: ComponentStoryGeneratorSchema = {
    project: projectName,
    name: 'component',
  };

  beforeEach(() => {
    tree = createTreeWithEmptyWorkspace();
    addProjectConfiguration(tree, projectName, {
      root: `packages/${projectName}`,
      sourceRoot,
    });
  });

  it('should generate files', async () => {
    await componentStoryGenerator(tree, options);

    expect(
      tree.exists(`${sourceRoot}/component/__demo__/index.mdx`)
    ).toBeTruthy();
    expect(
      tree.exists(`${sourceRoot}/component/__demo__/index.stories.tsx`)
    ).toBeTruthy();
    expect(
      tree.exists(`${sourceRoot}/component/__demo__/props/en-US.md`)
    ).toBeTruthy();
    expect(
      tree.exists(`${sourceRoot}/component/__demo__/props/zh-CN.md`)
    ).toBeTruthy();
  });
});
