import {StageComponent} from 'aurelia-testing';
import {bootstrap} from 'aurelia-bootstrapper';
//import {EventAggregator} from 'aurelia-event-aggregator';
//import {WebAPI} from './web-api';
//import {inject} from 'aurelia-framework';


describe('ContactList', () => {
  let component;
  let contacts = [
    {
    id:1,
    firstName:'John',
    lastName:'Tolkien',
    email:'tolkien@inklings.com',
    phoneNumber:'867-5309'
  },
  {
    id:getId(),
    firstName:'Clive',
    lastName:'Lewis',
    email:'lewis@inklings.com',
    phoneNumber:'867-5309'
  }
];

  beforeEach(() => {
    component = StageComponent
      .withResources('../../src/contact-list')
      .inView('<contact-list contacts.bind="contacts"></contact-list')
      .boundTo({ contacts });
  });

  it('should render contact data', done => {
    component.create(bootstrap).then(() => {
      const listElements = document.querySelectorAll('.contact');
      console.log(listElements);
      expect(listElements[0].innerHTML.trim()).toBe('John');
      done();
    }).catch(e => { console.log(e.toString()) });
  });

  afterEach(() => {
    component.dispose();
  });
});
