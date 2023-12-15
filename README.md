# Personal portfolio and blog

- **Framework**: [Next.js](https://nextjs.org/)
- **Deployment**: [Vercel](https://vercel.com)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Analytics**: [Logrocket](https://logrocket.com/)
- **Content**: [MDX](https://mdxjs.com/) with [Contentlayer](https://www.contentlayer.dev/)

## Running Locally

### Installation

1. Clone this repo

```bash
git clone https://github.com/cristian-encalada/dev.git
```

2. Change directory

```sh
cd dev
```

3. Install yarn packages

```bash
yarn
```

1. Create a `.env.local` file following the `.env.example`

```bash
cp .env.example .env.local
```

5. Add your environment variables to `.env.local`

```txt
SPOTIFY_REFRESH_TOKEN=<Your env>
SPOTIFY_CLIENT_SECRET=<Your env>
SPOTIFY_CLIENT_ID=<Your env>
// ...
```

6. Run the development server

```bash
yarn dev
```

## Previous Versions

Portfolio v1: https://cristian-encalada.github.io/dev/

Blog v2: https://cristian-encalada-blogv2.vercel.app/


## Inspiration

* https://github.com/timlrx/tailwind-nextjs-starter-blog
* https://github.com/PxlSyl/tailwind-nextjs-starter-blog-i18n/tree/main
* https://github.com/dlarroder/dalelarroder

## Licence

[MIT](https://github.com/dlarroder/dalelarroder/blob/master/LICENSE) © [Cristian Encalada](https://www.dalelarroder.com)
