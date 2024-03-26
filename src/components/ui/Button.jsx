import PropTypes from 'prop-types';

const Button = ({ text, bg, textSize, px, py }) => {
  return (
    <>
      <button
        className={`cursor-pointer rounded-lg ${bg ? bg : 'bg-primary'} text-white ${textSize ? textSize : 'text-[18px]'} font-semibold ${px ? px : 'px-7'} ${
          py ? py : 'py-[18px]'
        }`}>
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
};

export default Button;
