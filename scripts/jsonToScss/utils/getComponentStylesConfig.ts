import StyleDictionaryPackage from 'style-dictionary';

import { FormatName, PLATFORM, SCSS_BUILD_DIRECTORY, TOKENS_BUILD_DIRECTORY } from '../../constants';
import { FilterName, TransformName } from '../constants';

export function getComponentStylesConfig(componentFile: string) {
  const componentName = componentFile.split('.')[0];
  const componentPath = `${TOKENS_BUILD_DIRECTORY}components/${componentFile}`;

  return {
    source: [componentPath],
    include: [`${TOKENS_BUILD_DIRECTORY}themes/tokens-base.json`, `${TOKENS_BUILD_DIRECTORY}themes/tokens-brand.json`],
    platforms: {
      [PLATFORM]: {
        transforms: [...StyleDictionaryPackage.transformGroup.scss, TransformName.Components],
        buildPath: `${SCSS_BUILD_DIRECTORY}components/`,
        files: [
          {
            destination: `styles-${componentName}.scss`,
            format: FormatName.SCSSComponent,
            filter: FilterName.SourceTokens,
          },
        ],
      },
    },
  };
}
