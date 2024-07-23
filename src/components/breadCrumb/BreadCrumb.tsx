import { ArrowRight2 } from "iconsax-react";
import { Link } from "react-router-dom";
const BreadCrumb: React.FC = () => {
    
    return (
        <div className="py-[26px] pl-[63px]">
        <div className="flex gap-[14px]">
        <div className="flex gap-[16px]">
            <Link className="text-[16px] font-medium text-breadCrumClr cursor-pointer" to={"/"}>Home</Link>
            <div><ArrowRight2/></div>
        </div>
        <div className="flex gap-[16px]">
            <div className="text-[16px] font-medium text-breadCrumClr cursor-pointer">All Category</div>
            <div><ArrowRight2/></div>
        </div>
        </div>
        </div>
    );
};
export default BreadCrumb;