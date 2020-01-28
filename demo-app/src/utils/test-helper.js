import { render } from 'enzyme';

export const snapshotTest = (reactElement, description) => {
  describe(description, () => {
    test(description + ' Test', () => {
      const html = render(reactElement).html()
      const component = JSON.stringify(html);
      expect(component).toMatchSnapshot();
    });
  });
};