import 'dotenv';
import { createServer, IncomingMessage, ServerResponse } from 'http';
import { HTTP_METHOD, HTTP_STATUS_CODE } from './container/common/common.type';
const url = require('url');
const fs = require('fs');

const port = process.env.PORT || '5000';

const server = createServer(
  (request: IncomingMessage, response: ServerResponse) => {
    if (request.method === HTTP_METHOD.GET) {
      const path = url.parse(request.url, true).pathname; // url에서 path 추출
      if (path === '/') {
        // 주소가 /이면
        response.writeHead(HTTP_STATUS_CODE.Ok, {
          'Content-Type': 'text/html',
        });
        fs.readFile(__dirname + '/index.html', (err, data) => {
          if (err) {
            return console.error(err);
          }
          response.end(data, 'utf-8');
        });
      } else {
        // 매칭되는 주소가 없으면
        response.statusCode = HTTP_STATUS_CODE.NotFound; // 404 상태 코드
        response.end('주소가 없습니다');
        console.log(
          'askjcnjksdncjksdnvjksdnjkvnsjkdncjksdncjknsdjkcnsdjkncjksdncjsndjkcnsjkdcnjksndcjksdnjk',
        );
      }
    }
  },
);

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
