import { expect, test, describe, vi } from "vitest";
import { Home } from "../Home";
import {render, screen} from '@testing-library/react'

describe("Home component", () => {
    test("matches snapshot", () => {
      const component = render(<Home />)
  
      expect(component).toMatchSnapshot();
    });
  });
  