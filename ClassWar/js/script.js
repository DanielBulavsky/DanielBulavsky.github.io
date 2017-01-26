var ver = {
  version: '0.1.1',
  done: ['min map show map window', 'map window show', 'min map nav', 'units think, fight, gather, move', 'map basic visual', 'resource', 'angular 1.3.5'],
  doing: ['ui min map update', 'map window', 'map -> ui'],
  todo: ['ui min map render and update', 'ui map render', 'ui minMap, statusBar, eventBar, commandBar', 'building class (several cells)' ,'game mvc pattern - gameCtrl, gameFactory'],
  log: function () {
    console.log('version', this.version);
    console.log('done:', this.done);
    console.log('doing:', this.doing);
    console.log('todo:', this.todo);
    return this;
  }
}
