import PropTypes from 'prop-types';

const Button = ({ text, bg, textSize, textStyle, px, py, border, clickHandler, hover }) => {
  return (
    <>
      <button
        onClick={clickHandler && clickHandler}
        className={`cursor-pointer rounded-lg ${bg ? bg : 'bg-primary'} ${textSize ? textSize : 'text-[18px]'} ${px ? px : 'px-7'} ${py ? py : 'py-[18px]'} font-workSans ${
          border && border
        } ${textStyle ? textStyle : 'text-white font-semibold'} ${hover && hover} transition ease-in-out duration-300`}>
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
  hover: PropTypes.string,
};

export default Button;
