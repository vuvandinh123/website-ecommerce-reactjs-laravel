import PropTypes from 'prop-types';
import { useDropdown } from '../../hooks';

const Dropdown = ({ title, children }) => {
    const { dropdow, setDropdow, dropdowRef } = useDropdown(false);
    return (
        <div className='flex items-center relative gap-1' ref={dropdowRef} onClick={() => setDropdow(!dropdow)}>
            <span className='cursor-pointer'> {title}</span>
            <i className="fa-solid fa-chevron-down text-[9px] text-slate-500"></i>
            <div className={`scale-y-50 transition-all duration-500 z-10 ${dropdow && '!scale-100'}`}>
                {
                    dropdow && children
                }
            </div>
               
        </div>
    )
}
Dropdown.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node
}
export default Dropdown
