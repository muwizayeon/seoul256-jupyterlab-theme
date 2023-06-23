import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { IThemeManager } from '@jupyterlab/apputils';

/**
 * Initialization data for the seoul256-jupyterlab-theme extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'seoul256-jupyterlab-theme:plugin',
  description: 'A JupyterLab theme with Seoul 256 color scheme',
  autoStart: true,
  requires: [IThemeManager],
  activate: (app: JupyterFrontEnd, manager: IThemeManager) => {
    console.log('JupyterLab extension seoul256-jupyterlab-theme is activated!');
    const style = 'seoul256-jupyterlab-theme/index.css';

    manager.register({
      name: 'seoul256-jupyterlab-theme',
      isLight: true,
      load: () => manager.loadCSS(style),
      unload: () => Promise.resolve(undefined)
    });
  }
};

export default plugin;
