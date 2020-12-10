const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const generateRubbish = require('./generate_rubbish')
const app = express()
const port = 3000

app.engine('handlebars', exphbs({
  defaultLayout: 'main',
  helpers: {
    ifEqual: (preSelection, targetSelection, options) => {
      if (preSelection === targetSelection) {
        return options.fn(this)
      }
    }
  }
}))
app.set('view engine', 'handlebars')
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.render('index')
})
app.post('/', (req, res) => {
  const options = req.body
  const rubbish = generateRubbish(options)
  res.render('index', { rubbish, options })
})

app.listen(port, () => {
  console.log(`Express is running on http://localhost:${port}`)
})