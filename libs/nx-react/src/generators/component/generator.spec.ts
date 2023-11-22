import { createTreeWithEmptyWorkspace } from '@nx/devkit/testing';
import { Tree } from '@nx/devkit';

import { componentGenerator } from './generator';
import { ComponentGeneratorSchema } from './schema';

describe('component generator', () => {
  let tree: Tree;
  const options: ComponentGeneratorSchema = {
    name: 'test',
    directory: 'components',
  };

  beforeEach(() => {
    tree = createTreeWithEmptyWorkspace();
  });

  it('should generate files', async () => {
    await componentGenerator(tree, options);

    expect(tree.exists('components/test/index.tsx')).toBeTruthy();
    expect(tree.exists('components/test/style/index.css')).toBeTruthy();
    expect(tree.exists('components/test/style/index.ts')).toBeTruthy();
  });
});
