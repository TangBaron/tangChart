import { applyTransform, createSVGElement, mount } from './utils';

/**
 *
 * @param {希望变换的种类，有缩放scale, 平移translate, 旋转rotate三种} type
 * @param {node和group的上下文} context
 * @param  {transform的相关参数} params
 */
export const transform = (type, context, ...params) => {
  const { group } = context;
  applyTransform(group, `${type}(${params.join(', ')})`);
};

// 实现具体的变换
// 平移
export const translate = (context, tx, ty) => {
  transform('translate', context, tx, ty);
};

// 旋转, theta是0-360的一个角度, 绕x,y点顺时针旋转
export const rotate = (context, theta) => {
  transform('rotate', context, theta);
};

// 缩放, x比例缩放，y比例缩放
export const scale = (context, sx, sy) => {
  transform('scale', context, sx, sy);
};

// 储存当前的上下文元素
export const save = (context) => {
  const { group } = context;
  const newGroup = createSVGElement('g');
  mount(group, newGroup);
  context.group = newGroup;
};

// 弹出
export const restore = (context) => {
  const { group } = context;
  const { parentNode } = group;
  context.group = parentNode;
};
