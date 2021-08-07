# Why integrate the babel plugin?

derealize is a tailwindcss editor for entire front-end projects rather than html modules. It is necessary to accurately establish the connection between the document objects of webpage and the code, so you need to use babel to inject the relevant code positioning information for each document object in the development environment.

![babel-show](/img/babel-show.png)

The babel plugin only works when NODE_ENV === "development".
