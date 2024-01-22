

import PropTypes from "prop-types"
const SectionTitle = ({mainTitle, subTitle}) => {
    
    return (
        <div className="text-center">
            <p className="text-[#D99904] text-xl italic">{subTitle}</p>
            <div className="flex justify-center my-5">
            <h1 className="text-[#151515] text-[40px] border-y-4 border-[#E8E8E8] w-96 py-4">{mainTitle}</h1>
            </div>
        </div>
    );
};

SectionTitle.propTypes = {
  children: PropTypes.any,
  mainTitle: PropTypes.any,
  subTitle: PropTypes.any
}

export default SectionTitle;