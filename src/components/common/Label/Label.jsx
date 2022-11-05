export const Label = ({
  children,
  control,
  text,
  titleText,
  postfix,
  ...props
}) => (
  <label>
    {titleText}
    {control}
    {children}
    {postfix}
  </label>
);
