export function FormHead(props) {
  let header = props.header;

  return(
    <>
      <div className="login-form__head">
        <h1>{header}</h1>
      </div>
    </>
  );
}
