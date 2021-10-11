import { CustomButton } from '../../custom-button/custom-button.component';
import './test-item.styles.scss';

import { withRouter } from 'react-router';

const TestItem = ({question,id, mId, history}) => {
    return(
    <div className="test-item">
        <div>
            {question.length > 10 ? `${question.slice(0, 10)}...` : ''}  
        </div>
        <div>{mId.length > 4 ? `${mId.slice(0,10)}..` : ''}</div>
        <div className="small-edit-button">
            <CustomButton 
                onClick={() => {history.push(`/tests/edit/${id}`)}}
            >Edit</CustomButton>
        </div>
    </div>
)}

export default withRouter(TestItem);