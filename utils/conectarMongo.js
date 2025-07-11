const mongoose = require('mongoose');

async function conectarMongo(uri) {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('✅ Conectado a MongoDB Atlas');
  } catch (error) {
    console.error('❌ Error al conectar a MongoDB:', error.message);
  }
}

module.exports = conectarMongo;
