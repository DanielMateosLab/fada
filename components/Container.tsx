interface Props {
  children: React.ReactNode;
}
const Container: React.FC<Props> = ({ children }) => (
  <div
    css={{
      padding: "1rem",
      margin: "0 auto",
      maxWidth: "960px",
    }}
  >
    {children}
  </div>
);

export default Container;
