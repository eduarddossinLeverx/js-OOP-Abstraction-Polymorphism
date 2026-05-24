const Book = require("./Book.js");

class AudioBook extends Book {
  constructor(title, author, pages, audioLength) {
    super(title, author, pages); 
    this.audioLength = audioLength;
    this.currentMinute = 0;
  }

  async playAudio(minutes) {
    if (minutes < 0) return;
    console.log(`Playing audio for ${minutes} minutes...`);
    await new Promise((resolve) => setTimeout(resolve, 1000));

    if (this.currentMinute + minutes > this.audioLength) {
      this.currentMinute = this.audioLength;
    } else {
      this.currentMinute += minutes;
    }
    console.log(`Listening progress: ${this.currentMinute}/${this.audioLength} minutes`);
  }

  showAudioStats() {
    console.log(`Audio stats: Listened ${this.currentMinute}/${this.audioLength} mins. Read ${this._readPages}/${this.pages} pages.`);
  }
}

module.exports = AudioBook;