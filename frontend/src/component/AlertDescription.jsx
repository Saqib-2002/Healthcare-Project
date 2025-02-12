import React from "react";

const AlertDescription = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={`text-sm leading-relaxed ${className}`}
    {...props}
  />
));

AlertDescription.displayName = "AlertDescription";

export default AlertDescription;