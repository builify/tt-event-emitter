# tt-event-emitter

[![Build Status](https://img.shields.io/travis/Trip-Trax/tt-event-emitter.svg?style=flat-square)](https://travis-ci.org/Trip-Trax/tt-event-emitter)
[![Coveralls Status](https://img.shields.io/coveralls/Trip-Trax/tt-event-emitter.svg?style=flat-square)](https://coveralls.io/r/Trip-Trax/tt-event-emitter)
[![Code Climate](https://codeclimate.com/github/Trip-Trax/tt-event-emitter/badges/gpa.svg)](https://codeclimate.com/github/Trip-Trax/tt-event-emitter)
[![NPM Version](https://badge.fury.io/js/tt-event-emitter.svg)](https://badge.fury.io/js/tt-event-emitter)

> ES7 based event emitter.

## Installation
```shell
npm install tt-event-emitter
```

## Usage
```javascript
import TTEventEmitter from 'tt-event-emitter';

const observable = new TTEventEmitter();

observable.on('sayhello', () => {
  console.log('Hello!');
});

// Say 'Hello!' in every 5 seconds.
window.setInterval(() => {
  observable.emit('sayhello');
}, 5000);

```

## Contributions & Issues
Contributions are welcome. Please clearly explain the purpose of the PR and follow the current style.

Issues can be resolved quickest if they are descriptive and include both a reduced test case and a set of steps to reproduce.

## Licence
Licensed under the [MIT License](LICENSE) © Trip-Trax 2015 - present.
