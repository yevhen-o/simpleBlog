import "./Footer.scss";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__content">
        <p className="footer__copyright">
          &copy; {currentYear} My Blog. All rights reserved.
        </p>
        <p className="footer__text">Made with ❤️ by Yevhen.</p>
      </div>
    </footer>
  );
};
