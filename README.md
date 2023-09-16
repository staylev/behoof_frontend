# Food delivery "Behoof" (WebUI)

![html5](https://img.shields.io/badge/html5-E34F26?logo=html5&logoColor=white&style=for-the-badge)
![css3](https://img.shields.io/badge/css3-1572B6?logo=css3&logoColor=white&style=for-the-badge)
![bootstrap](https://img.shields.io/badge/bootstrap-7952B3?logo=bootstrap&logoColor=white&style=for-the-badge)
![javascript](https://img.shields.io/badge/javascript-F7DF1E?logo=javascript&logoColor=white&style=for-the-badge)
![jquery](https://img.shields.io/badge/jquery-0769AD?logo=jquery&logoColor=white&style=for-the-badge)
![react](https://img.shields.io/badge/react-61DAFB?logo=react&logoColor=white&style=for-the-badge)
![mobx](https://img.shields.io/badge/mobx-FF9955?logo=mobx&logoColor=white&style=for-the-badge)
![axios](https://img.shields.io/badge/axios-5A29E4?logo=axios&logoColor=white&style=for-the-badge)
![apollographql](https://img.shields.io/badge/apollographql-311C87?logo=apollographql&logoColor=white&style=for-the-badge)

## Cloud & CI/CD

![docker](https://img.shields.io/badge/docker-2496ED?logo=docker&logoColor=white&style=for-the-badge&)
![githubactions](https://img.shields.io/badge/githubactions-2088FF?logo=githubactions&logoColor=white&style=for-the-badge&)

The web interface of the online academy "unicat", which interacts with the
Unicat Web-API.

* GraphQL is used to get data
* REST-Api is used to manage data

## Getting Started

### Dependencies

[![api](https://img.shields.io/badge/Behoof_APi-092E20?logo=django&logoColor=white&style=for-the-badge)](https://github.com/Umbreella/behoof_backend)

* Clone project

```git
git clone https://github.com/staylev/behoof_frontend.git
```

* Set values in **[.env](.env)**

* Create **nginx.conf**

```
server {
    listen 80;

    location / {
        root /usr/share/nginx/html ;
        index index.html index.htm ;
        try_files $uri /index.html = 404 ;
    }
}
```

* Build and run Docker

```yaml
version: "3"

services:
  frontend-behoof:
    build: .
    image: [ your_image_name ]
    ports:
      - [ your_open_port ]:80
    volumes:
      - [ path_to_nginx.conf ]:/etc/nginx/conf.d/default.conf
```

## Endpoints

* Main

```jsonpath
[your_ip_address]/
```

## Live Demo

* [https://behoof.umbreella-dev.ru/](https://behoof.umbreella-dev.ru/)
