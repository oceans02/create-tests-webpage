import './course-mod.styles.scss';
import {Link} from 'react-router-dom';
import { CustomButton } from '../../custom-button/custom-button.component';

export const CourseMod = ({eachCourse}) => {
    return(
        <div className="course-mod">
                <div className="colored-span"></div>
                <div className="container">
                    <h4 className="mod-id">{eachCourse.mId}</h4>
                    <div className="mod-title">{eachCourse.name}</div>
                    <div className="course-detail">
                        <Link style={{color:"black"}} to="/course/detail">
                            <CustomButton >Details</CustomButton>
                        </Link></div>
                </div>
        </div>
    )}

    export default CourseMod;