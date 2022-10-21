import { createSVGElement, mount } from './utils';

export const createContext = (width, height) => {
  // 创建画布
  const svg = createSVGElement('svg');
  svg.setAttribute('width', width);
  svg.setAttribute('height', height);
  svg.setAttribute('viewBox', `0 0 ${width} ${height}`);

  // 挂载节点g
  const g = createSVGElement('g');
  mount(svg, g);

  // 返回画布和挂载节点
  return {
    node: svg,
    group: g,
  };
};
