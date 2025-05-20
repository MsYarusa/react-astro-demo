import { useEffect, useState } from "react";

const NOT_HYDRATED_MESSAGE = "Кнопка не интерактивна";
const HYDRATED_MESSAGE = "Счетчик:";

const BaseCounter = () => {
  const [count, setCount] = useState<number | undefined>();

  const [btnTitle, setBtnTitle] = useState<string>(NOT_HYDRATED_MESSAGE);

  useEffect(() => {
    setBtnTitle(HYDRATED_MESSAGE);
    setCount(0);
  }, []);

  const clickHandler = (): void => {
    if (!count && count !== 0) {
      return;
    }

    setCount(count + 1);
  };

  return (
    <button type="button" className="btn btn-secondary" onClick={clickHandler}>
      {`${btnTitle} ${count ? count : ""}`}
    </button>
  );
};

export default BaseCounter;
