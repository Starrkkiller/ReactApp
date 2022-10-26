export const Button = ({ children, type, className, prefix, postfix }) => (
  <button type={type} className={className}>
    {prefix}
    {children}
    {postfix}
  </button>
);
