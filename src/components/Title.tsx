interface TitleProps {
  children: React.ReactNode;
}

export const Title: React.FC<TitleProps> = ({ children }) => {
  return <h1 className="text-2xl font-bold">{children}</h1>;
};
