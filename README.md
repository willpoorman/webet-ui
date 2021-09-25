# WeBet UI

The web frontend of WeBet, a friendly betting / match voting site. Built with React and Material UI

*This is a personal project between me and some friends. But external contributions are welcome if
you come across this and come up with a useful addition*

## Getting Started

Assuming you have node and npm installed, from the root directory:

1. Install dependencies: `npm install`
2. Start the dev webserver: `npm start`

## Build and Deploy

https://blog.usejournal.com/serving-react-and-django-together-2089645046e4
https://medium.com/codex/deploying-react-through-djangos-static-files-part-1-dev-setup-8a3a7b93c809
https://stackoverflow.com/questions/60705957/django-react-how-to-connect-them-for-deployment
https://medium.com/swlh/django-rest-framework-and-spa-session-authentication-with-docker-and-nginx-aa64871f29cd
https://www.django-rest-framework.org/api-guide/authentication/
https://stackoverflow.com/questions/53517329/deploying-seprate-react-frontend-and-django-drf-api?rq=1
https://medium.com/octopus-wealth/authenticated-routing-with-react-react-router-redux-typescript-677ed49d4bd6 > https://github.com/octopuswealth/authenticated-routing-with-react-redux

1. `npm run build`
2. `cp -r build <webet API project path>/webet/frontend`
3. Run the Django server according the instructions for that project

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for suggested solutions.
