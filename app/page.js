import classes from "./page.module.css";
import ServerSideComponent from "./Component/ServerSideComponent";
import ClientSideComponent from "./Component/ClientSideComponent";

export default function Home() {
  return (
    <main className={classes.main}>
      <div className={classes.grid}>
          <ServerSideComponent />
          <ClientSideComponent />
      </div>
    </main>
  );
}
