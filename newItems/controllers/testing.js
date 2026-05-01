const testRoute = (req, res) => {
    // console.log('===== TEST ROUTE =====');
    // console.log('req.body:', req.body);
    // console.log('Content-Type:', req.headers['content-type']);
    // console.log('======================');

    res.json({
      success: true,
      received: req.body,
      message: 'If you see your data above, express.json() is working!'
    });
  }

  module.exports = testRoute