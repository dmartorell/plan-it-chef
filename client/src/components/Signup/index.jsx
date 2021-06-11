/* eslint-disable no-underscore-dangle */
import { React } from 'react';
import Header from '../Header';
import Navigator from '../Navigator';
import './style.scss';

const Signup = () => (
  <>
    <Header />
    <main className="white-canvas">
      <section className="main-container">
        <div className="page-head">
          <img className="page-head__icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAC10lEQVRoge2ZwUsUURzHv7/JLXSF2Or9HoEdDG+KN9FEuxkRSVC3III8FiH9AaUEXWutY4JUQpcCA8mbgSUdIiTZulidhH1v2Yu4lWHz67CzsYhrb8bdxmA+p/fezO/7+31neDPwe0BCQsJ/DUUJUkoNALhGRIMANIB9EfP/ApAXkQUiemCtfRNWIKyBJma+B+Bq2EROxRDdN8bcALDpGhPqyTHzBBpUfEBva2trplQqvXQNcH4DSqkBIlqoWprxff+21no5l8v9DFVmQGdn535jTDcR3SSi4WBZAAxYaxejaNZEKfWUmYWZRSn1oq7iAJj5eUWfmadd4zzXG4MNCwAQkfGwBf4N3/fvVE1PusY5G0D5a1MeaL0cIs5NXOsPVdOjrnHOe4CZpTK21kb6/DYiR5g3sCdJDMRNYiBuEgNxkxiIm8RA3CQG4iYxEDeJgbhJDNSCmYeY+Qszf2bmU43K0wgDTcw8BmAOQDuA4wDmtNbZjo6OA/VOVlcDWut2Zl4AcGuLNonI9bW1tXda66565qybAaXUFRFZBtBXWSOiWSKarbqtS0Teaq1H6pV31wYymcxBZp4mokkA6WD5BxGNGmOGjTFnAVwG8C24lhaRh8z8rK2t7dBu8+/KgNa6L5VKvQdwsbImIp9E5IQxJotynxPW2kee5/UAqG5end/Y2FhSSjl34bYjqoEmZh4Tkdcob9IKjz3P6ykUCktbA/L5/MeWlpZeIppAYIyIjhHRvNY6CyAVpZBInTkAiwD6q+ZFIhoxxsy4aGmtz4nIJIDDtTRdO3NRDfxBROZ9379ULBZXXbUCPQ1gCsDp7a7/i9biJoDxQqEwFLZ4ALDWGmvtGSIaBRDpfAEIZ+B71XjF87x+a+0YyudcURFjTNbzvEEAKzVy7YjzEVM6nU4B6AbwxPf9C9bar+517sz6+vpqc3PzFBEdQfnvfbdUKr2ql35CQsIe5jcj4+Hph0oyMAAAAABJRU5ErkJggg==" alt="icon" />
          <h1 className="page-head__title">Signup</h1>
        </div>
      </section>
    </main>
    <Navigator />
  </>
);

export default Signup;
