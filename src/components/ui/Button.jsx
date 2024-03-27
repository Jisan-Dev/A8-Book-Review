import PropTypes from 'prop-types';

const Button = ({ text, bg, textSize, textStyle, px, py, border, clickHandler }) => {
  return (
    <>
      <button
        onClick={clickHandler && clickHandler}
        className={`cursor-pointer rounded-lg ${bg ? bg : 'bg-primary'} ${textSize ? textSize : 'text-[18px]'} ${px ? px : 'px-7'} ${py ? py : 'py-[18px]'} font-workSans ${
          border && border
        } ${textStyle ? textStyle : 'text-white font-semibold'} `}>
        {text}
      </button>
    </>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  bg: PropTypes.string,
  textSize: PropTypes.string,
  px: PropTypes.string,
  py: PropTypes.string,
  border: PropTypes.string,
  textStyle: PropTypes.string,
  clickHandler: PropTypes.func,
};

export default Button;
