import { createContext } from './context';
import {
  line, circle, text, rect, path, ring,
} from './shape';
import {
  scale, rotate, translate, restore, save,
} from './transform';

export const createRenderer = (width, height) => {
  const context = createContext(width, height);
  return {
    line: (options) => line(context, options),
    circle: (options) => circle(context, options),
    rect: (options) => rect(context, options),
    text: (options) => text(context, options),
    path: (options) => path(context, options),
    ring: (options) => ring(context, options),
    restore: () => restore(context),
    save: () => save(context),
    scale: (...args) => scale(context, ...args),
    rotate: (...args) => rotate(context, ...args),
    translate: (...args) => translate(context, ...args),
    node: () => context.node,
    group: () => context.group,
  };
};
