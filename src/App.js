import './App.css';

function AboutPage(){
  return(
    <>
    <h1>About</h1>
    <p>Hello there.<br />How are you?</p>
    </>
  );
}

function MyButton(){
  return(
    <button>This is a button</button>
  );
}

export default function App(){
  return(
    <div>
      <AboutPage />
      <h1>Welcome to my website</h1>
      <MyButton/>
    </div>
  );
}