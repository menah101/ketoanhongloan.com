const express = require('express');

module.exports = (app) => {
  app.get('/', (req, res, next) => {
    res.render('index', { title: 'Kế toán hồng loan' });
  });
}
