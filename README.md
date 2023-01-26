
# quickShare-API

Best and simpal file sharing api. i use nodejs for backend apis and mongodb for database.




## Run Locally

Clone the project

```bash
  git clone https://github.com/vrajpatel01/quickShare-api.git
```

Go to the project directory

```bash
  cd quickShare
```

Install dependencies

```bash
  npm install
```

use nodemon dev dependenci for auto reload nodejs server

```bash
  npm insiall -d nodemon
```

Start the server

```bash
  nodemon
```


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`DATABASE_URL`

`SERVER_DOMAIN_NAME`


## API Reference

#### Send file in upload folder and save file details in database.

```api
  POST /api/upload
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `file` | `file` | **Required**. |

#### Get Download page url

```api
  GET /file/${uuid}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `uuid`      | `string` | **Required**. Id of file to fetch |

#### Get file download url

```api
  GET /file/download/${uuid}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `uuid`      | `string` | **Required**. Id of file to fetch |



## Tech Stack

**Client:** ejs, TailwindCSS

**Server:** Node, Express

**Database:** MongoDb

