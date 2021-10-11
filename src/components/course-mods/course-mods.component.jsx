import './course-mods.styles.scss';
import {CourseMod} from './course-mod/course-mod.component';

const CourseMods = ({courseModules}) => {
    return(
    <div className="course-mods" >
        <h2 className="title">Course Modules</h2>
        <div className="courses">
        {courseModules.map((eachModule) => (
                <CourseMod key={eachModule.id} eachCourse={eachModule} />
        ))}
        </div>
    </div>
)}

export default CourseMods;