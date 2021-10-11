import './course-detail.styles.scss';

export const CourseDetail = ({questions}) => {
    console.log(questions)
    return(
        <div className="course-detail">
            <h3>Course Detail</h3>
            <p>List of questions displayed here</p>
        </div>
    )
};