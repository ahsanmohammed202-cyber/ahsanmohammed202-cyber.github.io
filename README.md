# Mohammed Ahsan Uddin — Portfolio Website

This is your personalized website, filled in from the three CV/resume files you provided, with the employment entries customized for an academic portfolio. It is based on the earlier animated dark-purple portfolio and uses plain HTML, CSS, and JavaScript. No React, no npm, and no payment are required.

## First: view your website (1 minute)

1. Download and unzip the updated ZIP.
2. Open the **portfolio-2hour** folder.
3. **Double-click `index.html`** to open your website in Chrome or Edge.
4. Test the site: scroll, use the menu, switch dark/light mode, and click **View my CV** under Contact.
5. The `cv.html` page is print-ready: click **Print / Save as PDF**, choose **Save as PDF**, then save the file.

You can do this before editing a single line of code. Internet access is only needed for the optional Google fonts and external LinkedIn link.

## Edit your details (15–35 minutes)

Download VS Code: https://code.visualstudio.com/. In VS Code, choose **File → Open Folder** and open `portfolio-2hour`.

Open **`config.js`**, where you can change:
- `name`, `initials`, `roles`, `shortIntro`, `status`
- `email`, `github`, `linkedin`, `cv`
- `aboutOne`, `aboutTwo`, `interests`
- `studies` (education)
- `work` (the three featured projects)
- `experience` (teaching and employment)
- `skills`, `community`, `languages`, `personalInterests`

Keep the surrounding quotation marks, commas and curly braces exactly as they are. Save with **Ctrl+S**, then refresh your browser with **Ctrl+R**. If you'd like your browser to auto-refresh, install the VS Code **Live Server** extension and right-click `index.html` → **Open with Live Server**.

**Important:** `cv.html` is a separate formatted CV page. If you update your job dates or descriptions in `config.js`, also update the same information in `cv.html` so the two pages stay consistent.

## Make it yours (20 minutes)

Open `styles.css`, go near the top, and change these variables:

```css
--bg: #080b1b;       /* background */
--purple: #b28bff;   /* highlights */
--cyan: #72e8e4;     /* secondary highlights */
```

The animated graphs are illustrations, not your research findings. Replace them with actual charts or figures later if you have ones you want to publish.

## Privacy and content review (10 minutes)

- Your **phone number and full ZIP/postal address are not displayed** on the portfolio or its public CV page.
- Your email and LinkedIn are shown; you can change or blank these in `config.js` (and update `cv.html` separately).
- The updated résumé lists **Rowing Club as 2025–2026**, but the academic CV lists **Aug 2025–Present**. The website uses 2025–2026; change this if needed.
- Your CV and résumé give different end dates for **MS Lateefi 40**. The website omits those dates until you confirm which is correct.
- No GitHub account or published-paper links were supplied, so none were invented. Add your actual profile or project URLs if you want them public.
- Personal research interests are described as interests, **not** as completed publications or verified results.

## Publish for free with GitHub Pages (25–35 minutes)

1. Create/sign in to GitHub: https://github.com/
2. Create a **Public** repository: https://github.com/new
3. Name it `YOURUSERNAME.github.io` where `YOURUSERNAME` is your GitHub username.
4. Open the repository, choose **Add file → Upload files**.
5. Upload **the contents** of the `portfolio-2hour` folder, not the parent folder or ZIP. Include all `.html`, `.css`, `.js`, `.nojekyll`, `README.md`, and the `assets` folder.
6. **Commit changes**.
7. Go to **Settings → Pages**, choose **Deploy from a branch**, branch `main`, folder `/(root)`, then Save.
8. Once GitHub Pages publishes, open `https://YOURUSERNAME.github.io/`.

Official documentation: https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site

After publishing, you can edit `config.js` using GitHub's pencil icon and Commit changes. The site will automatically republish. **Your URL does not change as long as you keep publishing to the same repository.**

## Keep the EXACT SAME WEBSITE LINK after editing later

Your GitHub Pages address is tied to your GitHub username and the repository name, **not to a particular ZIP upload**. If your username is `exampleuser`, create `exampleuser.github.io`, and your site will be `https://exampleuser.github.io/`.

When you want to update the site next week or next month:

1. In GitHub, open the **existing** `YOURUSERNAME.github.io` repository; **do not make another repository**.
2. For wording, project details, or work history, click `config.js` and click the pencil icon. Edit the text, then **Commit changes**.
3. For the printable CV, edit `cv.html` the same way so both agree.
4. For bigger design changes, edit locally and use **Add file → Upload files** in the **same repository** to upload the changed `styles.css`, `index.html`, `app.js`, or other files. When asked, confirm replacing the old version / commit the changes.
5. Refresh the same website link after publication. The web address stays the same. If changes don't appear right away, give GitHub Pages time and try **Ctrl+Shift+R**.

**Important:** You cannot take over `https://justarandomdude4.github.io/` unless that GitHub account belongs to you. Your own site will have **your username** in the address.

## Troubleshooting

- **Blank page / placeholder text?** Make sure `config.js` and `app.js` are in the same folder as `index.html`.
- **Changes not showing?** Save `config.js` and hard-refresh with **Ctrl+Shift+R**.
- **CV page missing?** Upload `cv.html` with your other website files.
- **Site shows 404?** Check the repo name, Pages settings, and that `index.html` is in the repository root.
- **Wrong project details?** Update the objects under `work` in `config.js`. Project links are intentionally blank until you add real links.

## Folder map

```
portfolio-2hour/
  index.html          Main website
  cv.html             Public-facing CV and printable page
  config.js           Edit your information here
  styles.css          Colors, layout, and design
  app.js              Interactions, animations, and data rendering
  assets/favicon.svg  Browser icon
  .nojekyll           GitHub Pages compatibility file
  README.md           This guide
```
