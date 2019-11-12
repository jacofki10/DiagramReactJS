"use strict";
import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap';
import "./../css/style.scss";
import logoBlack from '../images/logoBlack.png';
import $ from 'jquery';
import jQuery from 'jquery';
window.$ = jQuery;

$(function () {
  var wH = $(window).height();
  var header = $('#header').innerHeight();
  var footer = $('#footer').innerHeight();
  $('.layout_height').css('min-height', wH - header - footer - 40 + 'px');
});

function Header() {
  return <header className="container-fluid bg-white">
    <div className="container">
      <img src={logoBlack} alt='Logo Diagram Lab' className='img mt-2  mt-md-5  mb-1  mb-md-5' />
    </div>
  </header>;
}
function MainQuestion() {
  return (
    <main id="mainQuestion" className="layout_height">
      <form name="ResultForm" className="container">
        <div id="question_area">
          <div id="q_no">Q1</div>
          <div id="question" className="m-4 mt-lg-5">周囲から「せっかち」だと言われることが多い</div>
          <div id="q_btn" className="mt-lg-5 mb-3 mb-lg-5 p-5">
            <button type="button" id="q_answer1" className="btn btn-success btn-lg m-2">はい</button>
            <button type="button" id="q_answer2" className="btn btn-secondary btn-lg m-2">どちらでもない</button>
            <button type="button" id="q_answer3" className="btn btn-primary btn-lg m-2">いいえ</button>
          </div>
        </div>
      </form>
      <div id="meter_area">診断終了まであと
        <span id="q_progress_bar">1</span>問
    </div>
    </main>
  )
}

function Form() {
  return <div id="question_area">
    <div id="q_no"></div>
    <div id="question" className="m-4 mt-lg-5"></div>
    <div id="q_btn" className="mt-lg-5 mb-3 mb-lg-5">
      <button type="button" id="q_answer1" className="btn btn-success btn-lg m-2">はい</button>
      <button type="button" id="q_answer2" className="btn btn-primary btn-lg m-2">どちらともいえない</button>
      <button type="button" id="q_answer3" className="btn btn-danger btn-lg m-2">いいえ</button>
    </div>
  </div>
}

function Meter() {
  return <div id="meter_area">
    <span id="q_progress_bar">1</span> / 20
    </div>
}

function Footer() {
  return <footer>
    <p>Copyright (C) Diagram Lab all rights reserved.</p>
  </footer>
}
function App() {
  return (
    <div className="container-fluid p-0">
      <Header />
      <MainQuestion />
      <Footer />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

