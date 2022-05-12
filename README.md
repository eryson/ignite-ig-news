<h1 align="center"> 🚧 Ignews 🚧</h1>
<h3 align="center">
  Blog using NextJS
</h3>

<p align="center">
  <a href="#%EF%B8%8F-about-the-project">About the project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-getting-started">Getting started</a>

<p align="center">
  <img alt="mockup" src="./public/images/demo.png" width="500px">
</p>


## 📄 About the project

Ignews is a website to publish about technology and receive all the news. The user will be able to connect/sign in through their Github acocunt. After that, will be able to subscribe to the service. When subscribed, the user will be able to see the entire post. If not subscribed, only a preview.


**Ignews is a website developed during Ignite Bootcamp focused to learn the best use of NextJS.**


## 💻 Technologies

The application was developed using the NextJS framework, applying concepts such as consuming external API, Root API, Server Side Rendering (SSR), Static Site Generation (SSG), STRIPE for subscription payments, NextAuth for authentication with Github, FaunaDB to store the information in a database, Prismic CMS for adding and managing post content, Sass to make the styling development process simpler and more efficient and JAMstack for better performance, security and easy scalability.

<p>
  <a href="https://nextjs.org/" target="_blank">NextJS</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="https://www.typescriptlang.org/" target="_blank">Typescript</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="https://stripe.com/br" target="_blank">Stripe</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="https://next-auth.js.org/" target="_blank">NextAuth</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="https://fauna.com/" target="_blank">FaunaDB</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="https://prismic.io/" target="_blank">Prismic CMS</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="https://sass-lang.com/" target="_blank">Sass</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="https://jamstack.org/" target="_blank">JAMstack</a>&nbsp;&nbsp;&nbsp; 
  
</p>


## 💻 Getting started

**Create an account and configure external services**
* GitHub
* FaunaDB
* Prismic CMS
* Stripe

**Clone the project and access the folder**

```bash
$ git clone https://github.com/eryson/ignite-ig-news && cd ignite-ig-news
```

**Then install the dependencies**

```bash
# Create .env.local file with the keys:
# Stripe keys
# Github client keys
# NextAuth key
# FaunaDB key
# Prismic keys

# Install the dependencies
$ yarn

# Start the client
$ yarn dev
```

## 📝 License

Distributed under the MIT License. See [LICENSE](LICENSE) for more information.
