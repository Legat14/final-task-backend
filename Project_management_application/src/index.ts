import mongoose from 'mongoose';
import { PORT } from './constants';

import * as serverService from './services/server.service';


(async () => {
  try {
    const UserName = 'DBAdmin';
    const Password = '123654';
    const clusterInfo = 'reactfinaltaskcluster.5f6psjh';
    await mongoose.connect(`mongodb+srv://${UserName}:${Password}@${clusterInfo}.mongodb.net/managerApp`);
    const port = process.env.PORT || PORT;
    serverService.server.listen(port, function () {
      console.log(`The server is running on port ${port}`);
      console.log(`If run on a local PC, visit http://localhost:${port}/api-docs/`);
    });
  } catch (error) {
    console.log(error);
  }
})();



process.on('SIGINT', async () => {
  await mongoose.disconnect();
  process.exit();
});
