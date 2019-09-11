import { action, computed, decorate, observable } from 'mobx';

const ALL_VALUES = [
  { id: 'fame',       label: 'Fame',        description: 'Something' },
  { id: 'challenge',  label: 'Challenge',   description: 'Something' },
  { id: 'power',      label: 'Power',       description: 'Something' },
];

const NOT_IMPORTANT = 0;
const IMPORTANT = 1;
const VERY_IMPORTANT = 2;

class Store {
  state = 'not_started';
  options = [];
  importanceMap = {};

  // COMPUTED

  get allValues() {
    return ALL_VALUES;
  }

  get unassignedValues() {
    return ALL_VALUES.filter(val => this.importanceMap[val.id] == null);
  }

  get importantValues() {
    return ALL_VALUES.filter(val => this.importanceMap[val.id] === IMPORTANT);
  }

  get notImportantValues() {
    return ALL_VALUES.filter(val => this.importanceMap[val.id] === NOT_IMPORTANT);
  }

  get veryImportantValues() {
    return ALL_VALUES.filter(val => this.importanceMap[val.id] === VERY_IMPORTANT);
  }

  get current() {
    return this.options.length > 0 && this.options[0];
  }

  // ACTIONS

  reset() {
    this.state = 'not_started';
    this.importanceMap = {};
  }

  reviewImportant() {
    this.options = this.importantValues;
  }

  reviewVeryImportant() {
    this.options = this.veryImportantValues;
  }

  setCurrentImportant() {
    this.setImportance(IMPORTANT);
  }

  setCurrentNotImportant() {
    this.setImportance(NOT_IMPORTANT);
  }

  setCurrentVeryImportant() {
    this.setImportance(VERY_IMPORTANT);
  }

  setImportance(importance) {
    this.importanceMap[this.options[0].id] = importance;
    this.options.shift();
  }

  start() {
    this.options = [].concat(ALL_VALUES);
    this.state = 'started';
  }

  complete() {
    this.state = 'complete';
  }
}

export default decorate(Store, {
  options: observable,
  state: observable,
  importanceMap: observable,
  valueIdx: observable,

  allValues: computed,
  current: computed,
  unassignedValues: computed,
  importantValues: computed,
  notImportantValues: computed,
  veryImportantValues: computed,

  reset: action,
  reviewImportant: action,
  reviewVeryImportant: action,
  setCurrentImportant: action,
  setCurrentNotImportant: action,
  setCurrentVeryImportant: action,
  setImportance: action,
  start: action,
});
