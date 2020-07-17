exports.PORT = process.env.PORT || 3000

exports.CLIENT_ORIGIN = process.env.NODE_ENV === 'production'
  ? process.env.CLIENT_ORIGIN
  : 'http://18.191.23.96:3000'

exports.CLIENT_ORIGIN_NODE = process.env.NODE_ENV === 'production'
  ? process.env.CLIENT_ORIGIN_NODE
  : 'http://18.191.23.96:5000'
