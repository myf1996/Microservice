import app  from './app'
import { systemConfig } from './config';

const port = systemConfig.port;

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});