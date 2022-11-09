import mongoose from 'mongoose';
import { PORT } from './constants';

import * as serverService from './services/server.service';


(async () => {
  try {
    const UserName = 'DBAdmin';
    const Password = 'Enegq89GV8aHw0gH';
    const clusterInfo = 'reactfinaltaskcluster.5f6psjh'
    await mongoose.connect(`mongodb+srv://${UserName}:${Password}@${clusterInfo}.mongodb.net/managerApp`);
    serverService.server.listen(process.env.PORT || PORT, function () {
      console.log('Сервер ожидает подключения...');
    })
  } catch (error) {
    console.log(error);
  }
})();



process.on('SIGINT', async () => {
  await mongoose.disconnect();
  process.exit();
});
