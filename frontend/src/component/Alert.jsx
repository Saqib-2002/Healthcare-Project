import React from "react";

const Alert = React.forwardRef(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    role="alert"
    className={className}
    {...props}
  >
    {children}
  </div>
));

Alert.displayName = "Alert";

export default Alert;