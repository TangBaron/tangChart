export function createDiv() {
  const div = document.createElement('div');
  document.body.appendChild(div);
  return div;
}

export function mount(parent, child) {
  return parent && parent.appendChild(child);
}

export function getAttributes(node, attributes) {
  // 通过node.getAttribute()获取属性的返回值是一个字符串
  return attributes.reduce((pre, cur) => {
    pre[cur] = node.getAttribute(cur);
    return pre;
  }, {});
}
