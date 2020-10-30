import './App.css';
import Home from './Components/Home/Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from './Components/About/About';
import Blogs from './Components/Blogs/Blogs';
import Contact from "./Components/Contact/Contact";
import Projects from "./Components/Projects/Projects";
import Resume from './Components/Resume/Resume';

function App() {
  return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          
         
          <Route path="/about" component={About}/>
            
        
          <Route path="/blogs" component={Blogs}/>
            
          
          <Route path="/contact" component={Contact}/>
           
        
          <Route path="/projects" component={Projects}/>
           
         
          <Route path="/resume" component={Resume}/>
          </Switch>
        </Router>
      
  );
}

export default App;
