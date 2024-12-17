import renderer from 'react-test-renderer';
import { ProviderForTest } from '../../setupTests';
import '../../mocks/use-router';
import Header from '../../../layout/header/Header';

describe('Header ', () => {
  // Snapshot test
  it('should render header', () => {
    const component = (
      <ProviderForTest>
        <Header />
      </ProviderForTest>
    );
    const tree = renderer.create(component).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
