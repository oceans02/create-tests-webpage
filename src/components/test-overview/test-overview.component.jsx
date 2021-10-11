import  TestItem  from './test-item/test-item.component';
import './test-overview.styles.scss';

export const TestOverview =({questionList}) => {
    return(
        <div className="test-overview">
            {questionList.map((eachQuestion, id) => (
                <TestItem key={id} {...eachQuestion} />))}
        </div>

    )
}