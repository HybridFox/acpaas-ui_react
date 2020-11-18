import React from 'react';

type Props = {
  style?: object,
  /** aria-label, defaults to 'Ga naar boven' */
  ariaLabel?: string,
  children?: any,
  /** Qa id */
  qa?: string,
};
const Footer = (props: Props) => {
  const { style, children, qa, ariaLabel = "Ga naar boven" } = props;

  const scrollToTop = function() {
    window.scrollTo(0, 0);
  }

  return (
    <footer className="o-footer" style={style} data-qa={qa}>
      <span className="o-footer__label">{children || '© stad Antwerpen'}</span>
      <a onClick={() => scrollToTop()} href="#" className="o-footer__button a-button a-button--secondary has-icon" aria-label={ariaLabel}>
        <span className="fa fa-arrow-up"></span>
      </a>
    </footer>
  )
}

export default Footer;
