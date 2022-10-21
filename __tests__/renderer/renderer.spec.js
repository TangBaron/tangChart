import { createRenderer } from '../../src/renderer/renderer';
import { createDiv, mount } from '../utils';

describe('createRenderer', () => {
  test('createContext(width, height) returns expected context', () => {
    const renderer = createRenderer(600, 400);
    const node = renderer.node();
    const group = renderer.group();

    expect(node.nodeName.toLowerCase()).toBe('svg');
    expect(node.getAttribute('width')).toBe('600');
    expect(node.getAttribute('height')).toBe('400');
    expect(node.getAttribute('viewBox')).toBe('0 0 600 400');

    expect(group.nodeName.toLowerCase()).toBe('g');
    expect(group.parentNode).toBe(node);

    mount(createDiv(), node);
  });
});
