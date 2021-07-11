Cloned from https://github.com/rancherosauce/ford-adventure-ui

# Hackathon Starter

- Files are routes, for pages and API endpoints
- Baked-in optimizations
- Authentication
- Complex layouts using a text editor

## Libraries

- React
- [Next.js](https://nextjs.org/docs/getting-started)
- TypeScript (optional)
- [Chakra UI](https://chakra-ui.com/)
- [MDX](https://mdxjs.com/) to quickly create views (optional)

## _[Supabase](https://supabase.io/)_

You'll need to be added to the org:

1. Create account, and accept invite to org
1. Login, and go to Settings
1. Copy URL and KEY (see below)
1. Duplicate `.env.local.example` to `.env.local`
1. Paste URL and KEY from to `.env.local`

![Url and Key](/public/keyURL.png?raw=true)

\*\*\*\*You'll need to create Certificates. On MacOSX, run the following in the command line

```
openssl req -x509 -out localhost.crt -keyout localhost.key \
    -newkey rsa:2048 -nodes -sha256 \
    -subj '/CN=localhost' -extensions EXT -config <( \
    printf "[dn]\nCN=localhost\n[req]\ndistinguished_name = dn\n[EXT]\nsubjectAltName=DNS:localhost\nkeyUsage=digitalSignature\nextendedKeyUsage=serverAuth")
```

Generate the certificates, authorize them, and add them to the `./certificates`
