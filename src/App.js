import logo from './logo.svg';
import './App.css';
import 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Card} from "react-bootstrap";
import CardComponent from "./card-Component";


function App() {

  return (
    <div className="row row-cols-1 row-cols-md-3 p-3">
        <CardComponent title="Card 01" subTitle="Sub title in the card 01" time="10 min ago" discription="This function is a valid React component because it accepts a single “props” (which stands for properties) object argument with data and returns a React element. We call such components “function components” because they are literally JavaScript functions"/>
        <CardComponent title="Card 02" subTitle="Sub title in the card 02" time="20 min ago" discription="Smodin's AI writer is easy to use. Provide your prompt with a few words and easily generate plagiarism-free, unique, and high-quality articles and essays in minutes. Type what you want to write about in a small sentence or two, "/>
        <CardComponent title="Card 03" subTitle="Sub title in the card 03" time="30 min ago" discription="Twith at least the minimum required characters for the tool to work, and click on the generate text button. Our AI Writer will create the content which you can review, edit in parts or use only the parts you liked, keep tweaking the original text, or keep generating from the original seed."/>
        <CardComponent title="Card 04" subTitle="Sub title in the card 04" time="40 min ago" discription=" This easy-to-use AI text generator can be used by all education levels to produce essays and articles and also for copywriting, marketing, page creation, writing paragraphs, headlines, lists, and more. There are no software or programming skills required."/>
        <CardComponent title="Card 05" subTitle="Sub title in the card 05" time="50 min ago" discription="This function is a valid React component because it accepts a single “props” (which stands for properties) object argument with data and returns a React element. We call such components “function components” because they are literally JavaScript functions"/>
    </div>
  );
}

export default App;
