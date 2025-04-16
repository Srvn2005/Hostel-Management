const Layout = ({ children }) => {
    return (
      <div className="auth-wrapper">
        <div className="auth-container">
          {children}
        </div>
      </div>
    );
  };
  
  export default Layout;
  