import propsToObject from '../util/propsToObject';

const components = ['Dialog', 'Menu', 'Popover', 'Snackbar'];

const props = ['onEnter', 'onEntered', 'onEntering', 'onExit', 'onExited', 'onExiting'];

/**
 * @param {import('jscodeshift').FileInfo} file
 * @param {import('jscodeshift').API} api
 */
export default function transformer(file, api) {
  const j = api.jscodeshift;
  const root = j(file.source);

  components.forEach((component) => {
    propsToObject({ j, root, componentName: component, propName: 'TransitionProps', props });
  });
  return root.toSource();
}
