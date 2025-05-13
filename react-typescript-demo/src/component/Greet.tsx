type GreetProps = {
  name: string; //string type
  messageCount?: number; //number type
  isLoggedIn?: boolean; //boolean type
};

export const Greet = (props: GreetProps) => {
  const { messageCount = 0 } = props;
  return (
    <div>
      {props.isLoggedIn ? (
        <h2>
          Welcome {props.name}, {messageCount}, {props.isLoggedIn}{" "}
        </h2>
      ) : (
        "Welcome"
      )}
    </div>
  );
};
