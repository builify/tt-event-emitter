import expect from 'unexpected';
import TTEventEmitter from '../source';

describe('TTEventEmitter', () => {
  const eventEmitter = new TTEventEmitter();
  const testFunction = (number) => {
    return number;
  };
  const otherTestFunction = (word) => {
    return word
  };

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

  describe('addListener', () => {
    it('is a function', () => {
      expect(eventEmitter.addListener, 'to be a', 'function');
    });

    it('should add label to listeners', () => {
      eventEmitter.addListener('test', testFunction);

      expect(eventEmitter.listeners.has('test'), 'to be', true);
      expect(eventEmitter.listeners.get('test'), 'to be a', 'array');
      expect(eventEmitter.listeners.get('test'), 'to contain', testFunction);
      expect(eventEmitter.listeners.get('test'), 'to have length', 1);
      expect(eventEmitter.emit('test', 333), 'to be', true);
    });
  });

  describe('on', () => {
    it('is a function', () => {
      expect(eventEmitter.on, 'to be a', 'function');
    });

    it('should add label to listeners', () => {
      eventEmitter.on('othertest', otherTestFunction);

      expect(eventEmitter.listeners.has('othertest'), 'to be', true);
      expect(eventEmitter.listeners.get('othertest'), 'to be a', 'array');
      expect(eventEmitter.listeners.get('othertest'), 'to contain', otherTestFunction);
      expect(eventEmitter.listeners.get('othertest'), 'to have length', 1);
      expect(eventEmitter.emit('othertest', 'bilder'), 'to be', true);
    });
  });

  describe('removeListener', () => {
    it('is a function', () => {
      expect(eventEmitter.removeListener, 'to be a', 'function');
    });

    it('should remove listeners', () => {
      eventEmitter.removeListener('test', testFunction);

      expect(eventEmitter.listeners.get('test'), 'to be a', 'array');
      expect(eventEmitter.listeners.get('test'), 'to be empty');
      expect(eventEmitter.listeners.get('test'), 'to have length', 0);
    });
  });

  describe('off', () => {
    it('is a function', () => {
      expect(eventEmitter.off, 'to be a', 'function');
    });

    it('should remove listeners', () => {
      eventEmitter.off('othertest', otherTestFunction);

      expect(eventEmitter.listeners.get('othertest'), 'to be a', 'array');
      expect(eventEmitter.listeners.get('othertest'), 'to be empty');
      expect(eventEmitter.listeners.get('othertest'), 'to have length', 0);
    });
  });

  describe('deleteListener', () => {
    it('is a function', () => {
      expect(eventEmitter.deleteListener, 'to be a', 'function');
    });

    it('should delete listener', () => {
      eventEmitter.deleteListener('test');

      expect(eventEmitter.listeners.has('test'), 'to be', false);
      expect(eventEmitter.listeners.get('test'), 'to be', undefined);
    });
  });

  describe('emit', () => {
    it('is a function', () => {
      expect(eventEmitter.emit, 'to be a', 'function');
    });
  });
});
