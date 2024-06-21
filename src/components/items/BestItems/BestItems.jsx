import './BestItems.css';
import { useEffect, useState } from 'react';
import Item from '../Item/Item';
import { getProducts } from '../../../pages/api/Items';

const getPageSize = () => {
  const width = window.innerWidth;
  if (width < 768) {
    return 1;
  } else if (width < 1280) {
    return 2;
  } else {
    return 4;
  }
};

function BestItems() {
  // 상품 목록
  const [itemList, setItemList] = useState([]);
  // 쿼리
  const [order, setOrder] = useState('favorite');
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(4);
  const [keyword, setKeyword] = useState('');

  const fetchItemList = async ({ order, page, pageSize, keyword }) => {
    let products = await getProducts({ order, page, pageSize, keyword });
    setItemList(products.list);
  };

  useEffect(() => {
    const handleResize = () => {
      setPageSize(getPageSize());
    };

    window.addEventListener('resize', handleResize);
    fetchItemList({ order, page, pageSize, keyword });

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [order, page, pageSize, keyword]);

  return (
    <>
      <div className="container-best-items">
        <div className="title-best-items">베스트 상품</div>

        <div className="list-best-items">
          {itemList?.map((item) => (
            <Item item={item} key={`best-item-${item.id}`} />
          ))}
        </div>
      </div>
    </>
  );
}

export default BestItems;
