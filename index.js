Video = function(){
  return this;
}

Video.prototype.play = function(file, callback) {

  callback = callback || function() {};

  window.open(page+'#'+file, '_blank', 'location=no');

  callback(null);

};

module.exports = new Video();
