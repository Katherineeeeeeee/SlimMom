import { useDispatch } from 'react-redux';

const DiaryProductsListItem = () => {
  const dispatch = useDispatch();

  function removeProduct(id) {
    // dispatch(removeProductOperation(id));
  }

  return (
    <>
      {DiaryProductsListItem.map(({ id, title, weight, kcal }) => {
        return (
          <li key={id}>
            <p>{title}</p>
            <p>{weight}</p>
            <p>{kcal}</p>
            <button
              className="btnRemove"
              type="button"
              onClick={() => {
                removeProduct && removeProduct(id);
              }}
            ></button>
          </li>
        );
      })}
    </>
  );
};

export default DiaryProductsListItem;
