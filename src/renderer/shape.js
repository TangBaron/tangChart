import { applyAttributes, createSVGElement, mount } from './utils';

// 这里不要忘记还需要一个context上下文参数来挂载我们形状元素
export const shape = (type, context, attributes) => {
  const { group } = context;
  const el = createSVGElement(type);
  applyAttributes(el, attributes);

  mount(group, el);
  return el; // 最后要返回元素
};

// 绘制line
export const line = (context, attributes) => shape('line', context, attributes);

// 绘制矩形
// 这里要注意rect不支持width和height是负数, 对于width和height为负数的情况特殊处理
export const rect = (context, attributes) => {
  const {
    width, height, x, y,
  } = attributes;

  return shape('rect', context, {
    ...attributes,
    width: Math.abs(width),
    height: Math.abs(height),
    x: width > 0 ? x : x + width,
    y: height > 0 ? y : y + height,
  });
};

// 绘制圆形
export const circle = (context, attributes) => shape('circle', context, attributes);

// 绘制文字
// 注意对于文字来说，要展示内容要放在标签内部，而不是作为标签属性
// <text>context</text>
export const text = (context, attributes) => {
  // 这种解构语法我第一次见，res也是一个对象，包含了剩余元素的一个对象
  const { text, ...res } = attributes;
  const textElement = shape('text', context, res);
  // 以为这个是Text类型的文本节点，结果不是，这个通过textContext解决
  textElement.textContent = text;
  return textElement;
};

// path类型
// 对path类型简单介绍一下, svg的path可以类比为canvas的绘制路径那一节的内容，
// 详细的介绍可见https://developer.mozilla.org/zh-CN/docs/Web/SVG/Tutorial/Paths, 比较特殊的C三次贝塞尔，S两次贝塞尔, A弧线
export const path = (context, attributes) => {
  // d是表示path的二维数组
  const { d } = attributes;
  return shape('path', context, { ...attributes, d: d.flat().join(' ') });
};

// 除SVG本来支持的一个图形外，我们额外支持一个图形圆环
export const ring = (context, attributes) => {
  // r1是内圆半径，r2是外圆半径
  const {
    cx, cy, r1, r2, ...styles
  } = attributes;
  const { stroke, strokeWidth, fill } = styles;
  const defaultStrokeWidth = 1;
  // 画内部的圆(一定要搞明白svg的圆的r会包括边框吗，边框是以线为中心向左右两边延展画的)
  const innerStroke = circle(context, {
    // 填充透明，只需要边界stroke来模拟边框
    fill: 'transparent',
    stroke: stroke || fill,
    strokeWidth,
    cx,
    cy,
    r: r1,
  });
  const ring = circle(context, {
    ...styles,
    // 填充透明，只需要边界stroke来模拟边框
    fill: 'transparent',
    stroke: fill,
    strokeWidth: r2 - r1 - (strokeWidth || defaultStrokeWidth),
    cx,
    cy,
    r: (r1 + r2) / 2,
  });
  const outerStroke = circle(context, {
    fill: 'transparent',
    stroke: stroke || fill,
    strokeWidth,
    cx,
    cy,
    r: r2,
  });
  return [innerStroke, ring, outerStroke];
};
