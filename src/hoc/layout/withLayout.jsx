import React from "react";

const withLayout = (LayoutComponent, config) => {
  return function ComponentWithLayout(Component) {
    function render(props) {
      return (
        <LayoutComponent {...config} render={() => <Component {...props} />} />
      );
    }
    return render;
  };
};
export { withLayout };
export default withLayout;
