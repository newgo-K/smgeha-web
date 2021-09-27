import Header from 'components/common/Header';
import {
  productsMainMenuSelect,
  productsMainMenuSelectAsync,
} from 'lib/modules/products';
import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';

const titles: Array<string> = [
  '업체소개',
  '냉장고',
  '에어컨',
  '세탁기',
  'TV',
  '기타제품',
  '자주묻는 질문',
];

function HeaderContainer() {
  const dispatch = useDispatch();

  const onClick = useCallback(
    (id: number) => {
      dispatch(productsMainMenuSelectAsync.request({ id }));
      dispatch(productsMainMenuSelect(id - 1));
    },
    [dispatch],
  );

  return (
    <div>
      <Header titles={titles} onClick={onClick} />
    </div>
  );
}

export default HeaderContainer;
