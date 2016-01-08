var Observable = require('vigour-js/lib/observable')
var parsed = require('./parsed')(window.location.href)

exports.url = new Observable({
  on: {
    data (data) {
      console.log('PUSHING DAT STATE',this.parent.val);
      window.history.pushState({}, '', this.parent.val)
    }
  }
})
// navigation.set({
//   // lang:
//   title: urlpath.parsed.title, // hoe kunnen we dit opzoeken in DB??
//   season: urlpath.parsed.season, // number after season-
//   episode: urlpath.parsed.episode // number after episode-
// }) // updates navigation object
//

exports.router = new Observable({
  url: {
    val: window.location
    // search: ''
  }, // set href
}, false).Constructor