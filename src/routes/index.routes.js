const { Router } = require('express');
const router = Router();
const axios = require('axios');
const crypto = require('crypto');
const Usuario = require('../models/usuario');
const Transaccion = require('../models/transaccion');

router.get('/', (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Content-Type', 'application/json; charset=utf-8');
  // let city = req.params.city ? req.params.city : 'Sydney';
  // axios.get(`https://maps.googleapis.com/maps/api/place/textsearch/xml?query=restaurants+in+${city}&key=AIzaSyAdufyJ_zyM47xQE2O6aBXGYesQBn0I7WE`)
  //   .then( resp => {
  //   console.log(resp);
  // })
  // .catch( err => {
  //   console.log('ERROR!!!!', err);
  // })
  res.send('Hello your connected to tyba-backend API');
});

router.post('/', async (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Content-Type', 'application/json; charset=utf-8');
  try {
    const body = JSON.parse(req.body);
    const fullName = body.fullName;
    const email = body.email;
    const username = body.username;
    const password = body.password;
    const apiKey = crypto.randomBytes(12).toString('hex');
    const user = {
      fullName,
      email,
      username,
      password,
      apiKey
    };

    const newUser = await new Usuario(user).save()
    res.send(newUser);
  } catch (error) {
    res.status(400).send('No se pudo crear el usuario');
  }
});

router.get('/api/restaurants', (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Content-Type', 'application/json; charset=utf-8');
  try {
    let city = req.params && req.params.city ? req.params.city : 'Sydney';
    axios.get(`https://maps.googleapis.com/maps/api/place/textsearch/xml?query=restaurants+in+${city}&key=AIzaSyAdufyJ_zyM47xQE2O6aBXGYesQBn0I7WE`)
      .then( async (resp) => {
        console.log(resp.results);
        const transact = {
          city,
          date: new Date(),
        };

        const newTransaccion = await new Transaccion(transact).save();
        res.send(newTransaccion);
      })
      .catch( err => {
        console.log('ERROR!!!!', err);
        res.status(400).send(`No se pudo obtener los restaurantes para la ciudad indicada ${err}`);
      })
  } catch (error) {
    res.status(400).send('No se pudo obtener los restaurantes para la ciudad indicada');
  }
});

router.get('/api/transacciones', async (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Content-Type', 'application/json; charset=utf-8');
  try {
    const transacciones = await Transaccion.find();
    res.send(transacciones);
  } catch (error) {
    res.status(400).send('No se pudo obtener los restaurantes para la ciudad indicada');
  }
});

module.exports = router;
