import Head from "next/head";
import React from "react";

import styles from "../styles/Index.module.css";

function Index() {
  return (
    <>
      <Head>
        <title>Welcome to Plasmic</title>
      </Head>
      <div className={styles.page}>
        <header className={styles.header}>
          <img
            className={styles.logo}
            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0zNCAyNkgzMlYyNUMzMiAxOC4zNzI5IDI2LjYyNzEgMTMuMDAwNiAyMCAxMy4wMDA2QzEzLjM3MjkgMTMuMDAwNiA4LjAwMDU1IDE4LjM3MjkgOC4wMDA1NSAyNUw4IDI2SDZDNS40NDc3MSAyNiA1IDI1LjU1MjMgNSAyNUM1IDE2LjcxNTkgMTEuNzE2IDEwLjAwMDQgMjAgMTAuMDAwNEMyOC4yODQxIDEwLjAwMDQgMzQuOTk5NiAxNi43MTU5IDM0Ljk5OTYgMjVDMzQuOTk5NiAyNS41NTIzIDM0LjU1MjMgMjYgMzQgMjZaIiBmaWxsPSJ1cmwoI3BhaW50MF9saW5lYXIpIi8+CjxwYXRoIGQ9Ik0yNi45OTkxIDI1QzI2Ljk5OTEgMjEuMTM0NiAyMy44NjU1IDE4LjAwMSAyMCAxOC4wMDFDMTYuMTM0NSAxOC4wMDExIDEzIDIxLjEzNDYgMTMgMjVWMjZIMTVDMTUuNTUyMyAyNiAxNiAyNS41NTIzIDE2IDI1QzE2IDIyLjc5MDkgMTcuNzkwOSAyMSAyMCAyMUMyMi4yMDkxIDIxIDI0IDIyLjc5MDkgMjQgMjVDMjQgMjUuNTUyMyAyNC40NDc3IDI2IDI1IDI2SDI3TDI2Ljk5OTEgMjVaIiBmaWxsPSJ1cmwoI3BhaW50MV9saW5lYXIpIi8+CjxwYXRoIGQ9Ik0zMC45OTkgMjQuOTk5OUMzMC45OTkgMTguOTI1NCAyNi4wNzQ2IDE0LjAwMSAyMCAxNC4wMDFDMTMuOTI1NCAxNC4wMDEgOS4wMDEwNSAxOC45MjU1IDkuMDAxMDUgMjVIOVYyNkgxMi4wMDA0VjI1QzEyLjAwMDQgMjAuNTgyIDE1LjU4MiAxNy4wMDA1IDIwIDE3LjAwMDVDMjQuNDE4IDE3LjAwMDUgMjggMjAuNTgyIDI4IDI1VjI2SDMxVjI1TDMwLjk5OSAyNC45OTk5WiIgZmlsbD0idXJsKCNwYWludDJfbGluZWFyKSIvPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDBfbGluZWFyIiB4MT0iNSIgeTE9IjI2IiB4Mj0iMzUiIHkyPSIyNiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjMTg3N0YyIi8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzA0QTRGNCIvPgo8L2xpbmVhckdyYWRpZW50Pgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MV9saW5lYXIiIHgxPSIxMyIgeTE9IjI2IiB4Mj0iMjciIHkyPSIyNiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjRjAyODQ5Ii8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0Y1NTMzRCIvPgo8L2xpbmVhckdyYWRpZW50Pgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50Ml9saW5lYXIiIHgxPSI5IiB5MT0iMjYiIHgyPSIzMSIgeTI9IjI2IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiM0NUJENjIiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMkFCQkE3Ii8+CjwvbGluZWFyR3JhZGllbnQ+CjwvZGVmcz4KPC9zdmc+Cg=="
            alt=""
          />
          <h1 className={styles.title}>Welcome to Plasmic!</h1>
          <a
            className={styles.link}
            href="https://www.plasmic.app/learn/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn Plasmic
          </a>

          <p className={styles.note}>
            <i>
              Note: Remember to remove this file if you introduce a Page component
              at the '/' path.
            </i>
          </p>
        </header>
      </div>
    </>
  );
}

export default Index;
