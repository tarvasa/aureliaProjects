import {StageComponent} from 'aurelia-testing';
import {bootstrap} from 'aurelia-bootstrapper';
//import {EventAggregator} from 'aurelia-event-aggregator';
//import {WebAPI} from './web-api';
//import {inject} from 'aurelia-framework';


describe('Header', () => {
  let component;
  
  beforeEach(() => {
    component = StageComponent
      .withResources('../../src/header')
      .inView('<header headertext.bind="headertext"></header>')
      .boundTo({ headertext: 'Contacts'});
  });

  it('should render header', done => {
    component.create(bootstrap).then(() => {
      const nameElement = document.querySelector('.headertext');
      console.log(nameElement);
      expect(nameElement.innerHTML).toBe('Contacts');
      done();
    }).catch(e => { console.log(e.toString()) });
  });

  afterEach(() => {
    component.dispose();
  });
});
