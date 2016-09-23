import React from 'react';
// require('styles//Listfemale.scss');
import Footer from '../footer';
import styles from './main.scss';

const PeopleComponent = props => {
  return (
    <section className={styles.listpeople}>
      <header>
        <h4>{props.facebook.location}</h4>
      </header>
      <main>
        {props.people.people.map((human, index) => {
          const humanPhoto = (
            <figure>
              <img src={human.photo} alt={human.photo} />
            </figure>
          );
          const humanWelcome = (
            <article>
              <header>{human.name}, {human.age}</header>
              <p>{human.welcome}</p>
              <div />
            </article>
          );
          return (index % 2) === 0 ? (
            <section key={index} onClick={() => props.harmonyActions.viewHumanDetail(human.id)}>
              { humanPhoto }
              { humanWelcome }
            </section>
          ) : (
            <section key={index} onClick={() => props.harmonyActions.viewHumanDetail(human.id)}>
              { humanWelcome }
              { humanPhoto }
            </section>);
          })
        }
        <div>
          <svg width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <g id="App-2" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
              <g id="List-woman" transform="translate(-178.000000, -1113.000000)">
                <g id="ic_insert_emoticon" transform="translate(176.000000, 1111.000000)">
                  <polygon id="Shape" points="0 0 24 0 24 24 0 24" />
                  <path d="M11.99,2 C6.47,2 2,6.48 2,12 C2,17.52 6.47,22 11.99,22 C17.52,22 22,17.52 22,12 C22,6.48 17.52,2 11.99,2 L11.99,2 Z M12,20 C7.58,20 4,16.42 4,12 C4,7.58 7.58,4 12,4 C16.42,4 20,7.58 20,12 C20,16.42 16.42,20 12,20 L12,20 Z M15.5,11 C16.33,11 17,10.33 17,9.5 C17,8.67 16.33,8 15.5,8 C14.67,8 14,8.67 14,9.5 C14,10.33 14.67,11 15.5,11 L15.5,11 Z M8.5,11 C9.33,11 10,10.33 10,9.5 C10,8.67 9.33,8 8.5,8 C7.67,8 7,8.67 7,9.5 C7,10.33 7.67,11 8.5,11 L8.5,11 Z M12,17.5 C14.33,17.5 16.31,16.04 17.11,14 L6.89,14 C7.69,16.04 9.67,17.5 12,17.5 L12,17.5 Z" id="Shape" fill="#A8C835" />
                </g>
              </g>
            </g>
          </svg>
          <p>Вы посмотрели все анкеты, мы сообщим вам когда появятся новые.</p>
        </div>
      </main>
      <Footer active="people" />
    </section>
  );
};

PeopleComponent.displayName = 'ListPeopleComponent';

// Uncomment properties you need
// ListfemaleComponent.propTypes = {};
// ListfemaleComponent.defaultProps = {};

export default PeopleComponent;
