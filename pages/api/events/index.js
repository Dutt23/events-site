const { events } = require ('./data.json')
export default (req, res) => {
  if(req.method === 'GET')
  res.status(200).json(events)
  else {
    res.setHeader('Allow', ['GET'])
    res.status(405)
    res.json({message : `Request methid ${req.method} is not allowed`})
  }
  
}
