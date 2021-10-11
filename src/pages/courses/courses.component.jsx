import React from 'react';
import  CourseMods  from '../../components/course-mods/course-mods.component';

class CoursesPage extends React.Component{
    constructor(){
        super();

        this.state={
            modules:[
                {id:20, mId:'Mod-01',name:"English Language Module I", questions:['test-question-1', 'test-question-1']},
                {id:21, mId:'Mod-02',name:"English Lang Module II", questions:['test-question-a', 'test-question-b']},
                {id:22, mId:'Mod-03',name:"English Lang Module III", questions:['test-question-100', 'test-question-1000']}
            ]
        }
    }

    render(){
        return(
            <>
            <CourseMods 
                courseModules={this.state.modules} 
                showHidden={this.state.showHidden}
                handleHide= {this.handleHidden} />
            </>
        )
    }
}

export default CoursesPage;