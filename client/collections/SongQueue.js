// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  // TODO tomorrow: queue views, then fix logic here

  // when song is playing, queueing another song or removing a song from the queue should not stop the current song

  initialize: function(){
    this.isPlaying = false;
    this.on('add', function(song) {
      this.addToQueue(song);
    });
    this.on('remove', function(song) {
      this.isPlaying = false;
      this.playFirst();
    });
  },

  playFirst: function() {
    if(this.length > 0) {
      this.at(0).play();
    }
  },

  // playNext: function(){
  //   if(this.length > 0) {
  //     this.at(0).play();
  //   }
  // },

  addToQueue: function(song) {
    // if a song is playing
    if (this.isPlaying) {
      // ignore
      return;
    }
    // if no song is playing, start playing the song
    song.play();
    this.isPlaying = true;
  }
});
