import { fireEvent, render, screen } from '@testing-library/react';
import Product from './components/Product';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

describe('렌더테스트', () => {
  test('렌더테스트', () => {
    //given
    const p = {
      name: '메타몽',
      price: 10000,
      img: 'url',
    };

    //when
    render(<Product p={p}></Product>);

    //then
    expect(screen.getByText(p.name)).toBeInTheDocument();
    expect(screen.getByText(p.price)).toBeInTheDocument();
    expect(screen.getByRole('img')).toHaveAttribute('src', p.img);
    expect(screen.getByRole('button')).toHaveTextContent('장바구니 담기');
  });
});

describe('렌더 테스트', () => {
  test('렌더', () => {});
});

const mockNavigate = jest.fn();
const mockDispatch = jest.fn();

jest.mock('react-router-dom', () => ({
  useNavigate: () => mockNavigate,
  useDispatch: () => mockDispatch,
}));

describe('장바구니 담기 버튼 클릭하면 장바구니 페이지로 이동', () => {
  test('장바구니 담기 버튼 클릭하면 장바구니 페이지로 이동', () => {
    //given
    const p = {
      name: '메타몽',
      price: 10000,
      img: 'url',
    };

    //when
    render(<Product p={p}></Product>);

    const addCartButton = screen.getByRole('button');

    fireEvent.click(addCartButton);

    expect(mockNavigate).toBeCalledWith('/cart');
  });

  test('장바구니 담기 버튼 클릭하면 상품 추가 요청', () => {
    //given
    const p = {
      name: '메타몽',
      price: 10000,
      img: 'url',
    };

    //when
    render(<Product p={p}></Product>);

    const addCartButton = screen.getByRole('button');

    fireEvent.click(addCartButton);

    // expect(mockDispatch).toBeCalledWith({
    //   type: 'ADD_CART',
    //   payload: p,
    // });
  });

  test('reducer', () => {
    //when
    //ADD_PRODUCT -> state
    //then
    // [product]
  });
});
