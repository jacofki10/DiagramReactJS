import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap';
import "./../css/style.scss";
import logoBlack from '../images/logoBlack.png';

function Header() {
  return <img src={logoBlack} alt='Logo Diagram Lab' className='img-fluid mt-2  mt-md-5  mb-1  mb-md-5' />;
}

function Form() {
  return <form name="ResultForm" className="mt-5">
      <div id="question_area">
        <div id="q_no"></div>
        <div id="question" className="m-4 mt-lg-5"></div>
        <div id="q_btn" className="mt-lg-5 mb-3 mb-lg-5">
          <button type="button" id="q_answer1" className="btn btn-success btn-lg m-2">はい</button>
          <button type="button" id="q_answer2" className="btn btn-primary btn-lg m-2">どちらともいえない</button>
          <button type="button" id="q_answer3" className="btn btn-danger btn-lg m-2">いいえ</button>
        </div>
      </div>
    </form>
}

function Meter() {
  return <div id="meter_area">
      <span id="q_progress_bar">1</span>/20
    </div>
}

function Footer() {
  return <footer>
    <p>Copyright (C) Diagram Lab all rights reserved.</p>
  </footer>
}
function App() {
  return (
    <div className="container">
      <Header />
      <Form />
      <Meter />
      <Footer />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
