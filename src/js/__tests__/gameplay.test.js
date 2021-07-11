import GamePlay from '../GamePlay';

test('check gameplay', () => {
  function checkGamePlay() {
    const gameplay = new GamePlay();
    gameplay.bindToDom(null);
  }

  expect(checkGamePlay).toThrowError(new Error('container is not HTMLElement'));
});
