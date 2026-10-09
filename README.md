# qozmixai.tech

Landing page for QozmixAI. It's plain HTML, CSS and JavaScript with no build step, hosted on GitHub Pages.

- English is the default in the HTML. Visitors whose browser is set to Korean see Korean automatically. The 한국어 / English button switches languages, and `?lang=ko` or `?lang=en` forces one.
- Korean text is in `assets/js/main.js` (the `KO` object). English text is in `index.html`.

## Add your images

Upload these on GitHub (**Add file → Upload files**), using these exact names:

| File | What it is |
|---|---|
| `assets/img/logo.png` | Full logo. Used for link previews on KakaoTalk, LinkedIn and Slack. |
| `assets/img/logo-mark.png` | Icon only (the robot inside the Q), transparent background, about 200×200. Shown next to "QozmixAI" in the header. |
| `assets/img/team/jannat.jpg` | Square headshot |
| `assets/img/team/zain.jpg` | Square headshot |
| `assets/img/team/aliza.jpg` | Square headshot |
| `assets/img/team/bang.jpg` | Square headshot |
| `assets/img/team/iqbal.jpg` | Square headshot |
| `assets/img/screens/posts.png` | MVP screenshot: Posts page (optional) |
| `assets/img/screens/editor.png` | MVP screenshot: carousel editor (optional) |
| `assets/img/screens/calendar.png` | MVP screenshot: content calendar (optional) |

Every image is optional. Until a photo is uploaded, the page shows initials instead. The "Inside the MVP" section stays hidden until at least one screenshot exists. Only upload screenshots that show the **QozmixAI** name, not "YouService".

## Edit text

- English: `index.html`
- Korean: the `KO` object in `assets/js/main.js` (same keys as the `data-i18n` attributes)
- Contact email: search for `hello@qozmixai.tech` in all files

## Deploy

1. Push to the repo's `main` branch.
2. In the repo, go to **Settings → Pages**. Set **Source** to "Deploy from a branch" and choose `main` / `(root)`.
3. Set **Custom domain** to `qozmixai.tech`. The `CNAME` file already contains it.
4. Add the DNS records at get.tech:
   - `A @` → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - `CNAME www` → `<github-username>.github.io`
5. Once the DNS check passes, tick **Enforce HTTPS**.
