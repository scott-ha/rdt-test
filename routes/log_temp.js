module.exports = class myLog {
  constructor() {
    this.data;
  }
  set setValue(data) {
    this.data = data;
  }
  get cLog() {
    console.log('=================');
    console.log('LOG URL : ', this.data.url);
    console.log('=================');
  }
}
