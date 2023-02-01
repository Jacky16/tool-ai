import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../redux/store";

interface RenderWrapperProps {
  children: JSX.Element | JSX.Element[];
}

const RenderWrapper = ({ children }: RenderWrapperProps) => {
  return (
    <BrowserRouter>
      <Provider store={store}>{children}</Provider>
    </BrowserRouter>
  );
};

export default RenderWrapper;
