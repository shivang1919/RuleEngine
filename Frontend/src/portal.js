import { HashRouter, Routes, Route } from "react-router-dom";
import RuleEvaluate from "./RuleEvaluate";
import Header from "./Header";


const Portal = () => {
  return (
    <HashRouter>
      <Header />
      <Routes>
       <Route exact path="/" element={<RuleEvaluate />} />
       
      </Routes>
    </HashRouter>
  );
};

export default Portal;
