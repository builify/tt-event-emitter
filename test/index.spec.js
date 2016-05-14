import expect from 'unexpected';
import TTEventEmitter from '../source';

describe('TTEventEmitter', () => {
  const eventEmitter = new TTEventEmitter();

  it('should be defined', () => {
    expect(eventEmitter, 'to be defined');
  });

  describe('private methods', () => {
    describe('isFunction', () => {
      it('is a function', () => {
        expect(eventEmitter.isFunction, 'to be a', 'function');
      });

      it('detects function', () => {
        expect(eventEmitter.isFunction(() => {}), 'to be true');
        expect(eventEmitter.isFunction(function () {}), 'to be true');
      });

      it('does not pass other types', () => {
        expect(eventEmitter.isFunction(new Date()), 'to be false');
        expect(eventEmitter.isFunction(/test/i), 'to be false');
        expect(eventEmitter.isFunction({}), 'to be false');
        expect(eventEmitter.isFunction(''), 'to be false');
        expect(eventEmitter.isFunction(123), 'to be false');
        expect(eventEmitter.isFunction(undefined), 'to be false');
        expect(eventEmitter.isFunction(null), 'to be false');
        expect(eventEmitter.isFunction([]), 'to be false');
      });
    });
  });

  describe('addEventListener', () => {
    it('is a function', () => {
      expect(eventEmitter.addListener, 'to be a', 'function');
    });

    it('should add label to listeners', () => {
      eventEmitter.addListener('test', () => {
        console.log('Hello');
      });

      eventEmitter.emit('test');
    });
  });
});
