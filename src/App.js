import './App.css';
import { Header } from './components/header/header.component';
import { Footer } from './components/footer/footer.component';
import { Route, Switch } from 'react-router';

import CreateTest from './components/create-test/create-test.component';
import {HomePage} from './pages/homepage/homepage.component';
import QuestionBank from './pages/question-bank/question-bank.component';
import { TestReview } from './pages/test-review/test-review.component';
import { EditTest } from './components/edit-test/edit-test.component';
import CoursesPage from './pages/courses/courses.component';
import {CourseDetail} from './components/course-detail/course-detail.component';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path='/tests' component={QuestionBank} />
        <Route path="/tests/create" component={CreateTest} />
        <Route  path='/tests/edit/:id' component={EditTest} />
        <Route exact path='/course' component={CoursesPage} />
        <Route path="/course/detail" component={CourseDetail} />
        <Route exact path='/review' component={TestReview} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
