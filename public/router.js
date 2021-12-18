const routes = [
  {
    path: '/',
    data: 'Welcome to home page'
  },
  { 
    path: '/about',
    data: 'I am Akshay Shinde'
  },
  { 
    path: '/contact',
    data: 'This is my twitter and linkedin profiles'
  },
  { 
    path: '/tutorial',
    data: 'Creating router using vanilla JS' 
  },
]

const root = document.getElementById('root');

function router(event) {
  event.preventDefault();
  history.pushState({}, 'newUrl', event.target.href);
  let data = routes.find(route => route.path == window.location.pathname);
  root.innerHTML = data.data;
  
}

window.addEventListener('popstate', function() {
  let data = routes.find(route => route.path == window.location.pathname);
  root.innerHTML = data.data;
})

window.addEventListener('DOMContentLoaded', function() {
  let data = routes.find(route => route.path == window.location.pathname);
  root.innerHTML = data.data;
  console.log('hello');
})