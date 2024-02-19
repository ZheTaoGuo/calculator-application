function isBlank(value) {
    return value == null || value == ""
}

function subtract(req, res) {
    const first = req.body.num1;
    const firstValue = !isBlank(first) ? first : 0;
    const second = req.body.num2;
    const secondValue = !isBlank(second) ? second : 0;
    const difference = parseInt(firstValue) - parseInt(secondValue);
  
    res.set('Content-Type', 'application/json');
    res.status(200);
    res.send({
      success: 'True',
      difference
    });
}

module.exports = { subtract }