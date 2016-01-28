describe('LibraryEntryView', function() {
  var view, model;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    model = new SongModel({
      artist: 'Fakey McFakerson',
      title: 'Never Gonna Mock You Up',
      url: 'example/url',
    });
    view = new LibraryEntryView({model: model});
    view.render();
  });
  afterEach(function () { clock.restore(); });

  // This spec passes already, but it's mutually exclusive with the one below.
  // Comment it out when implementing the song queue.
  it ('plays clicked songs', function(){
    sinon.spy(SongModel.prototype, 'enqueue');

    view.$el.children().first().click();
    expect(model.enqueue).to.have.been.called;

    SongModel.prototype.enqueue.restore();
  });

  it('queues clicked songs', function(){
    sinon.spy(SongModel.prototype, 'enqueue');

    view.$el.children().first().click();
    expect(model.enqueue).to.have.been.called;

    SongModel.prototype.enqueue.restore();
  });

});
