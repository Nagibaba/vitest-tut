import { fireEvent, render, screen } from "@testing-library/react";
import { expect, test, describe, vi } from "vitest";
import { Button } from "../Button";
import { useCustom } from "../hook";

const handleClick = vi.fn();
vi.mock("../hook", () => ({
  useCustom: vi.fn(() => ({ count: 0, handleClick })),
}));

vi.mock("../../common/utils", () => ({ sum: () => 11 }));

describe("Button component", () => {
  describe("matches snapshot", () => {
    test("with children", () => {
      const component = render(<Button>Click</Button>);
      expect(component).toMatchSnapshot();
    });

    test("without children", () => {
      const component = render(<Button />);
      expect(component).toMatchSnapshot();
    });
  });
  test("handles click prop", () => {
    const onClick = vi.fn();
    const { getByTestId } = render(<Button onClick={onClick}>Click</Button>);

    const btn = getByTestId("buttonID");
    fireEvent.click(btn);
    expect(onClick).toHaveBeenCalled();
  });

  test("shows text as children", () => {
    render(<Button>Click</Button>);

    const textComponent = screen.getByText("Click");

    expect(textComponent).toBeDefined();
  });

  test("doesnt show any text", () => {
    const str = "soz";
    render(<Button>Click</Button>);

    const textComponent = screen.queryByText(str);

    expect(textComponent).toBeNull();
  });

  test("handles click from hook", () => {
    const { getByTestId } = render(<Button>Click</Button>);

    const btn = getByTestId("buttonID");
    fireEvent.click(btn);
    expect(handleClick).toHaveBeenCalled();
  });

  test("with 33", () => {
    useCustom.mockReturnValueOnce({ count: 33, handleClick });
    const component = render(<Button>Click</Button>);
    const btn = component.queryByTestId("buttonID");
    expect(btn).toBeNull();
  });
});
