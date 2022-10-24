export const BackGround = ({ children }: any) => {
  return (
    <>
      <div className="bg"></div>
      <div className="bg bg2"></div>
      <div className="bg bg3"></div>
      <div className="content">{children}</div>
    </>
  );
};
