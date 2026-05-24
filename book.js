class Book {
  #bookmark = null;

  constructor(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this._readPages = 0;
    this._readingHistory = [];
  }

  showBookInfo() {
    console.log(`${this.title} by ${this.author} has ${this.pages} pages`);
  }

  async read(pages) {
    if (pages < 0) return;
    console.log(`Reading ${pages} pages...`);
    await new Promise((resolve) => setTimeout(resolve, 1000));

    if (this._readPages + pages > this.pages) {
      this._readPages = this.pages;
    } else {
      this._readPages += pages;
    }

    const now = new Date();
    const timeString = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;
    this._readingHistory.push(`Read ${pages} pages at ${timeString}`);
    console.log(`Current progress: ${this._readPages}/${this.pages}`);
  }

  getProgress() {
    const percentage = Math.round((this._readPages / this.pages) * 100);
    return percentage;
  }

  addBookmark(page) {
    if (page >= 1 && page <= this.pages) {
      this.#bookmark = page;
      console.log(`Bookmark added on page ${page}`);
    } else {
      console.log(`Invalid bookmark page`);
    }
  }

  showBookmark() {
    if (this.#bookmark !== null) {
      console.log(`Current bookmark is on page ${this.#bookmark}`);
    } else {
      console.log(`No bookmark has been set.`);
    }
  }
}

module.exports = Book;