import { useCustom } from "./hook";
import { sum } from "../common/utils";
export const Button = (props) => {
  const { count, handleClick } = useCustom();
  const ANY_NUM = 10;

  if (count === 33) return null;
  return (
    <button
      onClick={handleClick}
      data-testid="buttonID"
      // eslint-disable-next-line react/no-children-prop
      children={sum(count, ANY_NUM)}
      {...props}
    />
  );
};
