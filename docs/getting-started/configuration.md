---
## sidebar_position: 1
---

# Configuration Your Frontend Project

Let's discover **Docusaurus in less than 5 minutes**.

````mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
  defaultValue="bash"
  values={[
    { label: 'Bash', value: 'bash' },
    { label: 'Windows', value: 'windows' }
]}>
  <TabItem value="bash">

  ```bash
  GIT_USER=<GITHUB_USERNAME> yarn deploy
  ```

  </TabItem>
  <TabItem value="windows">

  ```batch
  cmd /C "set "GIT_USER=<GITHUB_USERNAME>" && yarn deploy"
  ```

  </TabItem>
</Tabs>
````

## Getting Started

Get started by **creating a new site**.

Or **try Docusaurus immediately** with **[new.docusaurus.io](https://new.docusaurus.io)**.

## Generate a new site

Generate a new Docusaurus site using the **classic template**:

```shell
npx @docusaurus/init@latest init my-website classic
```

## Start your site

Run the development server:

```shell
cd my-website

npx docusaurus start
```

Your site starts at `http://localhost:3000`.

Open `docs/intro.md` and edit some lines: the site **reloads automatically** and display your changes.
