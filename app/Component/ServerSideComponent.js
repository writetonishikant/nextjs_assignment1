import classes from "../page.module.css";
const ServerSideComponent = () => {
  return (
    <div style={{marginBottom:"70px"}}>
      <h3>This is a Server-Side Component</h3>
      <br />
      <br />
      <div className={classes.description}>
        <p>1) Server side component generates HTML content on server side for the client.</p>
        <p>2) Page loading is faster</p>
      </div>
    </div>
  );
};

export default ServerSideComponent;
