import './test-detail.styles.scss'

export const TestDetail = ({test}) => (
    <div className="test-detail">
        <div>Test Question: {test.question} </div>
        <div>Answer Options: 
            {test.answers.map((eachAns) => (
                <li key={eachAns.id}>{eachAns}</li>
            ))}
        </div>
        <div>Correct Answer: {test.correctAns}</div>
        <div>Module Code: {test.mId} </div>
    </div>
)