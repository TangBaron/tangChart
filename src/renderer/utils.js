// 创建svg元素
export const createSVGElement = (type) => document.createElementNS('http://www.w3.org/2000/svg', type);

// 将child节点挂在parent节点上
export const mount = (parent, child) => parent && parent.appendChild(child);

// 添加属性到element上, attributes是一个对象object类型
export const applyAttributes = (element, attributes) => {
  for (const [key, value] of Object.entries(attributes)) {
    // 正则匹配将小驼峰改为key-case形式
    const kebabCaseKey = key.replace(/[A-Z]/g, (d) => `-${d.toLocaleLowerCase()}`);
    element.setAttribute(kebabCaseKey, value);
  }
};

// 添加transform属性到g元素上
export const applyTransform = (element, transform) => {
  const oldTransform = element.getAttribute('transform') || '';
  const prefix = oldTransform ? `${oldTransform} ` : '';
  element.setAttribute('transform', `${prefix}${transform}`);
};
